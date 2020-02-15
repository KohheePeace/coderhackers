---
title: Step8 Edit Register page
---

## Goal of this step
- Make user register page like below image!
- Add form in the register page
- Add `firebase_auth` code

<img src="https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/Screen%20Shot%202020-02-11%20at%2022.56.17.png" height="480" />


## Add Form in Register Page
- https://flutter.dev/docs/cookbook#forms

What we will do in this section is just doing the same thing in the official docs.

First copy and paste the below code. 

Then, check the code line by line.

#### `lib/pages/register_page.dart`
```dart
import 'package:email_validator/email_validator.dart';
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';

class RegisterPage extends StatefulWidget {
  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  // https://flutter.dev/docs/cookbook/forms/validation#1-create-a-form-with-a-globalkey
  final GlobalKey<FormState> _registerFormKey = GlobalKey<FormState>();

  // https://flutter.dev/docs/cookbook/forms/text-field-changes#2-use-a-texteditingcontroller
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Register"),
      ),
      // https://flutter.dev/docs/cookbook/forms/validation#1-create-a-form-with-a-globalkey
      body: Form(
        key: _registerFormKey,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              TextFormField(
                // https://flutter.dev/docs/cookbook/forms/text-input#textfield
                decoration: InputDecoration(labelText: 'Name', hintText: "John Jackson"),
                // https://flutter.dev/docs/cookbook/forms/text-field-changes#connect-the-texteditingcontroller-to-a-text-field
                controller: _nameController,
                // https://flutter.dev/docs/cookbook/forms/validation#2-add-a-textformfield-with-validation-logic
                validator: (value) {
                  if (value.isEmpty) {
                    return "Please enter name.";
                  }
                  return null;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
                controller: _emailController,
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value.isEmpty) {
                    return 'Please enter email';
                  } else if (!EmailValidator.validate(value)) {
                    // Use plugin https://pub.dev/packages/email_validator
                    // If you don't want to use plugin https://stackoverflow.com/questions/16800540/validate-email-address-in-dart
                    return 'Please enter valid email';
                  }
                  return null;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Password'),
                controller: _passwordController,
                obscureText: true,
                validator: (value) {
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
                // https://flutter.dev/docs/cookbook/forms/validation#3-create-a-button-to-validate-and-submit-the-form
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

  // dispose() is lifycycle method of flutter
  // https://stackoverflow.com/questions/41479255/life-cycle-in-flutter
  @override
  void dispose() {
    // Clean up the controller when the Widget is disposed
    // https://flutter.dev/docs/cookbook/forms/text-field-changes#create-a-texteditingcontroller
    _nameController.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    _confirmPasswordController.dispose();
    super.dispose();
    // The purpose of call dispose
    // https://stackoverflow.com/questions/59558604/why-do-we-use-dispose-method-in-dart-code
  }
}
```

## Install `firebase_auth` packages
https://pub.dev/packages/firebase_auth

#### `pubspec.yaml`
```yaml {10}
...
dependencies:
  flutter:
	sdk: flutter

  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^0.1.2
  email_validator: '^1.0.0'
  firebase_auth: ^0.15.3+1
...
```

## Add firebase auth code for register user

Official Flutter firebase auth example:
- https://pub.dev/packages/firebase_auth#register-a-user
- https://github.com/FirebaseExtended/flutterfire/blob/master/packages/firebase_auth/firebase_auth/example/lib/register_page.dart


### Handling errors(async await, try catch)
https://dart.dev/codelabs/async-await#handling-errors

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
import 'package:email_validator/email_validator.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

import 'login_page.dart';

class RegisterPage extends StatefulWidget {
  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  // https://flutter.dev/docs/cookbook/forms/validation#1-create-a-form-with-a-globalkey
  final GlobalKey<FormState> _registerFormKey = GlobalKey<FormState>();

  // https://flutter.dev/docs/cookbook/forms/text-field-changes#2-use-a-texteditingcontroller
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Register"),
      ),
      // https://flutter.dev/docs/cookbook/forms/validation#1-create-a-form-with-a-globalkey
      body: Form(
        key: _registerFormKey,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              TextFormField(
                // https://flutter.dev/docs/cookbook/forms/text-input#textfield
                decoration: InputDecoration(labelText: 'Name', hintText: "John Jackson"),
                // https://flutter.dev/docs/cookbook/forms/text-field-changes#connect-the-texteditingcontroller-to-a-text-field
                controller: _nameController,
                // https://flutter.dev/docs/cookbook/forms/validation#2-add-a-textformfield-with-validation-logic
                validator: (value) {
                  if (value.isEmpty) {
                    return "Please enter name.";
                  }
                  return null;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
                controller: _emailController,
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value.isEmpty) {
                    return 'Please enter email';
                  } else if (!EmailValidator.validate(value)) {
                    // User plugin https://pub.dev/packages/email_validator
                    // If you don't want to use plugin https://stackoverflow.com/questions/16800540/validate-email-address-in-dart
                    return 'Please enter valid email';
                  }
                  return null;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Password'),
                controller: _passwordController,
                obscureText: true,
                validator: (value) {
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
                // https://flutter.dev/docs/cookbook/forms/validation#3-create-a-button-to-validate-and-submit-the-form
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

  // dispose() is lifycycle method of flutter
  // https://stackoverflow.com/questions/41479255/life-cycle-in-flutter
  @override
  void dispose() {
    // Clean up the controller when the Widget is disposed
    // https://flutter.dev/docs/cookbook/forms/text-field-changes#create-a-texteditingcontroller
    _nameController.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    _confirmPasswordController.dispose();
    super.dispose();
    // The purpose of call dispose
    // https://stackoverflow.com/questions/59558604/why-do-we-use-dispose-method-in-dart-code
  }
}
```

## Test it and Check Firebase Auth Console
And check firebase console authentication tab.

You see email are registered.
