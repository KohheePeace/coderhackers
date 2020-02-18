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
#### firebase_auth-0.15.4/lib/src/firebase_auth.dart
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

## Remove unnecessary code

You don't need to call these method each time you want to change provider's value! nice!

Remove from `lib/pages/login_page.dart` and `lib/pages/register_page.dart`
```dart
Provider.of<IsAuthenticated>(context, listen: false).updateIsAuthenticated(true);
```

Remove from `lib/widgets/home_drawer.dart` 
```dart
Provider.of<IsAuthenticated>(context, listen: false).updateIsAuthenticated(false);
```

