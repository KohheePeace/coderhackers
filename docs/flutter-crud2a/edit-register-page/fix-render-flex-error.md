---
title: Fix RenderFlex Error
---

In this step, we're going to
- Fix render flex error

![error-pic](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/RenderFlex-error.png)

## Check Error log
```bash title="terminal"

════════ Exception caught by rendering library ═════════════════════════════════
The following assertion was thrown during layout:
# highlight-next-line
A RenderFlex overflowed by 91 pixels on the bottom.

The relevant error-causing widget was
    Column 
lib\pages\register_page.dart:43
The overflowing RenderFlex has an orientation of Axis.vertical.
The edge of the RenderFlex that is overflowing has been marked in the rendering with a yellow and black striped pattern. This is usually caused by the contents being too big for the RenderFlex.

Consider applying a flex factor (e.g. using an Expanded widget) to force the children of the RenderFlex to fit within the available space instead of being sized to their natural size.
# highlight-next-line
This is considered an error condition because it indicates that there is content that cannot be seen. If the content is legitimately bigger than the available space, consider clipping it with a ClipRect widget before putting it in the flex, or using a scrollable container rather than a Flex, like a ListView.
```

## How to fix
According to this stackoverflow question

https://stackoverflow.com/questions/49480051/flutter-dart-exceptions-caused-by-rendering-a-renderflex-overflowed


You can fix this error by wrapping form widget with `SingleChildScrollView`

```dart title="register_page.dart"
body: SingleChildScrollView(
  child: Form(
    ...
```

![gif](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/08-05-fix-renderflex-error.gif)