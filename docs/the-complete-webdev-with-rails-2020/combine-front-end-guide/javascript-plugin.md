---
title: Javascript Plugin
---

## Goal
- ⚡Learn how to use javascript plugin

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_010547.gif)

## Wow
https://wowjs.uk/
https://github.com/graingert/wow

## Install
From document https://wowjs.uk/docs.html, we need to install 

1. `animate.css`
2. `wow.min.js`

### `wow.min.js`

Go to: https://github.com/graingert/wow

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_004112.gif)

### Animate css
https://github.com/daneden/animate.css

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_003923.gif)



## Setup
### Animate css
```html title="index.html"
<head>
  <!-- highlight-start -->
  <!-- Animate CSS -->
  <link href="css/animate.min.css" rel="stylesheet" />
  <!-- highlight-end -->

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/custom.css" />
</head>
```

### wow js
```html title="index.html"
<!-- highlight-next-line -->
<script src="js/wow.min.js"></script>  
<!-- Custom Javascript -->
<script src="js/custom.js"></script>
```

```js title="js/custom.js"
new WOW().init();
```

## How to use
Add class `wow bounceInUp` and property to target element you want to add effect.
```html
<div
  <!-- highlight-start -->
  class="wow bounceInUp"
  data-wow-duration="1s"
  data-wow-delay="1s"
  <!-- highlight-end -->
>
```

### For example
```html title="index.html"
<!-- Customers Voice -->
<section id="customers-voice">
  <div class="container">
    <div class="section-header text-center">
      <h1 class="display-5 mb-4">What our customers say</h1>
      <p>
        Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore.
      </p>
    </div>
    <div class="row">
      <!-- highlight-start -->
      <div
        class="col-md-4 mb-4 wow bounceInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
      <!-- highlight-end -->
        <div class="card w-100 shadow" style="border: none;">
          <div class="card-body">
            <div class="media mb-3">
              <img
                src="img/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716.jpg"
                class="mr-3 rounded-circle"
                alt="..."
                style="width: 40px; height: 40px;"
              />
              <div class="media-body">
                <h6 class="mb-0">Kenny Omega</h6>
                <span class="text-muted" style="font-size: 0.8rem;">
                  @WWE wrestler
                </span>
              </div>
            </div>
            <p class="card-text text-muted">
              Rem mus tibi vero metenda ea indignitatem modo. Harum netus
              fames sit eius, memorabilem magistratu ille. Magna te eget dis
              quod arduas victrici.
            </p>
          </div>
        </div>
      </div>
      <!-- highlight-start -->
      <div
        class="col-md-4 mb-4 wow bounceInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
      <!-- highlight-end -->
        <div class="card w-100 shadow" style="border: none;">
          <div class="card-body">
            <div class="media mb-3">
              <img
                src="img/adult-attractive-beautiful-beauty-415829.jpg"
                class="mr-3 rounded-circle"
                alt="..."
                style="width: 40px; height: 40px;"
              />
              <div class="media-body">
                <h6 class="mb-0">Ema Wasignton</h6>
                <span class="text-muted" style="font-size: 0.8rem;">
                  @CEO of testfy
                </span>
              </div>
            </div>
            <p class="card-text text-muted">
              Rem mus tibi vero metenda ea indignitatem modo. Harum netus
              fames sit eius, memorabilem magistratu ille. Magna te eget dis
              quod arduas victrici.
            </p>
          </div>
        </div>
      </div>
      <!-- highlight-start -->
      <div
        class="col-md-4 mb-4 wow bounceInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
      <!-- highlight-end -->
        <div class="card w-100 shadow" style="border: none;">
          <div class="card-body">
            <div class="media mb-3">
              <img
                src="img/photography-of-a-guy-wearing-green-shirt-1222271.jpg"
                class="mr-3 rounded-circle"
                alt="..."
                style="width: 40px; height: 40px;"
              />
              <div class="media-body">
                <h6 class="mb-0">Vince McMahon</h6>
                <span class="text-muted" style="font-size: 0.8rem;">
                  @CEO of WWE
                </span>
              </div>
            </div>
            <p class="card-text text-muted">
              Rem mus tibi vero metenda ea indignitatem modo. Harum netus
              fames sit eius, memorabilem magistratu ille. Magna te eget dis
              quod arduas victrici.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- # Customers Voice -->
```

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_010335.gif)


## Change each `delay` time
```html
<div
  class="col-md-4 mb-4 wow bounceInUp"
  data-wow-duration="1s"
  data-wow-delay="300ms"
>
...
<div
  class="col-md-4 mb-4 wow bounceInUp"
  data-wow-duration="1s"
  data-wow-delay="550ms"
>
...
<div
  class="col-md-4 mb-4 wow bounceInUp"
  data-wow-duration="1s"
  data-wow-delay="800ms"
>
```

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_010547.gif)