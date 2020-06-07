---
title: Where to write javascript
---

## ゴール
  - ⚡ Learn where to write javascript code

## Overview
Before diving into javascript code, let's check

**"where to write javascript code"** in HTML file.

## Where to write javascript code ?
> **In HTML**, JavaScript code is inserted between `<script>` and `</script>` tags.

https://www.w3schools.com/js/js_whereto.asp

```html title="In html file"
<script>
  // javascript code here...
</script>
```

:::caution note
- `<script>` tag is HTML code.
- The code inside `<script>` tag is javascript code.
:::

## Where to place `<script>` tag in HTML?

> You can place any number of `scripts` in an HTML document.
> 
> Scripts can be placed in the **`<body>`, or in the `<head>` section of an HTML page, or in both**.

https://www.w3schools.com/js/js_whereto.asp

```html title="inside <body> tag in html file"
<body>
  ...
  <script>
    // javascript code here...
  </script>
</body>
```

or

```html title="inside <head> tag in html file"
<head>
  ...
  <script>
    // javascript code here...
  </script>
</head>
```

or both.

```html
<html>
  <head>
    ...
    <script>
      // javascript code here...
    </script>
  </head>

  ...
  
  <body>
    ...
    <script>
      // javascript code here...
    </script>
  </body>
</html>
```