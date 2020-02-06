## Step10 Change content by user's login state
Ref: https://flutter.dev/docs/development/data-and-backend/state-mgmt/intro

There are a lot of options to manage state.

In this tutorial, we're going to...

1. Just **pass down state from top to bottom**
2. After you feel pain of this approach use **Provider**




### Edit `lib/main.dart`
Convert from stateless widget to statefull widget
![img/convert-stateless-to-statefull.gif](img/convert-stateless-to-statefull.gif)

And edit file...

`lib/main.dart`
```dart
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/home_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  bool isAuthenticated = false;

  // https://stackoverflow.com/questions/41479255/life-cycle-in-flutter
  // https://flutterbyexample.com/stateful-widget-lifecycle/
  void initState() {
	super.initState();
	// https://stackoverflow.com/questions/45353730/firebase-login-with-flutter-using-onauthstatechanged
	FirebaseAuth.instance.onAuthStateChanged.listen((user) {
	  setState(() {
		isAuthenticated = user != null;
	  });
	});
  }

  @override
  Widget build(BuildContext context) {
	return MaterialApp(
	  title: 'Flutter Demo',
	  theme: ThemeData(
		primarySwatch: Colors.blue,
	  ),
	  home: HomePage(isAuthenticated: isAuthenticated),
	);
  }
}
```

### Edit `lib/pages/home_page.dart` to accept properties
You can imitate this by `lib/main_initial.dart`
```dart
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';

class HomePage extends StatefulWidget {
	// https://stackoverflow.com/questions/52056035/flutter-myhomepagekey-key-this-title-superkey-key-pls-any-one-explain
	// This code means => construct HomePage by using parent constructor
  HomePage({Key key, this.isAuthenticated}) : super(key: key);

  final bool isAuthenticated;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("Home Page"),
	  ),
	  drawer: Drawer(
		child: ListView(
		  padding: EdgeInsets.zero,
		  children: <Widget>[
			DrawerHeader(
			  decoration: BoxDecoration(
				color: Colors.blue,
			  ),
			  child: Text(
				'Drawer Header',
				style: TextStyle(
				  color: Colors.white,
				  fontSize: 24,
				),
			  ),
			),
			ListTile(
			  leading: Icon(Icons.exit_to_app),
			  title: Text('Login'),
			  onTap: () {
				// https://flutter.dev/docs/cookbook/navigation/navigation-basics#2-navigate-to-the-second-route-using-navigatorpush
				// https://stackoverflow.com/questions/43807184/how-to-close-scaffolds-drawer-after-an-item-tap
				Navigator.pop(context);
				Navigator.push(
				  context,
				  MaterialPageRoute(builder: (context) => LoginPage()),
				);
			  }
			),
			ListTile(
			  leading: Icon(Icons.account_circle),
			  title: Text('Register'),
			  onTap: () {
				Navigator.pop(context);
				Navigator.push(
				  context,
				  MaterialPageRoute(builder: (context) => RegisterPage()),
				);
			  }
			),
		  ],
		),
	  ),
	  body: Center(
		// https://stackoverflow.com/questions/49713189/how-to-use-conditional-statement-within-child-attribute-of-a-flutter-widget-cen
		child: widget.isAuthenticated ? Text('Home Page after login') : Text('This is home page')
	  ),
	);
  }
}
```

Here, we change the content by users login state.

```dart
...
body: Center(
  child: widget.isAuthenticated ? Text('Home Page after login') : Text('This is home page')
),
...
```

### Separate drawer widgets and change contents by user's login state
In this step we will change drawer contents by isAuthenticated.

Make `widgets` folder under `lib`.

Make `lib/widgets/home_drawer.dart`

```dart
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/my_posts_page.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';

class HomeDrawer extends StatelessWidget {
  HomeDrawer({Key key, this.isAuthenticated}) : super(key: key);

  final bool isAuthenticated;

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          DrawerHeader(
            decoration: BoxDecoration(
              color: Colors.blue,
            ),
            child: Text(
              'Drawer Header',
              style: TextStyle(
                color: Colors.white,
                fontSize: 24,
              ),
            ),
          ),
          // https://github.com/flutter/flutter/issues/28181#issuecomment-508349651
          if (isAuthenticated) ...[
            ListTile(
              leading: Icon(Icons.note),
              title: Text('My Posts'),
              onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => MyPostsPage()),
              );
              }
            ),
            ListTile(
              leading: Icon(Icons.exit_to_app),
              title: Text('Sign Out'),
              onTap: () async {
              await FirebaseAuth.instance.signOut();
              Navigator.pushNamed(context, '/');
              },
            ),
          ],
          if (!isAuthenticated) ...[
            ListTile(
              leading: Icon(Icons.exit_to_app),
              title: Text('Login'),
              onTap: () {
              // https://flutter.dev/docs/cookbook/navigation/navigation-basics#2-navigate-to-the-second-route-using-navigatorpush
              // https://stackoverflow.com/questions/43807184/how-to-close-scaffolds-drawer-after-an-item-tap
              Navigator.pop(context);
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => LoginPage()),
              );
              }
            ),
            ListTile(
              leading: Icon(Icons.account_circle),
              title: Text('Register'),
              onTap: () {
              Navigator.pop(context);
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => RegisterPage()),
              );
              }
            ),
          ],
        ],
      ),
    );
  }
}
```
* If you see sdk version warning, please click quick fix of vscode.

Sign out code is...
```dart
ListTile(
  leading: Icon(Icons.exit_to_app),
  title: Text('Sign Out'),
  onTap: () async {
	await FirebaseAuth.instance.signOut();
	Navigator.pushNamed(context, '/');
  },
),
```

### Pass `widget.isAuthenticated` to `home_drawer.dart`

`home_page.dart`
```dart
...

class _HomePageState extends State<HomePage> {

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("Home Page"),
	  ),
	  drawer: HomeDrawer(isAuthenticated: widget.isAuthenticated),
	  body: Center(
		// https://stackoverflow.com/questions/49713189/how-to-use-conditional-statement-within-child-attribute-of-a-flutter-widget-cen
		child: widget.isAuthenticated ? Text('Home Page after login') : Text('This is home page')
	  ),
	);
  }
}
```

Like this example, passing down `isAuthenticated` is troublesome...

So, in the next step I will introduce **Provider**!

