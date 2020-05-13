---
title: Refactor Code
---

## Goal
  - ⚡ Refactor javascript code to make it easier to understand

## Refactor code
We are going to refactor last chapter code **to make it easy to understand what we are doing**.

This is current code.

```html
<script>
  document.getElementById('demo').onclick = function changeContent() {
    document.getElementById('demo').innerHTML = "Help me";
    document.getElementById('demo').style = "color: red";
  }
</script>
```

We will do the same thing described in the below link. 


![refactor-onclick-method](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-13-16-42-20.png)
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics


So `js-test1.html` code becomes
```html title="js-test1.html"
<script>
  let demoElement = document.getElementById('demo');       --- (1)

  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";
  }
</script>
```


## What's next ?
From the next step, let's dive into the meaning of each lines of code.
