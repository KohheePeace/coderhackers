---
title: Step8 Edit Register page
---

## Goal of this step
- Make user register page like below image!
- Add form in the register page
- Add `firebase_auth` code

<img src="https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/Screen%20Shot%202020-02-11%20at%2022.56.17.png" height="480" />  
  

What we will do in this section is just doing the same thing in the official docs.
https://flutter.dev/docs/cookbook#forms

## Build a form with validation
https://flutter.dev/docs/cookbook/forms/validation

### 1. Create a Form with a GlobalKey
As described in official docs, we will add `GlobalKey` and `Form`.

#### `pages/register_page.dart`
```dart {8,16-26}
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

### 2. Add a TextFormField with validation logic

#### `pages/register_page.dart`
```dart {22-54}
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
```dart {11-24}
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

### 5. Add link to Login Page
```dart {1,16-25}
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

### 6. Improve email validation
Install https://pub.dev/packages/email_validator
#### `pubspec.yaml`
```yaml {9}
...
dependencies:
  flutter:
	sdk: flutter

  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^0.1.2
  email_validator: '^1.0.0'
...
```

```dart
import 'package:email_validator/email_validator.dart';
...
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
```

## Create and style a text field
In this section, we will decorate `TextFormField`

https://flutter.dev/docs/cookbook/forms/text-input#textformfield

#### `lib/pages/register_page.dart`
```dart {2,11,12,25,26,35,36}
TextFormField(
  decoration: InputDecoration(labelText: 'Name', hintText: "John Jackson"),
  validator: (value) {
    if (value.isEmpty) {
      return "Please enter name.";
    }
    return null;
  },
),
TextFormField(
  decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
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
  obscureText: true,
  validator: (value) {
    // This is not correct validation. Later we will improve this validation.
    if (value.isEmpty) {
      return 'Confirm Password is not matching';
    }
    return null;
  },
),
```

