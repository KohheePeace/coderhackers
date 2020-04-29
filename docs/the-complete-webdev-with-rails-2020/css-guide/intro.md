---
title: Introduction to CSS
---

## Overview

In this chapter, we are going to...

- Understand what is CSS
- Try CSS
- Learn CSS syntax

## What is CSS ?

From wikipedia...
> Cascading Style Sheets (CSS) is <mark>a style sheet language</mark> used for describing the presentation of a document written in a markup language like HTML.

https://en.wikipedia.org/wiki/Cascading_Style_Sheets

**<mark>CSS is a language for styling</mark>**

That's it and let's try CSS.

## Let's try CSS!

### Start from this file

```html title="test1.html"
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Title of the document</title>
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

```html {7-10} title="test1.html"
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Title of the document</title>

  <style>
    h1 { color: white; background: navy; }
    ul { background: #FFFF33; }
  </style>
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
  target { css-property: property-value; css-property: property-value; ... }
```

:::note
1. `target-element` can be HTML tag (`h1`, `ul`, `li`...) or `Class` or `ID`. We will check it in the chapter after the next.
2. You don't need to memorize all `css-property` **now**. You will get used to it at the end of this course.
:::

## Refs
https://www.w3schools.com/whatis/whatis_css.asp