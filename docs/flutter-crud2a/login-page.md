---
title: Step9 Login Page
---

## Goal of this step
- We will make Login Page.

<img src="https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/Screen%20Shot%202020-02-11%20at%2023.32.10.png" height="480" />

The code is almost same with Register Page. So, first just copy and paste code, then explain important part of code.

## Final Code

#### `lib/pages/login_page.dart`
```dart
import 'package:email_validator/email_validator.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
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
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Login Page"),
      ),
      body: Form(
        key: _loginFormKey,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              TextFormField(
                decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
                controller: _emailController,
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value.isEmpty) {
                    return 'Please enter email';
                  } else if (!EmailValidator.validate(value)) {
                    return 'Please enter valid email';
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
              Container(
                margin: EdgeInsets.only(top: 10.0, bottom: 10.0),
                child: RaisedButton(
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
    );
  }
}
```

## Check Firebase Auth SignIn Code
This is a part of firebase sing in code. This code is based on official example.
```dart
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
```

Official example https://github.com/FirebaseExtended/flutterfire/blob/master/packages/firebase_auth/firebase_auth/example/lib/signin_page.dart


