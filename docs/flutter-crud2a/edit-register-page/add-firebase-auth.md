---
title: Add Firebase auth
---

In this section, we will...
- Install `firebase_auth` package for flutter
- Add code to register user with firebase auth
- Register user and check firebase auth console

### Install `firebase_auth` package
https://pub.dev/packages/firebase_auth

```yaml title="pubspec.yaml"
...
dependencies:
  flutter:
	sdk: flutter

  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^0.1.2
  email_validator: '^1.0.0'
  # highlight-next-line
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


And this is the link about Handling errors (**async await, try catch**)

https://dart.dev/codelabs/async-await#handling-errors

### Test register and Check Firebase Auth Console
So, let's fill in a register form.

Then, visit https://console.firebase.google.com/

And check firebase console authentication tab.

You see email are registered.

## Error memo
Error when debugging mode:

```
(MissingPluginException(No implementation found for method createUserWithEmailAndPassword on channel plugins.flutter.io/firebase_auth))
```

https://github.com/flutter/flutter/issues/14137#issuecomment-429150844