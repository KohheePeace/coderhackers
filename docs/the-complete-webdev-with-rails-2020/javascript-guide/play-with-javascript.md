---
title: Play with JavaScript
---

In this chapter, we are going to
  - Understand last chapter's js code.
  - Try different javascript code to get used to it.


## Where to write javascript code
> **In HTML**, JavaScript code is inserted between `<script>` and `</script>` tags.

https://www.w3schools.com/js/js_whereto.asp

We will add `<script></script>` tag inside `<body>` tag.
```html
<body>
  ...
  <script>
    // javascript code here...
  </script>
</body>
```
:::note
Actually you can write javascript code in various places. I will introduce about this in the next chapter.
:::


## Understand last chapter's code.

Okay so, let's understand the last chapter's code
```html
<script>
  document.getElementById('demo').onclick = function changeContent() {
    document.getElementById('demo').innerHTML = "Help me";
    document.getElementById('demo').style = "Color: red";
  }
</script>
```




### Understand the flow
We are going to refactor last chapter code **to make it easy to understand what we are doing**.

We will do the same thing described the below link. 


![refactor-onclick-method](../../img/2020-04-13-16-42-20.png)
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics


So `test4.html`
```html title="test4.html"
<script>
  // Comment out before code.
  // document.getElementById('demo').onclick = function changeContent() {
  //   document.getElementById('demo').innerHTML = "Help me";
  //   document.getElementById('demo').style = "Color: red";
  // }
  
  // highlight-start
  // Get target element 'demo' and assign it to `demoElement` variable 
  let demoElement = document.getElementById('demo');

  // Add function to the demoElement's `onclick` event.
  // you can skip function name 'changeContent'
  demoElement.onclick = function () {
    // Do something towards target Element
    demoElement.innerHTML = "Help me";
    demoElement.style = "Color: red";
  }
  // highlight-end
</script>
```

:::important
At first, please understand **the flow!**

1. From **`document`**, get target **`element`** by id and assign it to demoElement variable declared by **`let`**.
2. Attach function to demoElement's onclick **`event`**
3. function() contents is to do something towards demoElement

---

This is a gif of the effect of function content.
```js
demoElement.innerHTML = "Help me";
demoElement.style = "Color: red";
```

![effect-of-function-contents](../../img/2020-04-13-18-40-20-js-onclick-effect.gif)
:::   


:::note important words
- **document**
- **Element**
- **let**
- **Event**
:::
