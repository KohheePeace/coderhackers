---
title: Refactor Code
---

## Oveview

In this step, we are going to
  - 🐯 Learn where to write javascript
  - 🐅 Refactor code to make it easier to understand


## Where to write javascript code ?
> **In HTML**, JavaScript code is inserted between `<script>` and `</script>` tags.

https://www.w3schools.com/js/js_whereto.asp

```html title="In html file"
<script>
  // javascript code here...
</script>
```


## Where to place `<script>` tag in HTML?

> You can place any number of `scripts` in an HTML document.
> 
> Scripts can be placed in the **`<body>`, or in the `<head>` section of an HTML page, or in both**.

https://www.w3schools.com/js/js_whereto.asp

```html title="inside <body>"
<body>
  <script>
    // javascript code here...
  </script>
</body>
```

or

```html title="inside <head>"
<head>
  <script>
    // javascript code here...
  </script>
</head>
```


## Refactor code
We are going to refactor last chapter code **to make it easy to understand what we are doing**.

This is current code.

```html
<script>
  document.getElementById('demo').onclick = function changeContent() {
    document.getElementById('demo').innerHTML = "Help me";
    document.getElementById('demo').style = "Color: red";
  }
</script>
```

We will do the same thing described in the below link. 


![refactor-onclick-method](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-13-16-42-20.png)
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics


So `test4.html` becomes
```html title="test4.html"
<script>
  let demoElement = document.getElementById('demo');       --- (1)

  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "Color: red";
  }
</script>
```


## What's next ?
From the next step, let's dive into the meaning of each lines of code.
