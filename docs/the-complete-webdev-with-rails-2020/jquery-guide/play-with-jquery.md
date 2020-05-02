---
title: Play with jQuery
---

## Goal
  - ⚡ Get used to jQuery

## Overview

In last step, We learned that jQuery is easy writing alternative of javascript.

So, let's replace existing code with jQuery.

##  Replace `onclick`, `innerHTML`, `style`

The most important things is **always googling**.

![jquery-replace-onclick-search](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/jquery-guide/jquery-replace-onclick-search.gif)

- Replace `onclick`: https://api.jquery.com/click/

- Replace `innerHTML`: https://api.jquery.com/html/

- Replace `style`: https://api.jquery.com/css/

```js title="Javascript"
let demoElement = document.getElementById('demo');

demoElement.onclick = function () {
  demoElement.innerHTML = "Help me";
  demoElement.style = "color: red";
}
```
becomes

```js title="jQuery"
$("#demo").click(function() {
  $("#demo").html("Help me");
  $("#demo").css({ color: "red" });
});
```

Check it works as before...

## Repalce `onmouseover`
Googling **"jQuery onmouseover equivalent"**

https://api.jquery.com/mouseover/

```js
// example of onmouseover
document.getElementById('hover-me').onmouseover = function () {
  console.log('Hover!!!!!!!!!!');     
}
```

becomes

```js
$("#hover-me").mouseover(function() {
  console.log('Hover!!!!!!!!!!');
})
```

Check it works as before...