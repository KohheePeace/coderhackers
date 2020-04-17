---
title: Step6-1 Add Drawer
---

In this step, we are going to 

- Add Drawer widget

## Copy and paste drawer from catalog
We can choose **Drawer widgets** from here:
https://flutter.dev/docs/development/ui/widgets/material

Then, copy and paste code in `pages/home_page.dart`

```dart title="pages/home_page.dart"
import 'package:flutter/material.dart';

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
      <!-- highlight-start -->
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: const <Widget>[
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
              leading: Icon(Icons.message),
              title: Text('Messages'),
            ),
            ListTile(
              leading: Icon(Icons.account_circle),
              title: Text('Profile'),
            ),
            ListTile(
              leading: Icon(Icons.settings),
              title: Text('Settings'),
            ),
          ],
        ),
      ),
      <!-- highlight-end -->
      body: Center(child: Text('This is home page')),
    );
  }
}
```

## Edit content of drawer
Okay, so let's edit drawer content for `Login` and `Register` page link.

```dart
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
      <!-- highlight-start -->
      ListTile(
        leading: Icon(Icons.exit_to_app),
        title: Text('Login'),
      ),
      ListTile(
        leading: Icon(Icons.account_circle),
        title: Text('Register'),
      ),
      <!-- highlight-end -->
    ],
  ),
),
```