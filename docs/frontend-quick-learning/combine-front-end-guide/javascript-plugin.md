---
title: Javascript Plugin
---

## Goal
- ⚡ In this step, we are going to learn how to use javascript plugin.
- 🔥 We'll add a plugin to the Customers Voice section to add an effect like the GIF below.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_010547.gif)

## wow.js
We will add a plugin called wow.js to add effects.
![20200607233437](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200607233437.png)

https://wowjs.uk/

## Install
As described in [wow.js document](https://wowjs.uk/docs.html), the following two files are required to use this plugin.

1. `animate.css`
2. `wow.min.js`

Let's prepare these files.

### Animate css
First, copy the code of `animate.min.css` **v3.7.1** from the following URL.

https://github.com/daneden/animate.css

Next, create a file `animate.min.css` in the `css` folder and paste the copied code.

:::caution
**Note**: Do not **save** after pasting the code. This is because if you save the code, auto format feature will be applied to the code and it will decompress the compressed code.
:::

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_003923.gif)

### `wow.min.js`
Next, let's prepare `wow.min.js`. Copy the code of `wow.min.js` from the following URL's `dist` folder.

https://github.com/graingert/wow

Next, create the `wow.min.js` file in the `js` folder and paste the copied code.

:::caution
**Note**: Do not **save** the code as well as the previous one. The auto format will decompress the compressed code.
:::

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_004112.gif)


## Setup
Now the files are ready, let's set up as described in [wow.js document] (https://wowjs.uk/docs.html).

### Animate css
```html title="index.html"
<head>
  ...
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
Add the `wow bounceInUp` classes to the target element to which you want to add an effect.

And add `data-wow-duration` and `data-wow-delay` to the target element.

Edit each column in the Customers Voice section as follows.

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
                <h6 class="mb-0">Denny Omega</h6>
                <span class="text-muted" style="font-size: 0.8rem;">
                  @WWF wrestler
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
                <h6 class="mb-0">Malissa May</h6>
                <span class="text-muted" style="font-size: 0.8rem;">
                  @CEO of Zahoo
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
                <h6 class="mb-0">Sobias Luke</h6>
                <span class="text-muted" style="font-size: 0.8rem;">
                  @CEO of thopify
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
```

![](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200608_152902.gif)


## Change the `delay` time for each column
Change the `data-wow-delay` in each column as follows.
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