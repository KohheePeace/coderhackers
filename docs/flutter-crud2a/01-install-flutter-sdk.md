---
title: Step1 Install Flutter Sdk
---

In this step, we will setup Flutter sdk by just following official document.

https://flutter.dev/docs/get-started/install

## For mac user

In `terminal`
```bash
cd ~/development # This is folder you want to store flutter sdk
unzip ~/Downloads/flutter_macos_v1.12.13+hotfix.5-stable.zip
```

Check the current directory path to use this path in the next step.
```bash
pwd
/Users/kohheepeace/flutter-sdk
```

This path is needed to update path.

### Update flutter sdk path
https://flutter.dev/docs/get-started/install/macos#update-your-path

```bash
vi $HOME/.bash_profile # or vi $HOME/.bashrc or vi $HOME/.zshrc
```

In vim file

```bash
# path is you got by pwd command
export PATH="$PATH:/Users/kohheepeace/development/flutter/bin"
```

Then

```bash
  echo $PATH
```

Then, If `which flutter` command works, you are doing right.

```bash
which flutter
/Users/kohheepeace/flutter-sdk/flutter/bin/flutter
```

### flutter doctor
If I run flutter doctor, it shows like a below.
*I don't use ios, so this is enough.
```bash
flutter doctor
[✓] Flutter (Channel stable, v1.12.13+hotfix.5, on Mac OS X 10.15.2 19C57, locale en-JP)
 
[✓] Android toolchain - develop for Android devices (Android SDK version 29.0.2)
[!] Xcode - develop for iOS and macOS (Xcode 10.0)
    ✗ Flutter requires a minimum Xcode version of 10.2.0.
      Download the latest version or update via the Mac App Store.
    ✗ CocoaPods installed but not working.
        You appear to have CocoaPods installed but it is not working.
        This can happen if the version of Ruby that CocoaPods was installed with is different from the one being used to invoke it.
        This can usually be fixed by re-installing CocoaPods. For more info, see https://github.com/flutter/flutter/issues/14293.
      To re-install CocoaPods, run:
        sudo gem install cocoapods
[✓] Android Studio (version 3.5)
[✓] VS Code (version 1.41.1)
[✓] Connected device (1 available)

! Doctor found issues in 1 category.
```

## For windows user
