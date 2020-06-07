---
title: Various writing ways of JavaScript
---

## ゴール
- ⚡ Learn different writing styles of javascript
  
## Overview

In this step, we'll be learning the different writing styles of javascript **which is doing the same things**.

**This is similar with what we did in [CSS section](../css-guide/3-writing-ways-of-css.md).**

Ref: https://www.w3schools.com/jsref/event_onclick.asp

## 1. `element.onclick = function(){do something};`

This is what we did in the last step.

```html title="js-test1.html"
<script>
  let demoElement = document.getElementById("demo");

  demoElement.onclick = function changeContent() {
    demoElement.innerHTML = "Help me";
    demoElement.style = "color: red";
  };
</script>
```

## 2. `<element onclick="do something">`
```html title="js-test1.html
<div
  id="demo"
  <!-- highlight-next-line -->
  onclick="demoElement.innerHTML = 'Help me'; demoElement.style = 'color: red';"
>
  Click here
</div>
```

Check it also works.

## 3. `element.addEventListener`

```js title="syntax"
element.addEventListener("click", function () { 
  //do something 
});
```

```html title="js-test1.html"
<script>
  let demoElement = document.getElementById("demo");

  // highlight-start
  demoElement.addEventListener("click", function () {
    demoElement.innerHTML = "Help me";
    demoElement.style = "color: red";
  });
  // highlight-end
</script>
```


## 4. Separate js file
You can separate js code to another file, then import that file.

Make `js-test1.js`
```js title="js-test1.js"
let demoElement = document.getElementById("demo");

demoElement.addEventListener("click", function () {
  demoElement.innerHTML = "Help me";
  demoElement.style = "color: red";
});
```

Import `js-test1.js` in `js-test1.html`

```html title="js-test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="demo">Click here</div>

    <!-- highlight-next-line -->
    <script src="js-test1.js"></script>
  </body>
</html>
```

You see it also works.

### Import in `head` tag
You can import script file inside `<head>` tag.
https://www.w3schools.com/js/js_whereto.asp


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- highlight-next-line -->
    <script src="js-test1.js"></script>
  </head>
  <body>
    <div id="demo">Click here</div>
  </body>
</html>
```

:::caution
**But**, if you import script tag in `<head>`, **it doesn't work**.

This is because 

- HTML file is read from top to bottom by browser.
- When js file is read

```html
<div id="demo">Click here</div>
```

is not loaded yet.

That's why the below code cannot find DOM element.

```js
  let demoElement = document.getElementById("demo");
```

So, it doesn't work correctly.

:::

## Summery
:::info
**It is enough** to know **there are various writing styles which is doing the same thing** in javascript. 👍
:::