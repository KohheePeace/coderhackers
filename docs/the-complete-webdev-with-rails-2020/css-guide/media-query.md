---
title: Media Query
---

## Goal
- ⚡ Learn media query

## What is media query ?
:::info
  **Media query** is really important CSS features to <mark>change styles depending on device screen width</mark>.
:::

## Basic media query syntax

```css
/* if your browser's viewport width is equal to or widder than 480px */
@media screen and (min-width: 480px) {
  /* write CSS here */
  /* This CSS is applied only in specified range */
}
```

You will easily understand this syntax after you tried it!

<!-- **`screen`** can take values like **`all`**, **`print`** as shown below image, but you almost never use except **`screen`**.

So, you don't need to care about it currently.
![css-media-types](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/2020-04-28-21-56-24.png)

https://www.w3schools.com/cssref/css3_pr_mediaquery.asp -->


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

Code Ref: https://www.tutorialrepublic.com/css-tutorial/css3-media-queries.php

## Check the output
![change-width-media-query](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/20200508_072257.gif)
