---
title: Step12 MultiProvider
---

## Goal of this step
- Learn MultiProvider

In this step, in addition to provide **testProviderText**, let's provide **isAuthenticated** state.

To provide multiple value, we need to use: **MultiProvider**
https://pub.dev/packages/provider#multiprovider

#### `lib/main.dart`
```dart {2-6}
Widget build(BuildContext context) {
	return  MultiProvider(
		providers: [
			Provider<String>(create: (context) => testProviderText),
			Provider<bool>(create: (context) => isAuthenticated)
		],
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
```

## Consume **isAuthenticated** param by using `Provider.of`
### Edit HomePage
#### `lib/pages/home_page.dart`
```dart {3,16,22,24}
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/widgets/home_drawer.dart';
import 'package:provider/provider.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key, this.isAuthenticated}) : super(key: key);
  final bool isAuthenticated;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    final bool isAuthenticated = Provider.of<bool>(context);

    return Scaffold(
      appBar: AppBar(
        title: Text("Home Page"),
      ),
      drawer: HomeDrawer(),
      body: Center(
        child: isAuthenticated ? Text('Home Page after login') : Text('Home Page before login')
      ),
    );
  }
}
```

And delete these code
```dart
HomePage({Key key, this.isAuthenticated}) : super(key: key);
final bool isAuthenticated;
```

Delete passed props in `main.dart`.
#### `main.dart`
```dart {3}
routes: {
	// When navigating to the "/" route, build the FirstScreen widget.
	'/': (context) => HomePage(),
	'/sign_up': (context) => RegisterPage(),
},
```

### Edit HomeDrawer
#### `lib/widgets/home_drawer.dart`
```dart {6}
...

class HomeDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
		final bool isAuthenticated = Provider.of<bool>(context);
		...
```

Delete passed props in `lib/pages/home_page.dart`.
#### `lib/pages/home_page.dart`
```dart
...
drawer: HomeDrawer(),
```

## Test it
- Check it works correctly by "sign-in", "sign-out".

## Provided value doesn't update...😟
This is because `Provider` widget's value doesn't update.
![dart-devtools](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/flutter-provider-state-dart-dev-tool.png)

In the next step, let's solve this problem.