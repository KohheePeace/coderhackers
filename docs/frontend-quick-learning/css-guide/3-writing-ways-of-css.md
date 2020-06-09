---
title: 3 writing ways of CSS
---

## Goal
  - ⚡ Learn 3 writing ways of CSS

## 1. Style tag

This is just we did in the previous step.

```html
<style>
  h1 { color: white; background: navy; }
  ul { background: #ffff00; }
</style>
```

## 2. Inline style

```html title="css-test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <!-- highlight-next-line -->
    <h1 style="color: white; background: navy;">Here is a title.</h1>
    <h2>Here is a subtitle.</h2>

    <!-- highlight-next-line -->
    <ul style="background: #ffff00;">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </body>
</html>
```

## 3. External CSS file

Make new file `css-test1.css` in `css-test` folder

```css title="css-test1.css"
  h1 { color: white; background: navy; }
  ul { background: #ffff00; }
```

Edit `css-test1.html`

```html title="css-test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  
    <!-- highlight-next-line -->
    <link rel="stylesheet" href="css-test1.css">
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

![css-3-writing-styles-folder](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-14-12-47-40.png)

:::important
You see that **<mark>all 1, 2, 3 output is same.</mark>**
:::

In the next step, we will learn how to use **`class`** and **`id`** as an **css selector**.


## Refs
You can check the pros and cons of each styling way in the below links.
:::caution
**But currently it is just enough to know there is 3 ways of writing CSS.**
:::

- https://www.w3schools.com/css/css_howto.asp
- https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css
- https://www.inmotionhosting.com/support/email/outlook/using-css/linking-your-css-to-your-website