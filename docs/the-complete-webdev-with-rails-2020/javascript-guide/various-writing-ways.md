---
title: Various writing ways of JavaScript
---

## Goal
- ⚡ Learn different writing styles of javascript
  
## Overview

In this step, we'll be learning the different writing styles of javascript **which is doing the same things**.

**This is similar with what we did in CSS section.**


## Preparation
Make `js-test2.html` in `javascript-test` folder.

```html title="js-test2.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="demo">Click here</div>

    <script>
      let demoElement = document.getElementById("demo");

      demoElement.onclick = function changeContent() {
        demoElement.innerHTML = "Help me";
        demoElement.style = "color: red";
      };
    </script>
  </body>
</html>
```



## 1. `element.onclick = function(){do something};`

This is what we did in the last step.

```html
<script>
  let demoElement = document.getElementById("demo");

  demoElement.onclick = function changeContent() {
    demoElement.innerHTML = "Help me";
    demoElement.style = "color: red";
  };
</script>
```

## 2. `<element onclick="...">`
1. add `onclick`
```html
<div
  id="demo"
  onclick="demoElement.innerHTML = 'Help me'; demoElement.style = 'color: red';"
>
  Click here
</div>
```

Check it also works.

## 3. `element.addEventListener("click", do something);`
```html
<script>
  let demoElement = document.getElementById("demo");

  demoElement.addEventListener("click", function () {
    demoElement.innerHTML = "Help me";
    demoElement.style = "color: red";
  });
</script>
```


## 4. Separate js file
This is important to understand Bootstrap js.

Make `js-test2.js`
```js title="js-test2.js"
let demoElement = document.getElementById("demo");

demoElement.addEventListener("click", function () {
  demoElement.innerHTML = "Help me";
  demoElement.style = "color: red";
});
```

Import `js-test2.js` in `js-test2.html`

```html title="js-test2.html"
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
    <script src="js-test2.js"></script>
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
    <script src="js-test2.js"></script>
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

That's why js file cannot find `<div id="demo">`

```js
  let demoElement = document.getElementById("demo");
```

:::

## Summery
:::info
**It is enough** to know **there are various writing styles doing the same thing** in javascript. 👍
:::