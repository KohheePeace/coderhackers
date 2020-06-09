---
title: Jumbotron
---

## Goal
- ⚡ In this step, we're going to create a **Jumbotron**.

![20200604013125](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200604013125.png)

## Copy jumbotron code
First, let's copy the code from the Bootstrap jumbotron page.
https://getbootstrap.com/docs/4.5/components/jumbotron/

```html
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
```

Then, paste the copied code into `index.html`.

```html title="index.html"
...
</nav>

<!-- highlight-start -->
<!-- Jumbotron -->
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">
    This is a simple hero unit, a simple jumbotron-style component for
    calling extra attention to featured content or information.
  </p>
  <hr class="my-4" />
  <p>
    It uses utility classes for typography and spacing to space content out
    within the larger container.
  </p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
<!-- highlight-end -->

<!-- Optional JavaScript -->
...
```

## Prepare an image.
Next, let's prepare images for Jumbotron.

### Main image
First, let's prepare the main image.
![20200604130822](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200604130822.png)

- Go to https://undraw.co/illustrations.
- Change the color of the image to `"#00B0FF"`.
- Search for **"static assets "**
- Download the svg file
- Move the downloaded file to the **`img`** folder.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-04-05-48-28.png)


### Background Image
Next, let's create a background image.

![20200604131141](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200604131141.png)

Go to https://www.canva.com/ to create an account.

Then, as in the following GIF
- Create a design for "Presentation".

![](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603_235735.gif)


Next,

- **Search for "blue and white startup business animated presentation"** and press Enter.
- Select one of the slides in it as shown in below GIF.

![](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200601_115813.gif)


Next, edit the color of the element to `#00B0FF`, as in the following gif.
![](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200601_120145.gif)


Finally, download the created image in `.png` format.
![](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200601_120321.gif)


When the download is completed, move the file to the `img` folder and rename it `jumbotron-bg.png`.

![20200601130307](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200601130307.png)

## Change background color
Add the `bg-white` class to change the background color of the jumbotron.
```html
<!-- highlight-next-line -->
<div class="jumbotron bg-white">
```

## Divide jumbotron into 50-50
Let's divide the contents of the Jumbotron into 50-50 as follows **for desktop**.

```html
<div class="container">
  <div class="row">
    <div class="col-lg-6">
      <!-- Hello World here... -->
    </div>
    <div class="col-lg-6">
      <!-- Image here... -->
    </div>
  </div>
</div>
```

Copy and paste the existing code of `Hello World` to the left and add `img` to the right.

The code looks like this.

```html
<div class="jumbotron bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <!-- highlight-start -->
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space
          content out within the larger container.
        </p>
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
        <!-- highlight-end -->
      </div>
      <div class="col-lg-6">
        <!-- highlight-start -->
        <img
          src="img/undraw_static_assets_rpm6.svg"
          alt="jumbotron-image"
          class="img-fluid"
        />
        <!-- highlight-end -->
      </div>
    </div>
  </div>
</div>
```
![20200604003421](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200604003421.png)

Using `img-fluid` class so that the image fits into the parent element.: https://getbootstrap.com/docs/4.5/content/images/#responsive-images

## Edit Slogan
Let's change the slogan from "Hello World!" to "Learn web development". And add `font-weight-bold`.
```html
<!-- highlight-next-line -->
<h1 class="display-4 font-weight-bold">
  <!-- highlight-next-line -->
  Learn web development
</h1>
```

## Adding and editing buttons
Add a button and adjust it.
```html
<a class="btn btn-primary font-weight-bold" href="#" role="button">
  Get Started!
</a>
<a
  class="btn btn-dark font-weight-bold ml-3"
  href="#"
  role="button"
>
  Learn more
</a>
```

## height `calc`, `vh` and Flexbox
Adjust the `height` of the jumbotron using `calc` and `vh` to make the area of the jumbotron fill up the screen.

Also, use Flexbox to center the contents of the jumbotron.

```css title="css/custom.css"
/* || Jumbotron */
.jumbotron {
  /* highlight-start */
  height: calc(100vh - 57.69px);
  margin-bottom: 0;
  display: flex;
  align-items: center;
  /* highlight-end */
}
```

**`57.69px`** is the height of the navbar.
![20200604004055](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200604004055.png)

The `100vh` is the current screen size.
https://www.w3schools.com/cssref/css_units.asp

The height of the jumbotron is set to `height: calc(100vh - 57.69px);` to fill the screen with the navbar and the jumbotron.


## Background image
Let's apply a background image to the jumbotron area. To apply a background image, use `background-image` and adjust the size of the background image with `background-size`.
```css title="css/custom.css"
/* || Jumbotron */
.jumbotron {
  height: calc(100vh - 57.69px);
  margin-bottom: 0;
  display: flex;
  align-items: center;
  /* highlight-start */
  background-image: url(../img/jumbotron-bg.png);
  background-size: cover;
    /* highlight-end */
}
```

