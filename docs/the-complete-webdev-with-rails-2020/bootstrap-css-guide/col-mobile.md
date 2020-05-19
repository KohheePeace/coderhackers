---
title: col - Mobile
---

## Goal
- ⚡ Satisfy Mobile requirement
  
## Mobile
So, let's start from mobile layout.

:::info Requirements
- ⬜ Desktop => 6 columns
- ⬜ Tablet => 3 columns
- <mark>⬜ Mobile => 2 column</mark>
:::

### Check device width
You see **iPhone 6** viewport width is **375**px

![](../../img/2020-05-19-12-44-11.png)

### Check grid options tables
Then, check this link https://getbootstrap.com/docs/4.3/layout/grid/#grid-options

![bootstrap-grid-options](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/bootstrap-grid-options-mobile_LI%20(2).jpg)

:::info
- As shown in the above image, we should use `col-` for mobile layout (**375px** < 576px).
- We want mobile layout **2 columns** => use **`col-6`** to each column.
:::

## Why `col-6` for 2 columns ?

![](../../img/2020-05-19-08-36-38.png)

![](../../img/2020-05-19-08-06-38.png)

```
12/(2 columns) = 12/2 = 6
```
Don't worry you can understand clearly after finishing Tablet layout.

## Change `col-sm` to `col-6`
Change every `col-sm` to `col-6`
```html
<!-- highlight-next-line -->
<div class="col-6">
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

## Check the current output

:::caution

> Grid breakpoints are based on minimum width media queries, meaning they apply to that <mark>**one breakpoint and all those above it**</mark> (e.g., `.col-sm-4` applies to small, medium, large, and extra large devices, but not the first xs breakpoint).

https://getbootstrap.com/docs/4.5/layout/grid/#how-it-works
:::