---
title: Introduction to JavaScript
---

## Goal
- ⚡ Understand **what is javascript**

## What is JavaScript ?

From wikipedia...

> Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. **<mark>JavaScript enables interactive web pages</mark>** and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it.

https://en.wikipedia.org/wiki/JavaScript

Okay, so first let's check the example of **interactivity** by javascript.

## Preparation

Please make `javascript-test` folder and create `js-test1.html` inside it.

Then, make html boilerplate and add `<div id="demo">Click here</div>`.

```html title="javascript-test/js-test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- highlight-next-line -->
    <div id="demo">Click here</div>
  </body>
</html>
```

## Check the output
Nothing happened if you clicked.

![](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200524_160844.gif)

## Try First JavaScript


**<mark>You don't need to understand the meaning of this code right now!</mark>**

This is just a example to understand the meaning of **interactive**.

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
    <div id="demo">Click here</div>
    
    <!-- highlight-start -->
    <script>
      let demoElement = document.getElementById("demo");

      demoElement.onclick = function changeContent() {
        demoElement.innerHTML = "Help me";
        demoElement.style = "color: red";
      };
    </script>
    <!-- highlight-end -->
  </body>
</html>
```

Ref:
- https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics


#### Check the output
![output-copy-mdn-onclick-demo-code](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200524_121803.gif)

## Do you understand the meaning of **"interactive"** ?
**Interactive** means...

1. You (user) click
2. Then something happens

This is **interactive** right ?

In the next step, we will learn the meaning of this javascript code.
