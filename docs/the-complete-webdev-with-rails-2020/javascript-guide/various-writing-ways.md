---
title: Various writing ways of JavaScript
---

## Goal
- 🦁 Learn different writing styles of javascript
  
## Overview

In this step, we'll be learning the different writing styles of javascript **which is doing the same things**.

This is similar with what we did in CSS step.


## Preparation
Make `test2.html` in `js-test` folder.

```html title="test2.html"
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

### Refs: Event type
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


## 4. Separate js file
This is important to understand Bootstrap js.

Make `script4.js`
```js title="script4.js"
let demoElement = document.getElementById("demo");

demoElement.addEventListener("click", function () {
  demoElement.innerHTML = "Help me";
  demoElement.style = "color: red";
});
```

Import `script4.js` in `test4.html`

```html title="test4.html"
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
    <script src="script4.js"></script>
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
    <script src="script4.js"></script>
  </head>
  <body>
    <div id="demo">Click here</div>
  </body>
</html>
```

:::note
**But**, if you import script tag in `<head>`, **it doesn't work**.

This is because HTML file is read from top to bottom by browser.

Because this js file is before **`<div id="demo">Click here</div>`**

This js file cannot access DOM.
```js
  let demoElement = document.getElementById("demo");
```

:::

## Summery
:::info
**It is enough** to know **there are various writing styles doing the same thing** in javascript. 👍
:::