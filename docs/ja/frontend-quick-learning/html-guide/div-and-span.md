---
title: <div> and <span>
---

## Goal 
- ⚡ Learn `<div>` and `<span>` tag


## Preparation

Make `div-and-span.html` inside `html-test` folder.

```html title="div-and-span.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>How's your day?</p>

    Hypertext Markup Language (HTML) is the standard markup language for
    documents designed to be displayed in a web browser. It can be assisted by
    technologies such as Cascading Style Sheets (CSS) and scripting languages
    such as JavaScript.
  </body>
</html>
```

## What is `<div>` ?

> The `<div>` tag is an empty <mark>container that is used to define a division or a section</mark>. It does not affect the content or layout and <mark>is used to group HTML elements to be styled with CSS</mark> or manipulated with scripts.

https://www.w3docs.com/learn-html/html-div-tag.html

## What is `<span>` ?
> The `<span>` tag is a generic inline <mark>container that groups elements primarily for styling purposes.</mark> The `<span>` tag, as well as `<div>` tag are empty containers. <mark>The `<div>` tag groups block level elements, whereas the `<span>` groups inline elements.</mark> The content hooked in the `<span>` element, can be styled with CSS, or manipulated with JavaScript.

https://www.w3docs.com/learn-html/html-span-tag.html


## Try `<div>` and `<span>`

```html title="div-and-span.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- highlight-start -->
    <div style="background-color: red;">
      <h1>Hello World!</h1>
      <p>How's your day?</p>
    </div>
    <!-- highlight-end -->

    <!-- highlight-next-line -->
    <span style="font-weight: bold;">Hypertext Markup Language (HTML)</span> is
    the standard markup language for documents designed to be displayed in a web
    browser. It can be assisted by technologies such as Cascading Style Sheets
    (CSS) and scripting languages such as JavaScript.
  </body>
</html>
```
https://en.wikipedia.org/wiki/HTML

:::info
- `<div>` is used to wrap block. (`<h1>`, `<p>`)
- `<span>` is used to wrap text
- Both are used for adding style to that area.
:::