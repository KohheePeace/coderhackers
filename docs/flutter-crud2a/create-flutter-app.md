---
title: Step3 Create and Run flutter App
---

## Goal of this step

- In this step, we're going to **create and run** first flutter app.

## Create and run first flutter app

```bash title="terminal"
flutter create flutter_firebase_firestore_crud2a
cd flutter_firebase_firestore_crud2a
flutter run
```
:::note
Don't forget to start android emulator before running fluter app.
:::

![flutter-create](https://flutter.dev/assets/get-started/ios/starter-app-5e284e57b8dce587ea1dfdac7da616e6ec9dc263a409a9a8f99cf836340f47b8.png)

## Try flutter hot reload

Go to `lib/main.dart`.

Please find the below code
```dart
 Text(
  'You have pushed the button this many times:',
),
```

and change the text string.



To reflect the changes to emulator, You need to press `"r"` every time... 😫

```
r Hot reload. 🔥🔥🔥
```

This is **troublesome**. So, Let's fix this.

## Start flutter App with Debug mode of VS code
If you want to **reload when you save code**, you need to **start debugging**.
![start-flutter-debug.gif](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/start-flutter-debug.gif)


Ref: https://github.com/flutter/flutter/issues/24870

## Refs
https://flutter.dev/docs/get-started/test-drive?tab=terminal
