---
title: Step14 StreamProvider
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

## Ovserver Pattern
I understand the concept of Stream. If you come flutter from Angular.js with rxjs...
https://en.wikipedia.org/wiki/Observer_pattern
https://angular.io/guide/observables
https://www.didierboelens.com/2018/08/reactive-programming---streams---bloc/