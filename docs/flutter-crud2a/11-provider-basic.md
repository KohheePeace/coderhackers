---
title: Step11 Provider Basic
---

## Goal of this step
- Learn basic provider

Provider is very simple.

But the official docs example is too complicated.

https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple

Let's first start basic example.

Refs: https://alligator.io/flutter/state-management/

## What is Provider?
Provider is one of the approaches to manage state.

You can see there are a lot of other approaches.
https://flutter.dev/docs/development/data-and-backend/state-mgmt/options

## Install Provider package
https://pub.dev/packages/provider

`pubspec.yaml`
```yaml
...

dependencies:
  flutter:
	sdk: flutter

  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^0.1.2
  firebase_auth: ^0.15.3+1
  provider: ^4.0.1
...
```

## Use Provider
In this example, we will just provide Text String.

```dart {5,16,32-46}
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/home_page.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';
import 'package:provider/provider.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  bool isAuthenticated = false;
  String testProviderText = "Hello Provider!";

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
    return  Provider<String>(
      create: (context) => testProviderText,
      child: MaterialApp(
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
      ),
    );
  }
}
```

## Consume Provided value in HomeDrawer

To consume provided value you can use...

1. `Provider.of`
2. `Consumer`

Ref:
- https://pub.dev/packages/provider#reading-a-value
- https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple#consumer

So, let's replace drawer header with `testProviderText` by using `Provider.of`

```dart
...
import 'package:provider/provider.dart';
...
DrawerHeader(
	decoration: BoxDecoration(
		color: Colors.blue,
	),
	child: Text(
		'${Provider.of<String>(context)}',
		style: TextStyle(
			color: Colors.white,
			fontSize: 24,
		),
	),
),
```

Did you notice that even though you didn't pass parameter but you could use it ?
