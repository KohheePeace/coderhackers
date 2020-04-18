---
title: Build a form with validation
---

In this step, we're going to
- Build a form with validation

### 1. Add Form widget with a GlobalKey
As described in official docs, we will create `Form` and add `GlobalKey` to the form.

https://flutter.dev/docs/cookbook/forms/validation

```dart {8,16-26} title="pages/register_page.dart"
import 'package:flutter/material.dart';

class RegisterPage extends StatefulWidget {
  @override
  _RegisterPageState createState() => _RegisterPageState();
}
class _RegisterPageState extends State<RegisterPage> {
  final _registerFormKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Register Page"),
      ),
      body: Form(
        key: _registerFormKey,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              // Add TextFormFields and RaisedButton here.
            ]
          ),
        ),
      ),
    );
  }
}
```

`GlobalKey`: This uniquely identifies the Form, and allows validation of the form in a later step.

### 2. Add a TextFormField with validation logic
As described in official docs, we're going to add `TextFormField` with validation logic
https://flutter.dev/docs/cookbook/forms/validation#2-add-a-textformfield-with-validation-logic

```dart {22-54} title="pages/register_page.dart"
import 'package:flutter/material.dart';

class RegisterPage extends StatefulWidget {
  @override
  _RegisterPageState createState() => _RegisterPageState();
}
class _RegisterPageState extends State<RegisterPage> {
  final _registerFormKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Register Page"),
      ),
      body: Form(
        key: _registerFormKey,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: <Widget>[
              TextFormField(
                validator: (value) {
                  if (value.isEmpty) {
                    return "Please enter name.";
                  }
                  return null;
                },
              ),
              TextFormField(
                validator: (value) {
                  if (value.isEmpty) {
                    return 'Please enter email';
                  }
                  return null;
                },
              ),
              TextFormField(
                validator: (value) {
                  if (value.isEmpty) {
                    return 'Please enter password';
                  }
                  return null;
                },
              ),
              TextFormField(
                validator: (value) {
                  // This is not correct validation. Later we will improve this validation.
                  if (value.isEmpty) {
                    return 'Confirm Password is not matching';
                  }
                  return null;
                },
              ),
            ]
          ),
        ),
      ),
    );
  }
}
```

### 3. Create a button to validate and submit the form
https://flutter.dev/docs/cookbook/forms/validation#3-create-a-button-to-validate-and-submit-the-form

```dart {11-24} title="pages/register_page.dart"
...
TextFormField(
  validator: (value) {
    // This is not correct validation. Later we will improve this validation.
    if (value.isEmpty) {
      return 'Confirm Password is not matching';
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
      }
    },
  ),
),
```

### 4. Test behavior
Test validation behavior here.

### 5. Add link to the Login Page
Finally, let's add link to the login page.

```dart {1,16-25} title="pages/register_page.dart"
import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';
...
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
```