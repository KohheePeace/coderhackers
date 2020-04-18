---
title: Improve validation
---

In this step, we're going to
- Improve email validation by using package
- Fix confirm password validation

## Improve email validation
First, let's improve email validation by using library.

### Install https://pub.dev/packages/email_validator
```yaml {9} title="pubspec.yaml"
...
dependencies:
  flutter:
	sdk: flutter

  # The following adds the Cupertino Icons font to your application.
  # Use with the CupertinoIcons class for iOS style icons.
  cupertino_icons: ^0.1.2
  email_validator: '^1.0.0'
...
```

### Edit email field validator
 
```dart
import 'package:email_validator/email_validator.dart';
...
TextFormField(
  controller: _emailController,
  decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
  keyboardType: TextInputType.emailAddress,
  validator: (value) {
    if (value.isEmpty) {
      return 'Please enter email';
    <!-- highlight-start -->
    } else if (!EmailValidator.validate(value)) {
      // Use plugin https://pub.dev/packages/email_validator
      // If you don't want to use plugin https://stackoverflow.com/questions/16800540/validate-email-address-in-dart
      return 'Please enter valid email';
    }
    return null;
  },
  <!-- highlight-end -->
),
```


## Fix confirm password validation
So, next let's fix confirm password field's validation.
```dart {5-11}
TextFormField(
  decoration: InputDecoration(labelText: 'Confirm Password'),
  controller: _confirmPasswordController,
  obscureText: true,
  validator: (value) {
    // https://stackoverflow.com/questions/50155348/how-to-validate-a-form-field-based-on-the-value-of-the-other
    if (value != _passwordController.text) {
      return 'Password is not matching';
    }
    return null;
  },
),
```
---
