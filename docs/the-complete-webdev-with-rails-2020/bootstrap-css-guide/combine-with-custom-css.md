---
title: Combine with custom CSS
---


## Goal
  - ⚡ Combine custom CSS with Bootstrap CSS


## Why ?
Bootstrap is useful to make nice website rapidly.

**But**, **<mark>there is a case you want to customize default Bootstrap's CSS.</mark>**

So, in this chapter, we going to learn how to do it!

## 1. Change `.jumbotron` background color

First, let's change jumbotron background color.

As shown below gif,

1. Open Chrome DevTools
2. Find `.jumbotron` class
3. Change `background-color` css-property to `yellow`
4. Copy code

![change-jumbotron-css](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/change-jumbotron-css.gif)

### Make `bootstrap-test1.css`

Copy and Paste and delete unnecessary part.

`bootstrap-test1.css`
```css
.jumbotron {
  background-color: yellow;
}
```

### Import `bootstrap-test1.css`

```html {11,12} title="test3.html"
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="bootstrap-test1.css">
    <title>Hello, world!</title>
  </head>
  ...
</html>
```

## 2. Make "Hello, world!" bold

Next, we want to make **"Hello, world!"** text bold.

![custom-css-inline-style](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/custom-css-inline-style.gif)

`test3.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="bootstrap-test1.css">
    <title>Hello, world!</title>
  </head>
  <body>
    ...
    <div class="jumbotron">
      <!-- highlight-next-line -->
      <h1 class="display-4" style="font-weight: bold;">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    ...
  </body>
</html>
```