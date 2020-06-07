---
title: col - Mobile
---

## ゴール
- ⚡ Satisfy Mobile layout requirement

:::info Requirements
- ⬜ Desktop => 6 columns
- ⬜ Tablet => 3 columns
- <mark>⬜ Mobile => 2 columns</mark>
:::

## Check device viewport width

:::info
> The browser's **`viewport`** is **<mark>the area of the window in which web content can be seen.</mark>**

https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
:::

You see **iPhone 6** viewport width is **375**px

![](../../img/2020-05-19-12-44-11.png)

## Check grid options tables
Then, let's check this tables.

![](../../img/2020-05-21-11-51-48.png)
Ref: https://getbootstrap.com/docs/4.5/layout/grid/#grid-options

This tables show **which `col-xx` to use for each viewport width**.

This is why I checked device viewport width.


:::info
- We need to use `col-` for mobile layout (ex iPhone 6: **375px** < 576px)
- We want mobile layout **2 columns** => use **`col-6`**
:::

## Why `col-6` for 2 columns ?

![](../../img/2020-05-19-08-36-38.png)

:::info
Maximum number of columns in row is **12**
:::

![](../../img/2020-05-21-11-01-06.png)

:::info
```txt title="Formula to determine col- number"
12/(x columns) = 12/(2 columns) = 12/2 = 6 = col-6
```
:::

Don't worry you will get used to it gradually.

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

![](/docs/img/20200520_215205.gif)

:::caution

> Grid breakpoints are based on minimum width media queries, meaning they apply to that <mark>**one breakpoint and all those above it**</mark>

https://getbootstrap.com/docs/4.5/layout/grid/#how-it-works
:::

This is why, currently in every devices, the layout is **2 columns**.

In the next step, let's satisfy Tablet layout by fixing this problem.