---
title: Step7 Setup Firebase
---

## Goal of this step
- Setup Firebase


## Setup firebase
Please follow this official guide:

https://codelabs.developers.google.com/codelabs/flutter-firebase/#5
or
https://firebase.google.com/docs/flutter/setup?platform=android#create-firebase-project

--- 

### Summery of setup guide

1. Open `app/build.gradle` and copy package name
2. Download `google-services.json` and move to `android/app/google-services.json`
3. Open `android/build.gradle` and add `classpath 'com.google.gms:google-services:4.3.2'`
4. Open `android/app/build.gradle` and add `apply plugin: 'com.google.gms.google-services'` and `implementation 'com.google.firebase:firebase-analytics:17.2.0'`
5. Uninstall app from emulator and restart

## Enable Authentication Sign-in method
 
Don't forget to enable **"Email/Password"** method.
![enable-firebase-email-auth.png](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/enable-firebase-email-auth.png)

