---
title: Introduction to CSS
---

## Goal

- ⚡ Understand what is CSS
- 🔥 Try CSS
- 🌻 Learn CSS syntax

## What is CSS ?

From wikipedia...
> Cascading Style Sheets (CSS) is <mark>a style sheet language</mark> used for describing the presentation of a document written in a markup language like HTML.

https://en.wikipedia.org/wiki/Cascading_Style_Sheets

**<mark>CSS is a language for styling</mark>**

That's it and let's try CSS.

## Let's try CSS!

### Start from this file

:::info
  Make `css-test` folder and then create `test1.html`
:::

Let's start from this code.
```html title="css/test1.html"
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

### Add style

```html title="css/test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <!-- highlight-start -->
  <style>
    h1 { color: white; background: navy; }
    ul { background: #FFFF33; }
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
![css-intro](../../img/2020-04-27-22-31-34.png)

You see  that <mark>**CSS is a language for styling**</mark>.

## Check the CSS syntax

![css-syntax](https://www.tutorialrepublic.com/lib/images/css-selector.png)

Ref: https://www.tutorialrepublic.com/css-tutorial/css-syntax.php

```css
  h1 { color: white; background: navy; }
  selector { css-property: property-value; css-property: property-value; ... }
```

:::info
1. **`selector`** can be HTML tag (`h1`, `ul`, `li`...) or `Class` or `ID`. We will check it in the chapter after the next.
2. You don't need to memorize all `css-property` **now**. You will get used to it at the end of this course.
:::

## Refs
https://www.w3schools.com/whatis/whatis_css.asp