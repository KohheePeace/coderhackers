---
title: Play with jQuery
---

## ゴール
  - ⚡ Get used to jQuery

## Overview

In the last step, We learned that jQuery is easy writing alternative of javascript.

So, let's replace the javascript code which we learned with jQuery.

## Preparation
- Make `jquery-test` folder 
- Make `jquery-test1.html` inside it


We will start from this code.

So, copy and paste this code
```html title="jquery-test1.html"
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

      demoElement.onmouseover = function () {
        console.log("Hello~!");
      };
    </script>
  </body>
</html>
```

## Import jquery
To use jQuery, we need to import jQuery.
https://jquery.com/

![import-jquery](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_235226.gif)


```html title="jquery-test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="demo">Click here</div>

    <!-- highlight-start -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <!-- highlight-end -->
    <script>
      let demoElement = document.getElementById("demo");

      demoElement.onclick = function changeContent() {
        demoElement.innerHTML = "Help me";
        demoElement.style = "color: red";
      };

      demoElement.onmouseover = function () {
        console.log("Hello~!");
      };
    </script>
  </body>
</html>
```

## jQuery syntax
First, let's check jQuery syntax.
```js
$(selector).eventname(function(){
  // Do something 
})
```

For example

```js
  // <p> tag
  $("p").click(function() {
    // Do something
  })

  // <div class="test">
  $(".test").mouseover(function() {
    // Do something
  })

  // <div id="demo">
  $("#demo").click(function() {
    // Do something
  })
```

Ref: https://www.w3schools.com/jquery/jquery_syntax.asp

##  Replace `onclick`, `innerHTML`, `style`

The most important things is **always googling**.

- Googling: "jquery click" => https://api.jquery.com/click/

- Googling: "jquery innerHtml" => [How to replace innerHTML of a div using jQuery?](https://stackoverflow.com/questions/1309452/how-to-replace-innerhtml-of-a-div-using-jquery)

- Googling: "jquery inline style" => [edit existing inline style using jquery?](https://stackoverflow.com/questions/8359224/edit-existing-inline-style-using-jquery)

So, this code becomes
```js title="Javascript"
let demoElement = document.getElementById("demo");

demoElement.onclick = function () {
  demoElement.innerHTML = "Help me";
  demoElement.style = "color: red";
}
```
becomes

```js title="jQuery"
// highlight-start
$("#demo").click(function() {
  $("#demo").html("Help me");
  $("#demo").css({ color: "red" });
});
// highlight-end
```

Check it works as before...

## Repalce `onmouseover`
Googling **"jQuery onmouseover equivalent"** => https://api.jquery.com/mouseover/

So,
```js title="pure javascript"
demoElement.onmouseover = function () {
  console.log("Hello~!");
};
```

becomes

```js title="jQuery"
$("#demo").mouseover(function() {
  console.log('Hello~!');
})
```

Check it works as before...