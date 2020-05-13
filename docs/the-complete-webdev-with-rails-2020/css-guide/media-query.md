---
title: Media Query
---

## Goal
- ⚡ Learn media query

## What is media query ?

> Media queries allow you to customize the presentation of your web pages <mark>**for a specific range of devices like mobile phones, tablets, desktops, etc.**</mark>

https://www.tutorialrepublic.com/css-tutorial/css3-media-queries.php

You will easily understand media query if you use it!

## Basic media query syntax

:::info
**If the screen width is `480px` or wider**, background-color becomes `lightgreen`.
:::

```css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

"`screen`" can take values like "`all`", "`print`" as shown below image, but you almost never use expect "`screen`".

![css-media-types](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-28-21-56-24.png)

https://www.w3schools.com/cssref/css3_pr_mediaquery.asp

So, don't need to care about it.


## Try media query

Make `media-query.html` in `css-test` folder.

```html title="media-query.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- highlight-start -->
    <style>
      /* Smartphones (portrait) ---------- */
      @media screen and (max-width: 320px) {
        body {
          background-color: red;
        }
      }
      /* Smartphones (landscape) ---------- */
      @media screen and (min-width: 321px) {
        body {
          background-color: blue;
        }
      }
      /* tablets, iPads (portrait and landscape) ---------- */
      @media screen and (min-width: 768px) and (max-width: 1024px) {
        body {
          background-color: yellow;
        }
      }
      /* tablets, iPads (landscape) ---------- */
      @media screen and (min-width: 1024px) {
        body {
          background-color: pink;
        }
      }
      /* Desktops and laptops ---------- */
      @media screen and (min-width: 1224px) {
        body {
          background-color: orange;
        }
      }
      /* Large screens ---------- */
      @media screen and (min-width: 1824px) {
        body {
          background-color: cyan;
        }
      }
    </style>
    <!-- highlight-end -->
  </head>
  <body>
    <h1>Media query Test!</h1>
  </body>
</html>

```

### Check the output
![change-width-media-query](https://storage.googleapis.com/coderhackers-assets/docs/img/20200508_072257.gif)
