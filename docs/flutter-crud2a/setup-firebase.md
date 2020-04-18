---
title: Step7 Setup Firebase
---

In this step, we are going to 
- setup firebase.

## Setup firebase
Let's follow this official guide:

https://codelabs.developers.google.com/codelabs/flutter-firebase/#5

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



## Security tip
:::tip
**Should I add the google-services.json (from Firebase) to my repository?**
https://stackoverflow.com/questions/37358340/should-i-add-the-google-services-json-from-firebase-to-my-repository
:::

According to this stackoverflow question, I think it is good to ignore  `google-services.json` in `.gitignore`

So, in project root `.gitignore` file,

```git title=".gitignore"
...
google-services.json
```