---
title: Play with jQuery
---

In this chapter, we are going to
  - Replace javascript with jQuery

## Overview

We learned in last chapter that jQuery is easy writing alternative of javascript.

So, let's replace existing code with jQuery.

##  Replace `onclick`, `innerHTML`, `style`

The most important things is always googling.

![jquery-replace-onclick-search](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/jquery-guide/jquery-replace-onclick-search.gif)

- Replace `onclick`: https://api.jquery.com/click/

- Replace `innerHTML`: https://api.jquery.com/html/

- Replace `style`: https://api.jquery.com/css/

`test4.html`
```js
// Get Target element
let demoElement = document.getElementById('demo');

// Add onclick function to the #demoElement.
// you can skip function name 'changeContent'
demoElement.onclick = function () {
  demoElement.innerHTML = "Help me";
  demoElement.style = "Color: red";
}
```
becomes

```js
$("#demo").click(function() {
  $("#demo").html("Help me");
  $("#demo").css({ color: "red" });
});
```

Check it works as before...

## Replace `alert`
```js
  let alertElement = document.getElementById('alert');

  alertElement.addEventListener("click", function () {
  window.alert('Alert!!!!!!!!!!');
});
```

becomes

```js
$("#alert").click(function() {
  window.alert('Alert!!!!!!!!!!');
})
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

## Summery
Now, it is enough

:::note
- 今の現状として、jQueryを自分で書けるかわからないけど、やっていることがわかれば大丈夫です。
:::