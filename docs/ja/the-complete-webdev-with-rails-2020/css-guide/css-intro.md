---
title: Introduction to CSS
---

## ゴール

- ⚡ Learn what is CSS
- 🔥 Try CSS
- 🌻 Learn CSS syntax

## What is CSS ?

From wikipedia...
> Cascading Style Sheets (CSS) is <mark>a style sheet language</mark> used for describing the presentation of a document written in a markup language like HTML.

https://en.wikipedia.org/wiki/Cascading_Style_Sheets

**<mark>CSS is a language for styling</mark>**

That's it and let's try CSS.

## Let's try CSS!

### Preparation

:::info
  Make `css-test` folder and then create `css-test1.html`
:::

Let's start from this code.
```html title="css/css-test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
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

### Add CSS

```html title="css/css-test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    
    <!-- highlight-start -->
    <style>
      h1 {
        color: white;
        background-color: navy;
      }
      ul {
        background-color: #ffff00;
      }
    </style>
    <!-- highlight-end -->
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

### Check the output
![css-intro](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/2020-04-27-22-31-34.png)

You see  that <mark>**CSS is a language for styling**</mark>.

## Check the CSS syntax
Okay, so let's check CSS syntax.

![css-syntax](https://www.tutorialrepublic.com/lib/images/css-selector.png)

Ref: https://www.tutorialrepublic.com/css-tutorial/css-syntax.php

```css
  h1 { color: white; background-color: navy; }
  selector { css-property: property-value; css-property: property-value; ... }
```

## Refs
https://www.w3schools.com/whatis/whatis_css.asp