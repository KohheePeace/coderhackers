## Step13 ChangeNotifierProvider

Ref:

1. https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple#changenotifier
2. https://alligator.io/flutter/state-management/#change-notifier

Make new file `models/is_authenticated.dart`
```dart
import 'package:flutter/foundation.dart';

class IsAuthenticated extends ChangeNotifier {
  bool isAuthenticated = false;

  void updateIsAuthenticated(bool value) {
    isAuthenticated = value;
    notifyListeners();
  }
}
```

### Replace existing provider code
Replace 
```dart
Provider.of<bool>(context);
```

with

```dart
Provider.of<IsAuthenticated>(context).isAuthenticated
```

### Add function to notify Provider's change

In `lib/pages/login_page.dart` and `lib/pages/register_page.dart`
```dart
await FirebaseAuth.instance. signin or create

Provider.of<IsAuthenticated>(context, listen: false).updateIsAuthenticated(true);
```

In `lib/widgets/home_drawer.dart` 
```dart
await FirebaseAuth.instance.signOut();

Provider.of<IsAuthenticated>(context, listen: false).updateIsAuthenticated(false);
```


In `lib/main.dart`
```dart hl_lines="3"
providers: [
	Provider<String>(create: (context) => testProviderText),
	ChangeNotifierProvider<IsAuthenticated>(create: (context) => IsAuthenticated())
],
```


### This is troublesome. There is nice way! => StreamProvider
This approach is okay but code become messy :(

**BUT!** There is a nice way! Let's try in the next step.

