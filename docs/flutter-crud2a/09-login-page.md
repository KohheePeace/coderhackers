## Step9 Login Page
Official example https://github.com/FirebaseExtended/flutterfire/blob/master/packages/firebase_auth/firebase_auth/example/lib/signin_page.dart

The code is almost same with register page.

`lib/pages/login_page.dart`
```dart
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/home_page.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';

class LoginPage extends StatefulWidget {

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final GlobalKey<FormState> _loginFormKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  initState() {
	super.initState();
  }

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("Login Page"),
	  ),
	  body: Container(
		  padding: const EdgeInsets.all(20.0),
		  child: SingleChildScrollView(
			child: Form(
			key: _loginFormKey,
			child: Column(
			  children: <Widget>[
				TextFormField(
				  decoration: InputDecoration(
					  labelText: 'Email*', hintText: "johnjackson@example.com"),
				  controller: _emailController,
				  keyboardType: TextInputType.emailAddress,
				  validator: (String value) {
					if (value.isEmpty) {
					  return 'Please enter email';
					}
					return null;
				  },
				),
				TextFormField(
				  decoration: InputDecoration(
					  labelText: 'Password*', hintText: "********"),
				  controller: _passwordController,
				  obscureText: true,
				  validator: (String value) {
					if (value.isEmpty) {
					  return 'Please enter password';
					}
					return null;
				  },
				),
				RaisedButton(
				  child: Text("Login"),
				  color: Theme.of(context).primaryColor,
				  textColor: Colors.white,
				  onPressed: () async {
					if (_loginFormKey.currentState.validate()) {
					  try {                        
						final FirebaseUser user = (await FirebaseAuth.instance.signInWithEmailAndPassword(
						  email: _emailController.text,
						  password: _passwordController.text,
						)).user;

						Navigator.pushNamed(context, '/');
					  } catch (e) {
						print('Error Happened!!!: $e');
					  }  
					}
				  },
				),
				Text("You don't have an account?"),
				FlatButton(
				  child: Text("Register here!"),
				  onPressed: () {
					Navigator.push(
					  context,
					  MaterialPageRoute(builder: (context) => RegisterPage()),
					);
				  },
				)
			  ],
			),
		  ),
		),
	  ),
	);
  }

  @override
  void dispose() {
	// Clean up the controller when the Widget is disposed
	// https://flutter.dev/docs/cookbook/forms/text-field-changes#create-a-texteditingcontroller
	_emailController.dispose();
	_passwordController.dispose();
	super.dispose();
  }
}
```

The important part is...

```dart
await FirebaseAuth.instance.signInWithEmailAndPassword(
  email: _emailController.text,
  password: _passwordController.text,
);
```
https://pub.dev/documentation/firebase_auth/latest/firebase_auth/FirebaseAuth-class.html

