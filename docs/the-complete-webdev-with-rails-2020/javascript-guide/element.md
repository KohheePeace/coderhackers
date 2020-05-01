---
title: Element
---

## Overview

In this step, we're going to
- Tackle **(2) and (3)** of the below part

```html title="test4.html"
<script>
  let demoElement = document.getElementById('demo');       --- (1)
  
  // highlight-start
  demoElement.onclick = function changeContent () {        --- (2)
    demoElement.innerHTML = "Help me";                     --- (3)
    demoElement.style = "Color: red";
  }
  // highlight-end
</script>
```



## Refs

Element: https://developer.mozilla.org/en-US/docs/Web/API/Element

https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers