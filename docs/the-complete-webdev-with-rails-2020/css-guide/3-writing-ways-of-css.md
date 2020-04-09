---
title: 3 writing ways of CSS
---

In this chapter, we are going to
  - Learn 3 writing ways of CSS

### 1. Style tag

We already saw this writing style.

```html
<style>
  h1 { color: white; background: navy; }
  ul { background: #FFFF33; }
</style>
```

### 2. Inline style

```html {9,12} title="test.html"
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Title of the document</title>
</head>

<body>
  <h1 style="color: white; background: navy;">Here is a title.</h1>
  <h2>Here is a subtitle.</h2>

  <ul style="background: #FFFF33;">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
</body>

</html>
```

### 3. External CSS file

**<mark>This is important to understand Bootstrap</mark>**

Make new file `test.css`

```css title="test.css"
  h1 { color: white; background: navy; }
  ul { background: #FFFF33; }
```

Edit `test.html`

```html title="test.html"
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Title of the document</title>
  <!-- highlight-next-line -->
  <link rel="stylesheet" href="test.css">
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
![External Css Folder Structure](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/css-guide/external-css-folder.png)

:::important
**  You see that all 1, 2, 3 output is same.**
:::

In the next chapter, we will learn how to use **class** and **id** as an **css target**.


## Refs
You can check the pros and cons of each styling way. **But currently it is enough to know there is 3 ways of writing CSS.**
- https://www.w3schools.com/css/css_howto.asp
- https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css
- https://www.inmotionhosting.com/support/email/outlook/using-css/linking-your-css-to-your-website