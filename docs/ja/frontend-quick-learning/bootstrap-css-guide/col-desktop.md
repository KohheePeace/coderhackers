---
title: col - Desktop
---

## Goal
- ⚡ Satisfy Desktop layout requirement

## Desktop

:::info Specification
- <mark>⬜ Desktop => 6 columns</mark>
- ✅ Tablet => 3 columns
- ✅ Mobile => 1 column
:::

## Check device width

![](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/2020-05-21-17-44-52.png)

## Grid options table
![](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/2020-05-21-17-57-37.png)

The device width is applied to both **Large** and **Extra Large** range.

According to this bootstrap document **Large** range includes desktop.
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-09-05-24-13.png)
Ref: https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints


:::info
For normal desktop, it is usual to use **`col-lg`**
:::

## Calculate col- number

```txt title="Formula to determine col- number"
12/(x columns) = 12/(6 columns) = 12/6 = 2 = col-2
```

![](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/2020-05-21-11-01-06.png)

:::info
- So, we use **`col-lg-`** for desktop
- We want **6 columns** for desktop => **`col-lg-2`**
:::


Add **`col-lg-2`** to every column.
```html
<!-- highlight-next-line -->
<div class="col-6 col-md-4 col-lg-2">
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
Confirm everything satisfy requirements in Chrome DevTools here...
