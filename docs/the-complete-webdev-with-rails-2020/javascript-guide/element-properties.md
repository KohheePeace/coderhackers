---
title: Element Properties
---

## Goal
- ⚡ Understand **(3)** of the below code

```html title="js-test1.html"
<script>
  let demoElement = document.getElementById("demo");       --- (1)
  
  demoElement.onclick = function changeContent () {        --- (2)
    // highlight-start
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
    // highlight-end
  }
</script>
```


## Element `Properties`
To understand  **(3)** we focus on **`Element Properties`**

![](../../img/2020-05-24-19-40-15.png)

As described here, HTML element has a lot of properties.

![html-element-properties](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-02-20-28-59.png)

Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element

You see `innerHTML` property.

And `style` property is not documented here. It is documented here
https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style

## Check properties in console
So, first let's check current `<div#demo>` properties.

![check-property](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_232636.gif)


## Change properties
You can **<mark>change these properties by assigning new values</mark>**.

![change-property](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_232934.gif)

And we're doing the same thing inside function.

```html
<script>
  let demoElement = document.getElementById("demo");       --- (1)
  
  demoElement.onclick = function changeContent () {        --- (2)
    // highlight-start
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
    // highlight-end
  }
</script>
```

## Summery
I hope you understand this code! 🙋

```html
<script>
  let demoElement = document.getElementById("demo");       --- (1)
  
  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
  }
</script>
```

:::caution
If you understand **the flow of this code**, it is enough! 💯

**70% understanding is enough**! Let's go next!  👍
:::