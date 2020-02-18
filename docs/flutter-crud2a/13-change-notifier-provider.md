---
title: Step13 ChangeNotifierProvider
---

## Goal of this step
- Learn ChangeNotifierProvider

In this step, let's solve last step problem.
We want to change the Provider's `isAuthenticated` value.

Ref:

1. https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple#changenotifier
2. https://alligator.io/flutter/state-management/#change-notifier

Make new file `services/global_state.dart`
```dart
import 'package:flutter/foundation.dart';

class GlobalState extends ChangeNotifier {
  bool isAuthenticated = false;

  void updateIsAuthenticated(bool value) {
    isAuthenticated = value;
    notifyListeners();
  }
}
```

## Replace existing provider code

#### `lib/main.dart`
```dart {3}
providers: [
	Provider<String>(create: (context) => testProviderText),
	ChangeNotifierProvider<GlobalState>(create: (context) => GlobalState())
],
```

Replace 
```dart
Provider.of<bool>(context);
```

with

```dart
Provider.of<GlobalState>(context).isAuthenticated
```

So the code looks
```dart
providers: [
  Provider<String>(create: (context) => testProviderText),
  Provider<bool>(create: (context) => isAuthenticated)
],
```

## Add function to notify Provider's change

In `lib/pages/login_page.dart` and `lib/pages/register_page.dart`
```dart
await FirebaseAuth.instance. signin or create

Provider.of<GlobalState>(context, listen: false).updateIsAuthenticated(true);
```

In `lib/widgets/home_drawer.dart` 
```dart
await FirebaseAuth.instance.signOut();

Provider.of<GlobalState>(context, listen: false).updateIsAuthenticated(false);
```


## This is troublesome. There is nicer way! => StreamProvider
This approach is okay but code become messy :(

**BUT!** There is a nicer way! Let's try in the next step.

