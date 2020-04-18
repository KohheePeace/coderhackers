---
title: Retrieve value from a text field
---

In this step, we're going to
- Learn how to retrieve value from `TextFormField`.
- Later, we will send this value to backend when submitting form.
  

https://flutter.dev/docs/cookbook/forms/retrieve-input

### 1. Create a TextEditingController
As described in official docs, we will create controller and call dispose.
https://flutter.dev/docs/cookbook/forms/retrieve-input#1-create-a-texteditingcontroller

```dart {1-4,7-16}
final _nameController = TextEditingController();
final _emailController = TextEditingController();
final _passwordController = TextEditingController();
final _confirmPasswordController = TextEditingController();

...
@override
void dispose() {
  _nameController.dispose();
  _emailController.dispose();
  _passwordController.dispose();
  _confirmPasswordController.dispose();
  super.dispose();
}
```

#### `dispose()` is lifecycle method of flutter
https://stackoverflow.com/questions/41479255/life-cycle-in-flutter

#### The purpose of calling dispose => Prevent memory leaks
https://stackoverflow.com/questions/59558604/why-do-we-use-dispose-method-in-dart-code



### 2. Supply the TextEditingController to a TextField
As described in official docs, we will connect controller to a TextField
https://flutter.dev/docs/cookbook/forms/retrieve-input#2-supply-the-texteditingcontroller-to-a-textfield

```dart {3,13,28,39}
TextFormField(
  decoration: InputDecoration(labelText: 'Name', hintText: "John Jackson"),
  controller: _nameController,
  validator: (value) {
    if (value.isEmpty) {
      return "Please enter name.";
    }
    return null;
  },
),
TextFormField(
  decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
  controller: _emailController,
  keyboardType: TextInputType.emailAddress,
  validator: (value) {
    if (value.isEmpty) {
      return 'Please enter email';
    } else if (!EmailValidator.validate(value)) {
      // Use plugin https://pub.dev/packages/email_validator
      // If you don't want to use plugin https://stackoverflow.com/questions/16800540/validate-email-address-in-dart
      return 'Please enter valid email';
    }
    return null;
  },
),
TextFormField(
  decoration: InputDecoration(labelText: 'Password'),
  controller: _passwordController,
  obscureText: true,
  validator: (value) {
    if (value.isEmpty) {
      return 'Please enter password';
    }
    return null;
  },
),
TextFormField(
  decoration: InputDecoration(labelText: 'Confirm Password'),
  controller: _confirmPasswordController,
  obscureText: true,
  validator: (value) {
    // This is not correct validation. Later we will improve this validation.
    if (value.isEmpty) {
      return 'Confirm Password is not matching';
    }
    return null;
  },
),
```


### 3. Display the current value of the text field
Let's check if it works correctly by printing inside `onPressed`.
```dart
onPressed: () {
  if (_registerFormKey.currentState.validate()) {
    print('Validation Ok! Submit!');
    print('name: ${_nameController.text}');
    print('email: ${_emailController.text}');
    print('password: ${_passwordController.text}');
    print('confirmPassword: ${_confirmPasswordController.text}');
  }
},
```
Later, we will sent these values to firebase.

