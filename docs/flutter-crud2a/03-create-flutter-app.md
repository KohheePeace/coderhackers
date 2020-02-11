---
title: Step3 Create and run flutter App
---

## Goal of this step

In this step, we're going to **create and run** first flutter app.

Ref: https://flutter.dev/docs/get-started/test-drive?tab=terminal

## Create and run first flutter app

`terminal`
```bash
flutter create flutter_firebase_firestore_crud2a
cd flutter_firebase_firestore_crud2a
flutter run
```
![flutter-create](https://flutter.dev/assets/get-started/ios/starter-app-5e284e57b8dce587ea1dfdac7da616e6ec9dc263a409a9a8f99cf836340f47b8.png)

## Problem of run flutter from terminal
You need to press.

1. "r" => for hot reloading
2. "R" => for hot restart

This is troublesome.

## Start Debug mode of VS code
If you want to reload when you save code you need to start debugging.
![start-flutter-debug.gif](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/start-flutter-debug.gif)

Or press `cmd + shift + F5`.

Ref: https://github.com/flutter/flutter/issues/24870

## Test debug
Change the string
```
'You have pushed the button this many times'
```
to

```
'You have clicked the button this many times'
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NDk0MzAxNDldfQ==
-->