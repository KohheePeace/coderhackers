---
title: 3 writing ways of CSS
---

## Overview

In this chapter, we are going to
  - Learn 3 writing ways of CSS

### 1. Style tag

This is just we did in the previous step.

```html
<style>
  h1 { color: white; background: navy; }
  ul { background: #FFFF33; }
</style>
```

### 2. Inline style

```html title="test1.html"
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Title of the document</title>
  </head>

  <body>
    <!-- highlight-next-line -->
    <h1 style="color: white; background: navy;">Here is a title.</h1>
    <h2>Here is a subtitle.</h2>

    <!-- highlight-next-line -->
    <ul style="background: #ffff33;">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </body>
</html>
```

### 3. External CSS file

**<mark>This is important to understand Bootstrap</mark>**

Make new file `test1.css`

```css title="test1.css"
  h1 { color: white; background: navy; }
  ul { background: #FFFF33; }
```

Edit `test1.html`

```html title="test1.html"
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Title of the document</title>
  <!-- highlight-next-line -->
  <link rel="stylesheet" href="test1.css">
</head>

<body>
  <h1>Here is a title.</h1>
  <h2>Here is a subtitle.</h2>

  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
</body>

</html>
```

Current folder structure looks like this

![css-3-writing-styles-folder](../../img/2020-04-27-22-36-21.png)


:::important
You see that **<mark>all 1, 2, 3 output is same.</mark>**
:::

In the next chapter, we will learn how to use **class** and **id** as an **css target**.


## Refs
You can check the pros and cons of each styling way. **But currently it is just enough to know there is 3 ways of writing CSS.**
- https://www.w3schools.com/css/css_howto.asp
- https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css
- https://www.inmotionhosting.com/support/email/outlook/using-css/linking-your-css-to-your-website