---
title: Step13 StreamProvider
---

## Goal of this step
- Add StreamProvider

Ref:
https://fireship.io/lessons/advanced-flutter-firebase/
https://pub.dev/documentation/provider/latest/provider/StreamProvider-class.html

## Replace ChangeNotifierProvider with StreamProvider

`lib/main.dart`
```dart {4}
MultiProvider(
providers: [
	Provider<String>(create: (context) => testProviderText),
	StreamProvider<FirebaseUser>.value(value: FirebaseAuth.instance.onAuthStateChanged)
],
```

### Check the FirebaseAuth code
#### `firebase_auth-0.15.4/lib/src/firebase_auth.dart`
You see `onAuthStateChanged` returns stream.
```dart
/// Receive [FirebaseUser] each time the user signIn or signOut
Stream<FirebaseUser> get onAuthStateChanged {
	return FirebaseAuthPlatform.instance.onAuthStateChanged(app.name).map(
			(PlatformUser user) => user == null ? null : FirebaseUser._(user, app));
}
```

## Fix existing code
Instead of checking `IsAuthenticated`, check login state by checking if login user exists.
`lib/widgets/home_drawer.dart`
```dart
	// final bool _isAuthenticated = Provider.of<IsAuthenticated>(context).isAuthenticated;
	final user = Provider.of<FirebaseUser>(context);
	final bool isAuthenticated = user != null;
```

## About Stream
**stream** is comming from Reactive Programming.

I've got used to using it but I don't 100% understand it!

If you want to dive into Stream check the below links!

https://dart.dev/tutorials/language/streams

<iframe width="560" height="315" src="https://www.youtube.com/embed/nQBpOIHE4eE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

https://medium.com/flutter-community/reactive-programming-streams-bloc-6f0d2bd2d248