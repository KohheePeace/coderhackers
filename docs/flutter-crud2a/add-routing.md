---
title: Step6-2 Add Routing
---

In this step, we're going to
- Learn Routing in flutter


## Overview

There are two way for navigate pages in flutter

1. Navigate directly by using `Navigator.push()` and `MaterialPageRoute`: https://flutter.dev/docs/cookbook/navigation/navigation-basics#2-navigate-to-the-second-route-using-navigatorpush
2. Define **`named routes`** and Navigate to those routes by using `Navigator.pushNamed`: https://flutter.dev/docs/cookbook/navigation/named-routes#3-navigate-to-the-second-screen

In this step, let's try both.

### Add Navaigation code to Drawer's ListTile

```dart title="pages/home_page.dart"
ListTile(
	leading: Icon(Icons.exit_to_app),
	title: Text('Login'),
  <!-- highlight-start -->
	onTap: () {
		// Close drawer: https://stackoverflow.com/a/59154381
		Navigator.pop(context);
		Navigator.push(
			context,
			MaterialPageRoute(builder: (context) => LoginPage()),
		);
	}
  <!-- highlight-end -->
),
ListTile(
	leading: Icon(Icons.account_circle),
	title: Text('Register'),
  <!-- highlight-start -->
	onTap: () {
		Navigator.pop(context);
		Navigator.pushNamed(context, '/sign_up');
	}
  <!-- highlight-end -->
),
```

### Define Named routes in main.dart
To use named routes, you need to define routes in `main.dart`
https://flutter.dev/docs/cookbook/navigation/named-routes#2-define-the-routes

:::caution
Warning: When using initialRoute, **don’t define a home property.**
:::

```dart title="lib/main.dart"
return MaterialApp(
	title: 'Flutter Demo',
	theme: ThemeData(
		primarySwatch: Colors.blue,
	),
  <!-- highlight-start -->
	initialRoute: '/',
	routes: {
		// When navigating to the "/" route, build the FirstScreen widget.
		'/': (context) => HomePage(),
		'/sign_up': (context) => RegisterPage(),
	},
  <!-- highlight-end -->
);
```

### Pros and Cons of using `push` vs `pushNamed`
This really depends on your project, so please check the below issue link.

https://github.com/flutter/flutter/issues/3867

## Final code


```dart title="lib/main.dart"
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/home_page.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        // When navigating to the "/" route, build the FirstScreen widget.
        '/': (context) => HomePage(),
        '/sign_up': (context) => RegisterPage(),
      },
    );
  }
}
```

```dart title="pages/home_page.dart"
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';

class HomePage extends StatefulWidget {
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
                  // Close drawer: https://stackoverflow.com/a/59154381
                  Navigator.pop(context);
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => LoginPage()),
                  );
                }),
            ListTile(
                leading: Icon(Icons.account_circle),
                title: Text('Register'),
                onTap: () {
                  Navigator.pop(context);
                  Navigator.pushNamed(context, '/sign_up');
                }),
          ],
        ),
      ),
      body: Center(child: Text('This is home page')),
    );
  }
}
```