Reference of widgets
- [TextFormField](https://api.flutter.dev/flutter/material/TextFormField-class.html)
- [InputDecoration](https://api.flutter.dev/flutter/material/InputDecoration-class.html)

## Retrieve the value of a text field
In this section, we will learn how to retrieve the value of `TextFormField`.
Later, we will send this value to backend when submiting form.
https://flutter.dev/docs/cookbook/forms/retrieve-input

### 1. Create a TextEditingController
As described in docs, we will create controller and dispose.
https://flutter.dev/docs/cookbook/forms/retrieve-input#1-create-a-texteditingcontroller

```dart
final _nameController = TextEditingController();
final _emailController = TextEditingController();
final _passwordController = TextEditingController();
final _confirmPasswordController = TextEditingController();

...
// dispose() is lifecycle method of flutter
// https://stackoverflow.com/questions/41479255/life-cycle-in-flutter
@override
void dispose() {
  // Clean up the controller when the Widget is disposed
  _nameController.dispose();
  _emailController.dispose();
  _passwordController.dispose();
  _confirmPasswordController.dispose();
  super.dispose();
  // The purpose of calling dispose => Prevent memory leaks
  // https://stackoverflow.com/questions/59558604/why-do-we-use-dispose-method-in-dart-code
}
```

### 2. Supply the TextEditingController to a TextField
As described in docs, we will connect controller to a TextField
https://flutter.dev/docs/cookbook/forms/retrieve-input#2-supply-the-texteditingcontroller-to-a-textfield

```dart {3,13,28,39}
TextFormField(
  decoration: InputDecoration(labelText: 'Name', hintText: "John Jackson"),
  controller: _nameController,
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
    // This is not correct validation. Later we will improve this validation.
    if (value.isEmpty) {
      return 'Confirm Password is not matching';
    }
    return null;
  },
),
```


### 3. Display the current value of the text field
```dart
onPressed: () {
  if (_registerFormKey.currentState.validate()) {
    print('Validation Ok! Submit!');
    print('name: ${_nameController.text}');
    print('email: ${_emailController.text}');
    print('password: ${_passwordController.text}');
    print('confirmPassword: ${_confirmPasswordController.text}');
  }
},
```
Later, we will sent these values to firebase.

### 4. Fix confirm password validation
```dart {5-11}
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
```

---

## Add Firebase auth
In this section, we will...
- install firebase_auth packages for flutter
- Add code to register user in firebase auth
- Check firebase auth console

### Install `firebase_auth` packages
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

### Add firebase auth code for register user

```dart {1,3-14}
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

This code is based on official Flutter firebase auth example:
- https://pub.dev/packages/firebase_auth#register-a-user
- https://github.com/FirebaseExtended/flutterfire/blob/master/packages/firebase_auth/firebase_auth/example/lib/register_page.dart


And the link about Handling errors(**async await, try catch**)

https://dart.dev/codelabs/async-await#handling-errors

### Test it and Check Firebase Auth Console
Visit https://console.firebase.google.com/

Error when debugging mode (MissingPluginException(No implementation found for method createUserWithEmailAndPassword on channel plugins.flutter.io/firebase_auth))
https://github.com/flutter/flutter/issues/14137#issuecomment-429150844

And check firebase console authentication tab.

You see email are registered.


## Final code

#### `lib/pages/register_page.dart`
```dart
import 'package:email_validator/email_validator.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

import 'package:flutter_firebase_firestore_crud2a/pages/login_page.dart';

class RegisterPage extends StatefulWidget {
  @override
  _RegisterPageState createState() => _RegisterPageState();
}
class _RegisterPageState extends State<RegisterPage> {
  final _registerFormKey = GlobalKey<FormState>();

  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

  // dispose() is lifecycle method of flutter
  // https://stackoverflow.com/questions/41479255/life-cycle-in-flutter
  @override
  void dispose() {
    // Clean up the controller when the Widget is disposed
    _nameController.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    _confirmPasswordController.dispose();
    super.dispose();
    // The purpose of calling dispose => Prevent memory leaks
    // https://stackoverflow.com/questions/59558604/why-do-we-use-dispose-method-in-dart-code
  }

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
                controller: _nameController,
                decoration: InputDecoration(labelText: 'Name', hintText: "John Jackson"),
                validator: (value) {
                  if (value.isEmpty) {
                    return "Please enter name.";
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _emailController,
                decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
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
                controller: _passwordController,
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
                validator: (value) {
                  if (value.isEmpty) {
                    return 'Please enter password';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: _confirmPasswordController,
                decoration: InputDecoration(labelText: 'Confirm Password'),
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
              ),
            ]
          ),
        ),
      ),
    );
  }
}
```

## Fix RenderFlex Error
![error-pic](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/RenderFlex-error.png)

### Error log
#### `terminal`
```bash

════════ Exception caught by rendering library ═════════════════════════════════
The following assertion was thrown during layout:
A RenderFlex overflowed by 91 pixels on the bottom.

The relevant error-causing widget was
    Column 
lib\pages\register_page.dart:43
The overflowing RenderFlex has an orientation of Axis.vertical.
The edge of the RenderFlex that is overflowing has been marked in the rendering with a yellow and black striped pattern. This is usually caused by the contents being too big for the RenderFlex.

Consider applying a flex factor (e.g. using an Expanded widget) to force the children of the RenderFlex to fit within the available space instead of being sized to their natural size.
This is considered an error condition because it indicates that there is content that cannot be seen. If the content is legitimately bigger than the available space, consider clipping it with a ClipRect widget before putting it in the flex, or using a scrollable container rather than a Flex, like a ListView.
```

### How to fix
https://stackoverflow.com/questions/49480051/flutter-dart-exceptions-caused-by-rendering-a-renderflex-overflowed

#### `register_page.dart`
```dart
body: SingleChildScrollView(
  child: Form(
    ...
```

![gif](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/08-05-fix-renderflex-error.gif)