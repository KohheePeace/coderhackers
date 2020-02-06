## Step5 Edit `lib/main.dart`
Cleanup the code by moving `HomePage`.

You see nothing has changed.

```dart
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/home_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
	return MaterialApp(
	  title: 'Flutter Demo',
	  theme: ThemeData(
		primarySwatch: Colors.blue,
	  ),
	  home: HomePage(),
	);
  }
}
```

