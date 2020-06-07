---
title: DOM - Document Object Model
---

## ゴール
- ⚡ Understand **(1)** of the below code

```html title="js-test1.html"
<script>
    // highlight-next-line
  let demoElement = document.getElementById("demo");       --- (1)

  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
  }
</script>
```

## What is `let` ?
**<mark>`let` is used to declare variable.</mark>**

```js
let x = 1;
```

Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

:::caution
There is also `var` to declare variable. But currently it is enough to use `let`.
:::


## What is `document` ?

To understand `document`, we need to understand **DOM - Document Object Model**


### What is DOM ?
When browser receives HTML file, the browser turns HTML file into a **Document Object Model (DOM) Tree** under browser's **window** object.

![browser-html-to-DOM](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-02-01-53-13.png)
ref: https://developers.google.com/web/updates/2018/09/inside-browser-part3

### Why making DOM ?
By making DOM tree, **<mark>it becomes easier to handle by javascript.</mark>**


## Check `document`
Let's check `document` in chrome console.

In **`console`** tab, you can write **`javascript` code**.

And you can easily access `document` thanks to **DOM tree**.

![check-document](https://storage.googleapis.com/coderhackers-assets/docs/img/20200501_053737.gif)

By typing `document` in console, you can obtain tree under `document`.


## `getElementById()` method

As described in the below link **`document`** has various **"methods"**.

![](/docs/img/20200523_171309.gif)

https://developer.mozilla.org/en-US/docs/Web/API/Document

**`getElementById()`** is one of these **`document`**'s method.

> The Document method <mark>**`getElementById()` returns an `Element` object**</mark> representing the element **whose id property matches the specified string**. 

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

### Image of `getElementById()`
This is the image of getting element by using `getElementById()`.

![dom-getElementById](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-02-02-39-08.png)

### Check returned Element

![check-returned-element](https://storage.googleapis.com/coderhackers-assets/docs/img/20200501_054401.gif)

```js
document.getElementById("demo");
```

returns the below part of **`Element` object**.

```html
<div id="demo">Click here</div>
```

## Summery
I hope you understand **(1)**

```html title="js-test1.html"
<script>
  // highlight-next-line
  let demoElement = document.getElementById("demo");       --- (1)

  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";
  }
</script>
```
:::note Recap the meaning of this code
1. Declare `demoElement` variable using `let`
2. Assign **`Element` object** which is returned by `document.getElementById("demo")` to it.
:::