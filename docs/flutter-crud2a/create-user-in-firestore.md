---
title: Step16 Create User in Firestore
---

## Goal of this step
- Create user data in firestore.

## Why?
Why do we need to create firestore user? Is firebase authentication user not enough?

1. Firebase auth stores information only **about authentication**.
2. We want to store data like **name**, **updatedAt** etc...
3. We **want to store relationship** with **User** and **Post** in firestore in a later step.

## Install Firestore package
https://pub.dev/packages/cloud_firestore

***NOTE!**
Please use this or above version. => Important new feature `collectionGroup` added.
```yaml
cloud_firestore: ^0.13.0+1
```

## Make firestore database
Visit: https://console.firebase.google.com

And make firestore database in **"test mode"**.

![ss](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/create-firestore-database.png)

## Add Firestore code
```dart {11-20} title="lib/pages/register_page.dart"
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

## Check the meaning of code
Let's first check the official example code.
https://pub.dev/packages/cloud_firestore#usage

This is a code to make a new book.
```dart
Firestore.instance.collection('books').document()
  .setData({ 'title': 'title', 'author': 'author' });
```

If you don't set `document()` id blank, firestore automatically create **documentID** for you.

But, in our example, I set the **user documentID** equal to the **Firebase Auth user id**.

By doing this, It will be easy to fetch information related to the current logged-in user.

```dart {3}
Firestore.instance
	.collection("users")
	.document(user.uid)
	.setData({
		"name": _nameController.text,
		"email": _emailController.text,
		"createdAt": FieldValue.serverTimestamp(), // https://stackoverflow.com/questions/50907151/flutter-firestore-server-side-timestamp
		"updatedAt": FieldValue.serverTimestamp()
	});
```

## Test it.
Please register new test user from Flutter App.

Then, Check it in console: https://console.firebase.google.com

## Memo of Error in this step
#### `debug console`
```bash
Error Happened!!!: MissingPluginException(No implementation found for method DocumentReference#setData on channel plugins.flutter.io/cloud_firestore)
```
=> `flutter clean`
https://github.com/flutter/flutter/issues/13971

d8 error:
https://github.com/flutter/flutter/issues/20747