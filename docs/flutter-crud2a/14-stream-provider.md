## Step14 StreamProvider
Ref:
https://fireship.io/lessons/advanced-flutter-firebase/
https://pub.dev/documentation/provider/latest/provider/StreamProvider-class.html

`lib/main.dart`
```dart
MultiProvider(
providers: [
	Provider<String>(create: (context) => testProviderText),
	StreamProvider<FirebaseUser>.value(value: FirebaseAuth.instance.onAuthStateChanged)
],
```

`lib/widgets/home_drawer.dart`
```dart
	// final bool _isAuthenticated = Provider.of<IsAuthenticated>(context).isAuthenticated;
	final user = Provider.of<FirebaseUser>(context);
	final bool _isAuthenticated = user != null;
```

You don't need these codes...


Remove from `lib/pages/login_page.dart` and `lib/pages/register_page.dart`
```dart
Provider.of<IsAuthenticated>(context, listen: false).updateIsAuthenticated(true);
```

Remove from `lib/widgets/home_drawer.dart` 
```dart
Provider.of<IsAuthenticated>(context, listen: false).updateIsAuthenticated(false);
```

