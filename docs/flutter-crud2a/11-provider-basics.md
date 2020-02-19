---
title: Step11 Provider Basics
---

## Goal of this step
- Learn provider basics

Provider is very simple.

But the official docs example is too complicated.

https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple

Let's first start from basic example.

Refs: https://alligator.io/flutter/state-management/

## What is Provider?
Provider is one of the approaches to manage state.

You can see there are a lot of other approaches.
https://flutter.dev/docs/development/data-and-backend/state-mgmt/options

`setState()` is also one of the approaches.

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

```dart {5,16,32-33}
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

So, let's replace drawer header Text with `testProviderText`.
### `Provider.of`
```dart {2,9}
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

### `Consumer`
```dart
child: Consumer<String>(
  builder: (context, value, child) {
    return Text(
      "$value",
      style: TextStyle(
        color: Colors.white,
        fontSize: 24,
      ),
    );
  },
),
```

Did you notice that you didn't pass down parameter but you could use provided value ?

This is the merit of Provider!!