---
title: Step16 Create User in Firestore
---

## Why do we need to create firestore user? Is firebase authentication user not enough?

1. Firebase auth stores information **only about authentication**.
2. We **want to store relationship** with **User** and **Post** in firestore.

## Install Firestore package
https://pub.dev/packages/cloud_firestore
Please use this or above version.
```yaml
cloud_firestore: ^0.13.0+1
```

## Store user when they successfully registered.
`lib/pages/register_page.dart`
```dart hl_lines="11 12 13 14 15 16 17 18 19 20"
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

## Test Register new account and check it.
please register new test user here...

