---
title: Introduction to CSS
---

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

We will copy the below example to add CSS.

![css-intro-copy-style-tag](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/css-guide/css-intro-copy-style-tag.png)

https://www.w3schools.com/tags/tag_style.asp

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
![First style tag](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/css-guide/first-style-tag.png)

You see  that <mark>**CSS is a language for styling**</mark>.

## Check the CSS syntax

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