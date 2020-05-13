---
title: Element Events
---

## Goal
- ⚡ Understand **(2)** of the below part

```html title="js-test1.html"
<script>
  let demoElement = document.getElementById('demo');       --- (1)
  
  // highlight-next-line
  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
  }
</script>
```

## Overview
In this step, we're going to focus on `<div#demo>` HTML element in DOM.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-21-24-55.png)


## ELement `Events`
> Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this  interface.

https://developer.mozilla.org/en-US/docs/Web/API/Element

As described here, HTML element have various **"Events"**.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_230720.gif)


:::caution note
- I will handle `addEventListener()` in future step
- Currently focus on `oneventname` property
:::


## `click` event
`click`:
> Fired when a pointing device button (e.g., a mouse's primary button) is <mark>pressed and released on a single element.</mark>
> Also available via the `onclick` property.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_231416.gif)


## `mouseover` event
`mouseover`:
> Fired when a pointing device is <mark>moved onto the element</mark> to which the listener is attached or onto one of its children.
> Also available via the `onmouseover` property.

### Try `mouseover` event

```html title="js-test1.html"
<script>
  let demoElement = document.getElementById('demo');       --- (1)
  
  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
  }

  // highlight-start
  // you can skip function name
  demoElement.onmouseover = function () {
    console.log("Hello~!");
  }
  // highlight-end
</script>
```

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_231838.gif)

## javascript `function`

:::info
**`function`** is just a javascript syntax.

```js
function functionNameHERE () {
  // Do something here
}
```

https://www.w3schools.com/js/js_functions.asp
:::

