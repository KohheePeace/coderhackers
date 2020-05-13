---
title: Font Awesome
---

## Goal
- ⚡ Learn how to add icons

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-05-00-04-44.png)

## What is Font Awesome?
> Font Awesome is a font and icon toolkit...

https://en.wikipedia.org/wiki/Font_Awesome

By using Font Awesome you can easily add cool fonts.


## Install
1. Please enter your email in Font Awesome site and sign-in

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200504_234358.gif)

Then,

In `index.html` inside `<head>` tag
```html title="index.html"
<head>
  ...
<!-- highlight-start -->
<!-- Font Awesome -->
<script
  src="https://kit.fontawesome.com/476ef21ecf.js"
  crossorigin="anonymous"
></script>
<!-- highlight-end -->

<!-- Google Fonts -->
...
</head>
```

## How to add icons
Go to icons page: https://fontawesome.com/icons?d=gallery

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200504_235918.gif)

## Paste code code
By just pasting code you can add cool icons.
```html
<i class="fas fa-arrow-alt-circle-right"></i>
```

```html title="index.html"
<a
  class="btn btn-primary font-weight-bold mb-3 mb-lg-0"
  href="#"
  role="button"
>
  Get Started!
  <!-- highlight-next-line -->
  <i class="fas fa-arrow-alt-circle-right"></i>
</a>
<a
  class="btn btn-dark font-weight-bold ml-lg-3"
  href="#"
  role="button"
>
  Learn more
  <!-- highlight-next-line -->
  <i class="fas fa-arrow-alt-circle-right"></i>
</a>
```

## Add margin-left
```html
<i class="fas fa-arrow-alt-circle-right ml-2"></i>
```