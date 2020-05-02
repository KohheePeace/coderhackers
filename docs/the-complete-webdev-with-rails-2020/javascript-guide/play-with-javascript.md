---
title: Play with JavaScript
---

## Oveview

In this step, we are going to
  - 🐯 Understand last chapter's js code.
  - 🐅 Try different javascript code to get used to it.


## Where to write javascript code ?
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
- Actually you can write javascript code in **various places**
- I will introduce about this in later step.
:::


## Understand last chapter's code.

Okay so, let's understand the last chapter's code
```html
<script>
  document.getElementById('demo').onclick = function changeContent() {
    document.getElementById('demo').innerHTML = "Help me";
    document.getElementById('demo').style = "color: red";
  }
</script>
```




### Refactor code
We are going to refactor last chapter code **to make it easy to understand what we are doing**.

We will do the same thing described the below link. 


![refactor-onclick-method](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-13-16-42-20.png)
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics


So `test4.html`
```html title="test4.html"
<script>
  // Comment out before code.
  // document.getElementById('demo').onclick = function changeContent() {
  //   document.getElementById('demo').innerHTML = "Help me";
  //   document.getElementById('demo').style = "color: red";
  // }
  
  // highlight-start
  // Get target element 'demo' and assign it to `demoElement` variable 
  let demoElement = document.getElementById('demo');

  // Add function to the demoElement's `onclick` event.
  // you can skip function name 'changeContent'
  demoElement.onclick = function () {
    // Do something towards target Element
    demoElement.innerHTML = "Help me";
    demoElement.style = "color: red";
  }
  // highlight-end
</script>
```

:::note The flow
At first, just understanding **the flow** is enough!

1. From **`document`**, get target **`element`** by using **id**.
2. Assign it to demoElement **variable** declared by **`let`**.
3. Attach function to demoElement's onclick **`event`**
4. Inside function(), do something towards demoElement

:::

---

### Check effect of the `function()`

This is a gif of the effect of function content.
```js
demoElement.innerHTML = "Help me";
demoElement.style = "color: red";
```

![effect-of-function-contents](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-13-18-40-20-js-onclick-effect.gif)


## What's next ?
In the next step, let's check these important words.

:::note important words
- **`document`**
- **`Element`**
- **`let`**
- **`Event`**
:::
