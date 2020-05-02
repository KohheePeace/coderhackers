---
title: Element
---

## Goal

In this step, we're going to
- Tackle **(2) and (3)** of the below part

```html title="test4.html"
<script>
  let demoElement = document.getElementById('demo');       --- (1)
  
  // highlight-start
  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
  }
  // highlight-end
</script>
```

## Overview
In this step, we're going to focus `<div#demo>` HTML element in DOM.

![](../../img/2020-05-02-21-43-47.png)


## ELement `Event handler property`
![](../../img/2020-05-02-21-52-42.png)

As described here, HTML element can take various **"Event handler property"**: `onchange`, `onclick`...

![](../../img/2020-05-02-21-47-08.png)
https://www.w3schools.com/js/js_events.asp


This property is used to define **what to do when `onEventName` happened.**


### `onmouseover`
`onmouseover`:	The user **moves the mouse over an HTML element** => Do something.

```html title="test4.html"
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

:::note
**`function`** is just a javascript syntax.


```js
function functionNameHERE () {
  // Do something here
}
```

https://www.w3schools.com/js/js_functions.asp
:::


## Element `Properties`
![](../../img/2020-05-02-21-54-13.png)

As described here, HTML element has a lot of properties.

![html-element-properties](../../img/2020-05-02-20-28-59.png)
https://developer.mozilla.org/en-US/docs/Web/API/Element

You see `innerHTML` and `style` is one of these properties.

### Check properties before `onclick`

![check-property](../../img/2020-05-02-21-35-27.png)


### Change properties
You can change these properties by assigning new values.

![change-property](../../img/2020-05-02-21-29-26.png)



## Summery
I hope you understand this code! 🙋

```html
<script>
  let demoElement = document.getElementById('demo');       --- (1)
  
  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
  }
</script>
```

:::note
If you understand **the flow**, it is enough! 👍

**70% understanding is enough**! Let's go next!  👍
:::