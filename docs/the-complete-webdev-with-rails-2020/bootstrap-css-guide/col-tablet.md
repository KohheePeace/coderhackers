---
title: col - Tablet
---

## Goal
- ⚡ Satisfy Tablet layout requirement

## Tablet
:::info Specification
- ⬜ Desktop => 6 columns
- <mark>⬜ Tablet => 3 columns</mark>
- ✅ mobile => 2 columns
:::

## Check device width
![](../../img/2020-05-21-14-16-34.png)

## Grid options table
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-05-15-12.png)


## Calculate col- number

![](../../img/2020-05-21-11-01-06.png)
```txt title="Formula to determine col- number"
12/(x columns) = 12/(3 columns) = 12/3 = 4 = col-4
```

:::info
- We need to use `col-md`
- We want **3 columns** for tablet => `col-md-4`
:::


Add `col-md-4` to every column.

By adding `col-md-4` you can override the effect of `col-6` from the Medium devices.
```html
<!-- highlight-next-line -->
<div class="col-6 col-md-4">
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