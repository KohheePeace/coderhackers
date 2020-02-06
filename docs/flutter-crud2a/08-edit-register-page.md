## Step8 Edit Register page
In this step, we will make this app able to register with **firebase auth**.

### Install `firebase_auth` packages
https://pub.dev/packages/firebase_auth

`pubspec.yaml`
```yaml hl_lines="9"
...
dependencies:
  flutter:
	sdk: flutter

  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^0.1.2
  firebase_auth: ^0.15.3+1
...
```

### Official example code
https://github.com/FirebaseExtended/flutterfire/blob/master/packages/firebase_auth/firebase_auth/example/lib/register_page.dart

### About Form
- https://flutter.dev/docs/cookbook#forms
- https://flutter.dev/docs/cookbook/forms/validation
- https://flutter.dev/docs/cookbook/forms/text-field-changes


### Final code
`lib/pages/register_page.dart`
```dart
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';

class RegisterPage extends StatefulWidget {

  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final GlobalKey<FormState> _registerFormKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

  @override
  initState() {
	super.initState();
  }

  @override
  Widget build(BuildContext context) {
	return Scaffold(
		appBar: AppBar(
		  title: Text("Register"),
		),
		body: Container(
		  padding: const EdgeInsets.all(20.0),
		  child: SingleChildScrollView(
			child: Form(
			key: _registerFormKey,
			child: Column(
			  children: <Widget>[
				TextFormField(
				  decoration: InputDecoration(
					  labelText: 'Name*', hintText: "John Jackson"),
				  controller: _nameController,
				  validator: (value) {
					if (value.length < 3) {
					  return "Please enter a valid first name.";
					}
					return null;
				  },
				),
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
				TextFormField(
				  decoration: InputDecoration(
					  labelText: 'Confirm Password*', hintText: "********"),
				  controller: _confirmPasswordController,
				  obscureText: true,
				  validator: (value) {
					// https://stackoverflow.com/questions/50155348/how-to-validate-a-form-field-based-on-the-value-of-the-other
					if (value != _passwordController.text) {
					  return 'Password is not matching';
					}
					return null;
				  },
				),
				RaisedButton(
				  child: Text("Register"),
				  color: Theme.of(context).primaryColor,
				  textColor: Colors.white,
				  onPressed: () async {
					if (_registerFormKey.currentState.validate()) {
					  try {
						// Register user by firebase auth
						final FirebaseUser user = (await FirebaseAuth.instance
						  .createUserWithEmailAndPassword(
							email: _emailController.text,
							password: _passwordController.text
						  )).user;
						
						Navigator.pushNamed(context, '/');
					  } catch (e) {
						print('Error Happened!!!: $e');
					  }  
					}
				  },
				),
				Text("Already have an account?"),
				FlatButton(
				  child: Text("Login here!"),
				  onPressed: () {
					Navigator.push(
					  context,
					  MaterialPageRoute(builder: (context) => LoginPage()),
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
	_nameController.dispose();
	_emailController.dispose();
	_passwordController.dispose();
	_confirmPasswordController.dispose();
	super.dispose();
  }
}
```

### Test it
![test-register.png](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/test-register.png)

And check firebase console authentication tab.

You see email are registered.

