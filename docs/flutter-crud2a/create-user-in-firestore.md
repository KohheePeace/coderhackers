---
title: Step16 Create User in Firestore
---

## Why?
Why do we need to create firestore user? Is firebase authentication user not enough?

1. Firebase auth stores information **about authentication**.
2. We want to store data like **name**, **createdAt** etc...
3. We **want to store relationship** with **User** and **Post** in firestore later.

## Install Firestore package
https://pub.dev/packages/cloud_firestore

Please use this or above version. => Important new feature `collectionGroup` added.
```yaml
cloud_firestore: ^0.13.0+1
```

## Store user when they successfully registered.
#### `lib/pages/register_page.dart`
```dart {11-20}
onPressed: () async {
	if (_registerFormKey.currentState.validate()) {
		try {
			// Register user by firebase auth
			final FirebaseUser user = (await FirebaseAuth.instance
				.createUserWithEmailAndPassword(
					email: _emailController.text,
					password: _passwordController.text
				)).user;
			
			/* store users data in firestore database */
			await Firestore.instance
				.collection("users")
				.document(user.uid)
				.setData({
					"name": _nameController.text,
					"email": _emailController.text,
					"createdAt": FieldValue.serverTimestamp(), // https://stackoverflow.com/questions/50907151/flutter-firestore-server-side-timestamp
					"updatedAt": FieldValue.serverTimestamp()
				});

			Navigator.pushNamed(context, '/');
		} catch (e) {
			print('Error Happened!!!: $e');
		}  
	}
},
```

## Make firestore database
Make firestore database in **"test mode"**.
![ss](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/create-firestore-database.png)

## Test it.
Please register new test user.
Check it in console: https://console.firebase.google.com/

## Error in this step
#### `debug console`
```bash
Error Happened!!!: MissingPluginException(No implementation found for method DocumentReference#setData on channel plugins.flutter.io/cloud_firestore)
```
=> `flutter clean`
https://github.com/flutter/flutter/issues/13971

d8 error:
https://github.com/flutter/flutter/issues/20747