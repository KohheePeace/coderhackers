---
title: Step9 Login Page
---

In this step, we're going to

- make Login page.

<img src="https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/Screen%20Shot%202020-02-11%20at%2023.32.10.png" height="480" />

The code is almost same with Register page.

So, first just copy and paste code, and then I will explain the important part of the code.

## Final Code

```dart title="lib/pages/login_page.dart"
import 'package:email_validator/email_validator.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/register_page.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  <!-- highlight-start -->
  final _loginFormKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  <!-- highlight-end -->

  <!-- highlight-start -->
  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }
  <!-- highlight-end -->

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Login Page"),
      ),
      <!-- highlight-next-line -->
      body: Form(
        key: _loginFormKey,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              <!-- highlight-next-line -->
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
              <!-- highlight-next-line -->
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
                  <!-- highlight-start -->
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
                  <!-- highlight-end -->
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
This is a part of firebase sign in code. This code is based on official example.

https://github.com/FirebaseExtended/flutterfire/blob/master/packages/firebase_auth/firebase_auth/example/lib/signin_page.dart
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

---

Currently we cannot distinguish if user is login or not.

So, from the next step, let's learn how to change the content by user's login state!