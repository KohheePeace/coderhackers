---
title: Step11 Provider Basic
---

Provider is very simple.

But the official docs example is too complicated.
https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple

Let's first start basic example.

Refs: https://alligator.io/flutter/state-management/

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

## Edit `lib/main.dart` to use Provider
In this example, just provide Text.

```dart hl_lines="17 33 34"
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'pages/home_page.dart';

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
	return Provider<String>(
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
		},
	  ),
	);
  }
}
```

## Consume Provided value in `lib/widgets/home_drawer.dart`

To consume provided value you can use...

1. `Provider.of`
2. `Consumer`

Ref: https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple#consumer

```dart
...
import 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';
import 'package:provider/provider.dart';

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
			  'Drawer Header: ${Provider.of<String>(context)}',
			  style: TextStyle(
				color: Colors.white,
				fontSize: 24,
			  ),
			),
			// https://pub.dev/documentation/provider/latest/provider/Consumer-class.html
			// child: Consumer<String>(
			//   builder: (context, string, child) => Text('$string'),
			// ),
		  ),
		  // https://github.com/flutter/flutter/issues/28181#issuecomment-508349651
		  
		  ...
		],
	  ),
	);
  }
}
```

Did you notice that even though you didn't pass parameter but you could use it ?