:::info
`../` represents **one level up**. One level above `custom.css` is the same level as `index.html`.
:::

Ref: https://stackoverflow.com/questions/4810927/how-to-go-up-a-level-in-the-src-path-of-a-url-in-html


## Fixes for responsive
From here, let's adjust the layout for the mobile.

### jumbotron CSS
The CSS below is for **Desktop**, so let's enclose it with a media query.

```css title="css/custom.css"
/* highlight-next-line */
@media screen and (min-width: 992px) {
  .jumbotron {
    margin-bottom: 0;
    height: calc(100vh - 57.69px);
    display: flex;
    align-items: center;
    background-image: url(../img/jumbotron-bg.png);
    background-size: cover;
  }
}
```

For `992px`, please refer to the following link:

https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints

### Change the order of images and slogans with jumbotron
Use the `order-` class to change the order of images and slogans on mobile.
```html
<!-- highlight-next-line -->
<div class="col-lg-6 order-2 order-lg-1">
  ...
</div>
<!-- highlight-next-line -->
<div class="col-lg-6 order-1 order-lg-2">
  ...
</div>
```


| Before                                                                                              | After                                                                                               |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| ![20200604011205](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200604011205.png) | ![20200604011138](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200604011138.png) |


Ref: https://getbootstrap.com/docs/4.5/utilities/flex/#order

### Slogans for mobile
Adjust the slogan for mobile.

```css
@media screen and (max-width: 575.98px) {
  .jumbotron h1 {
    text-align: center;
    font-size: 2.3rem;
    margin-top: 2rem;
  }
}
```
For `575.98px`, please refer to the following link:
https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints

You can specify `h1` in `.jumbotron` by writing `.jumbotron h1`.

https://www.w3schools.com/css/css_combinators.asp


### Button Link
Let's change the button layout for mobile.

We used `d-flex`, `flex-column`, and `flex-lg-row` to change it according to the screen size.

```html
<div
  <!-- highlight-next-line -->
  class="d-flex flex-column flex-lg-row"
>
  <a
    <!-- highlight-next-line -->
    class="btn btn-primary font-weight-bold mb-3 mb-lg-0"
    href="#"
    role="button"
  >
    Get Started!
  </a>
  <a
    <!-- highlight-next-line -->
    class="btn btn-dark font-weight-bold ml-lg-3"
    href="#"
    role="button"
  >
    Learn more
  </a>
</div>
```

The button looks like this.

#### Desktop

For desktop, the button layout direction is `row` thanks to `flex-lg-row`.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-04-21-18-02.png)

#### Mobile and Tablet
For Mobile and Tablet, the button layout direction is `column` thanks to `flex-column`.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-04-21-18-50.png)

## Final Code
The final code looks like this.
```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/custom.css" />

    <title>Hello, world!</title>
  </head>
  <body>
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"
    >
      <a class="navbar-brand" href="#">
        <img
          src="img/logo.png"
          alt="logo"
          width="30"
          height="30"
          class="d-inline-block align-top"
          loading="lazy"
        />
        <span class="font-weight-bold">Logo</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-lg-4">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item mr-lg-4">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item mr-lg-4">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item mr-lg-4">
            <a class="nav-link" href="#">Login</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-warning font-weight-bold px-3 py-2" href="#">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Jumbotron -->
    <div class="jumbotron bg-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
            <h1 class="display-4 font-weight-bold">
              Learn web development
            </h1>
            <p class="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr class="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <div class="d-flex flex-column flex-lg-row">
              <a
                class="btn btn-primary font-weight-bold mb-3 mb-lg-0"
                href="#"
                role="button"
              >
                Get Started!
              </a>
              <a
                class="btn btn-dark font-weight-bold ml-lg-3"
                href="#"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2">
            <img
              src="img/undraw_static_assets_rpm6.svg"
              alt="jumbotron-image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
      crossorigin="anonymous"
    ></script>

    <!-- Custom Javascript -->
    <script src="js/custom.js"></script>
  </body>
</html>
```

```css title="css/custom.css"
body {
  font-family: "Poppins", sans-serif;
}

/* || Navbar */
.nav-item {
  font-weight: 500;
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.9);
}

/* || Jumbotron */
@media screen and (min-width: 992px) {
  .jumbotron {
    margin-bottom: 0;
    height: calc(100vh - 57.69px);
    display: flex;
    align-items: center;
    background-image: url(../img/jumbotron-bg.png);
    background-size: cover;
  }
}

@media screen and (max-width: 575.98px) {
  .jumbotron h1 {
    text-align: center;
    font-size: 2.3rem;
    margin-top: 2rem;
  }
}
```