---
title: DOM - Document Object Model
---

## Goal
- ⚡ Understand **"(1)"** of the below code

```html title="test4.html"
<script>
  // highlight-next-line
  let demoElement = document.getElementById('demo');       --- (1)

  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";
  }
</script>
```


## What is `document` ?

To understand `document`, we need to understand **"DOM - Document Object Model"**


### What is DOM ?
When browser receives HTML file, the browser turns HTML file into a **Document Object Model (DOM) Tree** under browser **window** object.

![browser-html-to-DOM](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-02-01-53-13.png)
ref: https://developers.google.com/web/updates/2018/09/inside-browser-part3

### Why making DOM ?
<mark>By making DOM tree, it becomes easier to handle by javascript.</mark>


### Check `document`
Let's check `document` in chrome console.

In **`console`** tab, you can write **`javascript` code**.

![check-document](https://storage.googleapis.com/coderhackers-assets/docs/img/20200501_053737.gif)


## `getElementById()` method

**`document`** has various **"methods"**.

https://developer.mozilla.org/en-US/docs/Web/API/Document

**`getElementById()`** is one of these **`document`**'s method.

> The Document method **getElementById()** **returns an Element** object representing the element **whose id property matches the specified string**. 

https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

## Image of `getElementById()`
This is the merit of DOM. Easily access to the other element.

![dom-getElementById](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-02-02-39-08.png)

### Check returned Element

![check-returned-element](https://storage.googleapis.com/coderhackers-assets/docs/img/20200501_054401.gif)

```js
document.getElementById('demo');
```

returns this element.

```html
<div id="demo">Click here</div>
```

## What is `let` ?
**<mark>`let` is used to declare variable.</mark>**

```js
let demoElement = document.getElementById('demo');
```

is shorthand of


```js
// Declare variable
let demoElement;

// Then assign demoElement with returned element by document.getElementById('demo');
demoElement = document.getElementById('demo');
```