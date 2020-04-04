---
title: Step10 Change the content by user's login state
---

## Goal of this step
- Change content by user's login state

In this step, we will

1. **Pass down state from top to bottom**.
2. Change the content by using passed down state.

## Make `lib/main.dart` StatefulWidget
Convert `lib/main.dart` from stateless widget to StatefulWidget.
This is because I want to handle state in this widget.

![convert-stateless-to-statefull.gif](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/convert-stateless-to-statefull.gif)

## Add firebase `onAuthStateChanged` and check `isAuthenticated`
- Declare `isAuthenticated`
- `initState()` is LifeCycle method
- `onAuthStateChanged` is triggered on sign-in or sign-out. https://firebase.google.com/docs/reference/js/firebase.auth.Auth.html#onauthstatechanged
- In `onAuthStateChanged` if user exists, [setState()](https://flutter.dev/docs/development/data-and-backend/state-mgmt/options#setstate) => `isAuthenticated` true.
- Pass down `isAuthenticated` state to `HomePage`


```dart {14,16-32,44} title="lib/main.dart"
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

    // https://firebase.google.com/docs/auth/web/manage-users
    // https://stackoverflow.com/questions/45353730/firebase-login-with-flutter-using-onauthstatechanged
    FirebaseAuth.instance.onAuthStateChanged.listen((user) {
      // This is called when "sign-in" and "sign-out" is triggerd
      print('onAuthStateChanged called!!!');
      
      // If user signed-in already "user" is not null
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

```dart {2-3,20} title="lib/pages/home_page.dart"
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
		  child: widget.isAuthenticated ? Text('Home Page after login') : Text('Home Page before login')
	  ),
	);
  }
}
```

Here, we change the content by user's login state passed down from parent widget.

```dart
...
body: Center(
  child: widget.isAuthenticated ? Text('Home Page after login') : Text('Home Page before login')
),
...
```

## Add Firebase Auth Sign Out code
Sign out code is...
https://pub.dev/documentation/firebase_auth/latest/firebase_auth/FirebaseAuth-class.html


```dart title="lib/pages/home_page.dart"
ListTile(
  leading: Icon(Icons.exit_to_app),
  title: Text('Sign Out'),
  onTap: () async {
    await FirebaseAuth.instance.signOut();
    Navigator.pushNamed(context, '/');
  },
),
```

## Test it
By sign out and login, please check the content changes.

## Summery
So, we were able to pass down props and change the content by using passed down props!!

This is **1 level down**. So not troublesome.

In the next section we will pass down props **2 level down**.

---

## Edit Drawer

### 1. Separate Drawer widgets

1. Make `widgets` folder under `lib`.
2. Make `lib/widgets/home_drawer.dart`

Extract `Drawer` from HomePage.

```dart title="lib/widgets/home_drawer.dart"
import 'package:firebase_auth/firebase_auth.dart';
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
              Navigator.pushNamed(context, '/sign_up');
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
      ),
    );
  }
}
```

### 2. Pass `widget.isAuthenticated` to `home_drawer.dart`


```dart {11} title="home_page.dart"
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

### 3. Edit HomeDrawer to accept isAuthenticated

```dart {2-3} title="home_drawer.dart"
class HomeDrawer extends StatelessWidget {
  HomeDrawer({Key key, this.isAuthenticated}) : super(key: key);
  final bool isAuthenticated;
  ...
```


### 4. Change Drawer content by `isAuthenticated`
```dart {28-74} title="home_drawer.dart"
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
          // About this syntax: https://github.com/flutter/flutter/issues/28181#issuecomment-510667527
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
                Navigator.pushNamed(context, '/sign_up');
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

## Review pass down props

Like this example, passing down `isAuthenticated` is troublesome...

So, in the next step I will introduce **Provider**!

