---
title: Element Properties
---

## Goal
- ⚡ Understand **(3)** of the below part

```html title="js-test1.html"
<script>
  let demoElement = document.getElementById('demo');       --- (1)
  
  demoElement.onclick = function changeContent () {        --- (2)
    // highlight-start
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
    // highlight-end
  }
</script>
```


## Element `Properties`
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-21-40-51.png)

As described here, HTML element has a lot of properties.

![html-element-properties](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-02-20-28-59.png)

Ref: https://developer.mozilla.org/en-US/docs/Web/API/Element

You see `innerHTML` and `style` is one of these properties.

## Check properties in console

![check-property](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_232636.gif)


## Change properties
You can change these properties by assigning new values.

![change-property](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_232934.gif)



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

:::caution
If you understand **the flow of this code**, it is enough! 💯

**70% understanding is enough**! Let's go next!  👍
:::