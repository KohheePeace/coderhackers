## Step12 Provide **isAuthenticated** state
In addition to provide **testProviderText**, let's provide **isAuthenticated** state.

To provide multiple value, we need to use **MultiProvider**
https://pub.dev/packages/provider#multiprovider

`lib/main.dart`
```dart hl_lines="19 20"
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

  ...
  @override
  Widget build(BuildContext context) {
		return MultiProvider(
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
				},
			),
		);
  }
}
```

### Consume **isAuthenticated** param by using `Provider.of`
*I deleted ` ${Provider.of<String>(context)}`

`lib/widgets/home_drawer.dart`
```dart hl_lines="13"
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/my_posts_page.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';
import 'package:provider/provider.dart';

class HomeDrawer extends StatelessWidget {
  HomeDrawer({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
		final bool _isAuthenticated = Provider.of<bool>(context);

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
				if (_isAuthenticated) ...[
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
						// This is needed to call main.dart
						Navigator.pushNamed(context, '/');
						},
					),
				],
				if (!_isAuthenticated) ...[
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

### But how to change isAuthenticated value ?
`lib/main.dart`
```dart
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

**BUT** this `isAuthenticated` is not passed to Provider value.

In this step, let's solve this problem.

