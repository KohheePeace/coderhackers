---
title: Combine with custom JavaScript
---

## Goal
  - ⚡ Learn how to combine custom jQuery code with Bootstrap

## Overview

In this chapter, let's make a feature like below image and learn how to combine custom jQuery code and Bootstrap. 

:::info Specifications
1. When user visit your website
2. Show modal
:::

![document-ready-show-modal](https://storage.googleapis.com/coderhackers-assets/docs/img/20200510_063821.gif)


## Preparation
- Make `custom.js` in `bootstrap-js-test` folder
- Include `custom.js` in `bootstrap-js-test1.html`

```html title="bootstrap-js-test1.html"
<!DOCTYPE html>
<html lang="en">
    ...

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>

    <!-- highlight-start -->
    <!-- Custom javascript -->
    <script src="custom.js"></script>
    <!-- highlight-end -->
  </body>
</html>
```

## Do something when user visit website

### Add `$( document ).ready()`
https://learn.jquery.com/using-jquery-core/document-ready/

```js title="bootstrap-js-test/custom.js"
$( document ).ready(function() {
    console.log( "ready!" );
});
```

### Check the output

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200510_030230.gif)

### Refactor
This is a shorthand of  `$( document ).ready()`
```js title="bootstrap-js-test/custom.js"
$(function() {
    console.log( "ready!" );
});
```

## Add code to open modal
This is a code to open modal manually.
```js
$('#myModal').modal('show')
```
https://getbootstrap.com/docs/4.5/components/modal/#modalshow


## Final Code

```js title="custom.js"
$(function () {
  $("#exampleModal").modal("show");
});
```

## Summery
:::important
- By using javascript, you can open modal without clicking the button
:::