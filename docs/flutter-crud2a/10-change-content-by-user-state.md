---
title: Step10 Change the content by user's login state
---

## Goal of this step
- Change content by user's login state

In this step, we will just **pass down state from top to bottom**.
And by using passed down props, change the content.

## Make `lib/main.dart` StatefulWidget
Convert `lib/main.dart` from stateless widget to stateful widget.
This is because I want to handle state in this widget.

![convert-stateless-to-statefull.gif](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/convert-stateless-to-statefull.gif)

## Add firebase `onAuthStateChanged` and check `isAuthenticated`
- Declare `isAuthenticated`
- check user's login state by using `onAuthStateChanged` in `initState()`
- Pass down `isAuthenticated` state to `HomePage`


#### `lib/main.dart`
```dart {14,16-26,38}
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'pages/home_page.dart';
import 'pages/register_page.dart';

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
    return  MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        // When navigating to the "/" route, build the FirstScreen widget.
        '/': (context) => HomePage(isAuthenticated: isAuthenticated),
        '/sign_up': (context) => RegisterPage(),
      },
    );
  }
}
```

## Edit HomePage to accept `isAuthenticated` props
You can imitate this by `lib/main_initial.dart`
```dart {2-3,19-20,}
class HomePage extends StatefulWidget {
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
    ...
	  body: Center(
		  // https://stackoverflow.com/questions/49713189/how-to-use-conditional-statement-within-child-attribute-of-a-flutter-widget-cen
		  child: widget.isAuthenticated ? Text('Home Page after login') : Text('This is home page')
	  ),
	);
  }
}
```

Here, we change the content by user's login state.

```dart
...
body: Center(
  child: widget.isAuthenticated ? Text('Home Page after login') : Text('This is home page')
),
...
```

So, we were able to pass down props and change the content by using passed down props!!

This is **1 level down**. So not troublesome. In the next section we will pass down props **2 level down**.

---

## Edit Drawer

### 1. Separate Drawer widgets

1. Make `widgets` folder under `lib`.
2. Make `lib/widgets/home_drawer.dart`

#### `lib/widgets/home_drawer.dart`
```dart
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';

class HomeDrawer extends StatelessWidget {
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
          ListTile(
            leading: Icon(Icons.exit_to_app),
            title: Text('Login'),
            onTap: () {
              // https://stackoverflow.com/a/59154381
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
              Navigator.pushNamed(context, '/sign_up');
            }
          ),
        ],
      ),
    );
  }
}
```

### 2. Edit HomeDrawer to accept isAuthenticated

```dart {2-3}
class HomeDrawer extends StatelessWidget {
  HomeDrawer({Key key, this.isAuthenticated}) : super(key: key);
  final bool isAuthenticated;
  ...
```

### 3. Change Drawer content by isAuthenticated
```dart {23-69}
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

### 4. Pass `widget.isAuthenticated` to `home_drawer.dart`

`home_page.dart`
```dart {11}
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

## Add Firebase Auth Sign Out code
Sign out code is...
```dart {4-7}
ListTile(
  leading: Icon(Icons.exit_to_app),
  title: Text('Sign Out'),
  onTap: () async {
	await FirebaseAuth.instance.signOut();
	Navigator.pushNamed(context, '/');
  },
),
```

## Review pass down props

Like this example, passing down `isAuthenticated` is troublesome...

So, in the next step I will introduce **Provider**!

