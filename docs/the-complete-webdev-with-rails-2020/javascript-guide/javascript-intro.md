---
title: Introduction to JavaScript
---

## Overview
In this step, we're going to
- ⚡ Understand **what is javascript**


## What is JavaScript

From wikipedia...

> Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. **<mark>JavaScript enables interactive web pages</mark>** and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it.

https://en.wikipedia.org/wiki/JavaScript

## Let's check about the meaning of "interactive"

Please make `javascript-test` folder and create `js-test1.html` inside it.

Then, make html boilerplate.

```html title="javascript-test/js-test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## Try First JavaScript


**<mark>You don't need to understand the meaning of this code right now!</mark>**

This is just a example to understand the meaning of **"interactive"**.

Please copy and paste the code.

```html title="js-test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- highlight-start -->
    <div id="demo">Click here</div>
    <script>
      document.getElementById("demo").onclick = function changeContent() {
        document.getElementById("demo").innerHTML = "Help me";
        document.getElementById("demo").style = "color: red";
      };
    </script>
    <!-- highlight-end -->
  </body>
</html>
```

Ref: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick


#### Check the output
![output-copy-mdn-onclick-demo-code](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/javascript-guide/output-copy-mdn-onclick-demo-code.gif)

## Do you understand the meaning of **"interactive"** ?
**Interactive** means...

1. You (user) click
2. Then something happens

This is **interactive** right ?

In the next step, we will learn the meaning of this javascript code and write more javascript.
