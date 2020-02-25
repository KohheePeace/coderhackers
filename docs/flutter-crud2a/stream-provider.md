---
title: Step14 StreamProvider
---

## Goal of this step
- Add StreamProvider

Ref:

- https://fireship.io/lessons/advanced-flutter-firebase/
- https://pub.dev/documentation/provider/latest/provider/StreamProvider-class.html

## Replace ChangeNotifierProvider with StreamProvider

#### `lib/main.dart`
```dart {4}
MultiProvider(
providers: [
	Provider<String>(create: (context) => testProviderText),
	StreamProvider<FirebaseUser>(create: (context) => FirebaseAuth.instance.onAuthStateChanged)
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

Delete code
#### `lib/main.dart`
```dart
bool isAuthenticated = false;

// https://stackoverflow.com/questions/41479255/life-cycle-in-flutter
// https://flutterbyexample.com/stateful-widget-lifecycle/
void initState() {
	super.initState();

	// https://firebase.google.com/docs/auth/web/manage-users
	// https://stackoverflow.com/questions/45353730/firebase-login-with-flutter-using-onauthstatechanged
	FirebaseAuth.instance.onAuthStateChanged.listen((user) {
		// This is called when "sign-in" and "sign-out" is triggerd
		print('onAuthStateChanged called!!!');
		
		// If user signed-in already "user" is not null
		setState(() {
			isAuthenticated = user != null;
		});
	});
}
```

## Fix existing code
###  Check login state by checking if login user exists.
`lib/pages/home_page.dart` and `lib/widgets/home_drawer.dart`
```dart
// final bool isAuthenticated = Provider.of<GlobalState>(context).isAuthenticated;
final user = Provider.of<FirebaseUser>(context);
final bool isAuthenticated = user != null;
```

### Remove ChnageNotifier code
#### `lib/pages/loin_page.dart`, `lib/pages/register_page.dart` and `lib/widgets/home_drawer.dart`
```dart
Provider.of<GlobalState>(context, listen: false).updateIsAuthenticated(true or false);
```

## Test it!
Everything works like a charm!!


## Recap StreamProvider
```dart
StreamProvider<FirebaseUser>(create: (context) => FirebaseAuth.instance.onAuthStateChanged)
```
In this code, 

```dart
FirebaseAuth.instance.onAuthStateChanged
```
is called when user "sign-in" or "sign-out" and return `<FirebaseUser>`.

And `StremProvider` automatically provide new value.

That's why you don't need to call 

```dart
Provider.of<GlobalState>(context, listen: false).updateIsAuthenticated(true or false);
```

## If you want to dive into Stream
**Stream** is comming from Reactive Programming.

I've got used to using it but I don't 100% understand it!

If you want to dive into Stream check the below links!

- https://dart.dev/tutorials/language/streams

- Youtube video
<iframe width="560" height="315" src="https://www.youtube.com/embed/nQBpOIHE4eE?start=69" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- https://medium.com/flutter-community/reactive-programming-streams-bloc-6f0d2bd2d248