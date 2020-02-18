---
title: Step12 MultiProvider **isAuthenticated** state
---

## Goal of this step
- Learn MultiProvider

In addition to provide **testProviderText**, let's provide **isAuthenticated** state.

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

#### `lib/widgets/home_drawer.dart`
```dart {6}
...

class HomeDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
		final bool isAuthenticated = Provider.of<bool>(context);
		...
```

Delete passed props
#### `lib/pages/home_page.dart`
```dart
...
drawer: HomeDrawer(),
```

## But how to change isAuthenticated value ?
#### `lib/main.dart`
```dart {5}
void initState() {
	super.initState();
	// https://stackoverflow.com/questions/45353730/firebase-login-with-flutter-using-onauthstatechanged
	FirebaseAuth.instance.onAuthStateChanged.listen((user) {
		print('Hey Yo!!! onAuthStateChanged called!!!');
		setState(() {
			isAuthenticated = user != null;
		});
	});
}
```

This code called when user login status changed and changes the `isAuthenticated` state in `MyApp` widget.

**BUT** this changed `isAuthenticated` is not passed to Provider value.

In the next step, let's solve this problem.

