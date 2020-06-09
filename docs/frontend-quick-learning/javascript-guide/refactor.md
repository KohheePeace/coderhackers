---
title: Refactor Code
---

## Goal
  - ⚡ Refactor the previous step javascript code to make it easier to understand

## Refactor code
This is current code.

```html
<script>
  document.getElementById("demo").onclick = function changeContent() {
    document.getElementById("demo").innerHTML = "Help me";
    document.getElementById("demo").style = "color: red";
  }
</script>
```

We will do the same thing described in the below link. 


![refactor-onclick-method](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-13-16-42-20.png)
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics


So `js-test1.html` code becomes
```html title="js-test1.html"
<script>
  let demoElement = document.getElementById("demo");       --- (1)

  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "color: red";                      --- (3)
  }
</script>
```


## What's next ?
In the next step, I'll explain **(1)** of this code! 
