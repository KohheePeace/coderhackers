---
title: Step6 Edit `pages/home_page.dart`
---

## Add Drawer widget
We can choose **widgets** from
https://flutter.dev/docs/development/ui/widgets/material

This is something **like Bootstrap components**.

We will use **Drawer** widget
https://api.flutter.dev/flutter/material/Drawer-class.html

## Routing
There are two way for navigate

1. Navigate directly by using `MaterialPageRoute`
(https://flutter.dev/docs/cookbook/navigation/navigation-basics)
2. Define named routes and Navigate to these routes
(https://flutter.dev/docs/cookbook/navigation/named-routes)

### Document the pros and cons of using push vs pushNamed
https://github.com/flutter/flutter/issues/3867

## Final code

`lib/main.dart`
```dart
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

`pages/home_page.dart`
```dart
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

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
	  ),
	),
	  body: Center(
		child: Text('This is home page')
	  ),
	);
  }
}
```

