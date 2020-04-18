---
title: Style TextFormField
---

In this step, we're going to
- Style `TextFormField`

## Style `TextFormField`
https://flutter.dev/docs/cookbook/forms/text-input#textformfield

```dart title="lib/pages/register_page.dart"
TextFormField(
  <!-- highlight-next-line -->
  decoration: InputDecoration(labelText: 'Name', hintText: "John Jackson"),
  validator: (value) {
    if (value.isEmpty) {
      return "Please enter name.";
    }
    return null;
  },
),
TextFormField(
  <!-- highlight-start -->
  decoration: InputDecoration(labelText: 'Email', hintText: "johnjackson@example.com"),
  keyboardType: TextInputType.emailAddress,
  <!-- highlight-end -->
  validator: (value) {
    if (value.isEmpty) {
      return 'Please enter email';
    }
    return null;
  },
),
TextFormField(
  <!-- highlight-start -->
  decoration: InputDecoration(labelText: 'Password'),
  obscureText: true,
  <!-- highlight-end -->
  validator: (value) {
    if (value.isEmpty) {
      return 'Please enter password';
    }
    return null;
  },
),
TextFormField(
  <!-- highlight-start -->
  decoration: InputDecoration(labelText: 'Confirm Password'),
  obscureText: true,
  <!-- highlight-end -->
  validator: (value) {
    // This is not correct validation. Later we will improve this validation.
    if (value.isEmpty) {
      return 'Confirm Password is not matching';
    }
    return null;
  },
),
```

## Reference of widgets
You can check more property of `TextFormField` and `InputDecoration` in these links.
- [TextFormField](https://api.flutter.dev/flutter/material/TextFormField-class.html)
- [InputDecoration](https://api.flutter.dev/flutter/material/InputDecoration-class.html)