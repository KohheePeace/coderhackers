---
title: col - Desktop
---

## Goal
- ⚡ Satisfy Desktop requirement

## Desktop

:::info Specification
- <mark>⬜ Desktop => 6 columns</mark>
- ✅ Tablet => 3 columns
- ✅ Mobile => 1 column
:::

### Check device width

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-05-18-52.png)

### Grid options table
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-05-19-48.png)

But, `col-lg` also covers this device width and `col-lg` is enough for normal desktop or Desktop.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-05-24-13.png)
Ref: https://getbootstrap.com/docs/4.4/layout/overview/#responsive-breakpoints

:::note
- So, we use **`col-lg`** for desktop
- We want **6 columns** for desktop => **`col-lg-2`**
:::


Add every `col-lg-2` to every column.
```html
<!-- highlight-next-line -->
<div class="col-12 col-md-4 col-lg-2">
  <div class="card" style="width: 100%;">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tortoiseshell_she-cat.JPG/640px-Tortoiseshell_she-cat.JPG"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

## Check the output
Confirm everything works well in Chrome DevTools here...
