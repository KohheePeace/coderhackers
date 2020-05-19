---
title: col - Tablet
---

## Goal
- ⚡ Satisfy Tablet requirement

## Tablet
:::info Specification
- ⬜ Desktop => 6 columns
- <mark>⬜ Tablet => 3 columns</mark>
- ✅ mobile => 2 column
:::

### Check device width
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-05-13-58.png)

### Grid options table
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-05-15-12.png)

:::note
- So, we need to use `col-md`
- We want **3 columns** for tablet => `col-md-4`
:::


Add every `col-md-4` to every column.
```html
<!-- highlight-next-line -->
<div class="col-12 col-md-4">
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