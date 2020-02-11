---
title: Step8 Edit Register page
---

## Goal of this step
- In this step, we will make user register page!
- Write Form code from scratch
- Add `firebase_auth` code

<img src="https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/Screen%20Shot%202020-02-11%20at%2022.56.17.png" height="480" />


## Edit Register Page
- https://flutter.dev/docs/cookbook#forms
- https://flutter.dev/docs/cookbook/forms/validation
- https://flutter.dev/docs/cookbook/forms/text-field-changes



#### `lib/pages/register_page.dart`
```dart
import 'package:flutter/material.dart';
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
      body: Form(
        key: _registerFormKey,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              TextFormField(
                decoration: InputDecoration(labelText: 'Name', hintText: "John Jackson"),
                controller: _nameController,
                validator: (value) {
                  if (value.length < 3) {
                    return "Please enter a valid name.";
                  }
                  return null;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
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
                decoration: InputDecoration(labelText: 'Password'),
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
                decoration: InputDecoration(labelText: 'Confirm Password'),
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
              Container(
                // https://stackoverflow.com/questions/50186555/how-to-set-margin-for-a-button-in-flutter
                margin: const EdgeInsets.only(top: 16.0, bottom: 16.0),
                child: RaisedButton(
                  child: Text("Register"),
                  color: Theme.of(context).primaryColor,
                  textColor: Colors.white,
                  onPressed: () {
                    if (_registerFormKey.currentState.validate()) {
                      print('Validation Ok! Submit!');
                      print('email: ${_emailController.text}');
                      print('password: ${_passwordController.text}');
                    }
                  },
                ),
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
      )
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

## Install `firebase_auth` packages
https://pub.dev/packages/firebase_auth

#### `pubspec.yaml`
```yaml {9}
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

## Add firebase auth code for register user

Official Flutter firebase auth example:
- https://pub.dev/packages/firebase_auth#register-a-user
- https://github.com/FirebaseExtended/flutterfire/blob/master/packages/firebase_auth/firebase_auth/example/lib/register_page.dart

```dart
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
```



## Final code

#### `lib/pages/register_page.dart`
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
      body: Form(
        key: _registerFormKey,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              TextFormField(
                decoration: InputDecoration(labelText: 'Name', hintText: "John Jackson"),
                controller: _nameController,
                validator: (value) {
                  if (value.length < 3) {
                    return "Please enter a valid first name.";
                  }
                  return null;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
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
                decoration: InputDecoration(labelText: 'Password'),
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
                decoration: InputDecoration(labelText: 'Confirm Password'),
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
              Container(
                // https://stackoverflow.com/questions/50186555/how-to-set-margin-for-a-button-in-flutter
                margin: const EdgeInsets.only(top: 16.0, bottom: 16.0),
                child: RaisedButton(
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
      )
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

## Test it and Check Firebase Auth Console
And check firebase console authentication tab.

You see email are registered.
