---
title: Combine with custom JavaScript
---

In this chapter, we are going to
  - Learn how to combine manual jQuery script and Bootstrap

## Overview

In this chapter, let's make a feature like below image and learn how to combine manual jQuery script and Bootstrap. 

:::note Specifications
1. When user visit your website
2. Show modal
:::

![document-ready-show-modal](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-js-guide/document-ready-show-modal.gif)


## When user visit do something
Let's make this feature step by step.


### Add `$( document ).ready()`

### Check the output

### Refactor Shorthand

## Show modal manually (programmatically)

```html title="test4.html"
...
<!-- Optional JavaScript -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="script4.js"></script>
<script>
  // highlight-start
  $(function() {
    $('#donationModal').modal('show');
  });
  // highlight-end
</script>
```

### Understand code

https://learn.jquery.com/using-jquery-core/document-ready/

https://getbootstrap.com/docs/4.4/components/modal/#modalshow