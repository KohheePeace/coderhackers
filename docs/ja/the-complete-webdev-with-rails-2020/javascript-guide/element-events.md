---
title: Element Events
---

## ゴール
- ⚡ Understand **(2)** of the below code

```html title="js-test1.html"
<script>
  let demoElement = document.getElementById("demo");       --- (1)
  
  // highlight-next-line
  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
  }
</script>
```

## Overview
To understand **(2) and (3)** of the above code,

we're going to focus on `<div#demo>` Element and learn **`Element`** **<mark>Events and Properties</mark>**.

![](../../img/2020-05-24-19-38-42.png)


## ELement `Events`

In this step, we focus on **`Element Events`** to understand **(2)**.

![](../../img/2020-05-24-19-39-31.png)

As described here, HTML element have various **"Events"**.

![](/docs/img/20200523_194733.gif)

https://developer.mozilla.org/en-US/docs/Web/API/Element

And you can

> Listen to these events using `addEventListener()` or by assigning an event listener to the <mark>`oneventname` property</mark> of this interface.

https://developer.mozilla.org/en-US/docs/Web/API/Element

:::caution note
- I will handle `addEventListener()` in future step
- Focus on `oneventname` property currently
:::

Okay so, let's check the example of events.

## `click` event
`click`:
> Fired when a pointing device button (e.g., a mouse's primary button) is <mark>pressed and released on a single element.</mark>
> Also available via the `onclick` property.

![](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/20200509_231416.gif)


This is what used in our code

```html
<script>
  let demoElement = document.getElementById("demo");
  
  // highlight-next-line
  demoElement.onclick = function changeContent () { 
    demoElement.innerHTML = "Help me";              
    demoElement.style = "color: red";               
  }
</script>
```

Okay, so let's try another event.

## `mouseover` event
`mouseover`:
> Fired when a pointing device is <mark>moved onto the element</mark> to which the listener is attached or onto one of its children.
> Also available via the `onmouseover` property.

### Try `mouseover` event

```html title="js-test1.html"
<script>
  let demoElement = document.getElementById("demo");       --- (1)
  
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

![](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/20200509_231838.gif)

## Javascript `function`

**`function`** is just a javascript syntax.

```js
function functionName () {
  // Do something here
}
```

https://www.w3schools.com/js/js_functions.asp


So, by writing like the below,

you can define **"what to do"** when there is an event to that Element.
```js
SomeElement.oneventname = function functionName () {
  // Do something here
}
```