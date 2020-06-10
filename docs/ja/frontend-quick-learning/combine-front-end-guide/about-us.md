---
title: About Us Section
---

## Goal
- ⚡ In this step, we're going to create an **About Us section**.

![20200601231957](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200601231957.png)

## Prepare images
First, prepare the images for the About Us section.

Go to https://undraw.co/search and set the color `#00B0FF`.

Next, download the five images by searching for the following words and move the downloaded files to the `img` folder.

| Search Word       |
| ----------------- |
| mobile wireframe  |
| breakfast         |
| personal notebook |
| Cautious dog      |
| Modern woman      |

![20200602122620](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200602122620.png)

***Note**: This includes images for use in the next step.

## Boilerplate
Next, copy and paste the following code below the jumbotron.

```html title="index.html"
<!-- About Us -->
<section id="about-us">
  <div class="container">
    <div class="section-header">
      <h1>About Us</h1>
      <p>
        Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore.
      </p>
    </div>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
    </div>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
    </div>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
    </div>
  </div>
</section>
```


## Add padding to this section
Let's add a `padding-top` to this About Us section.

```css
/* || About Us */
#about-us {
  padding-top: 5rem;
}
```

## Section header
Let's edit the section headers. Add `text-center`, `display-5 mb-4` Bootstrap class to the section header as follows.

```html
<!-- highlight-next-line -->
<div class="section-header text-center">
  <!-- highlight-next-line -->
  <h1 class="display-5 mb-4">About Us</h1>
  <p>
    Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore.
  </p>
</div>
```

Also add the following custom CSS.

```css title="css/custom.css"
/* highlight-start */
#about-us .section-header {
  margin-bottom: 5rem;
}

@media screen and (min-width: 992px) {
  #about-us .section-header p {
    max-width: 50%;
    margin: 0 auto;
  }
}
/* highlight-end */
```

On the desktop, set the `max-width` of the `p` tag in the section header to 50%.

Also, it is centered with `margin: 0 auto;`.

## Each Row
Let's edit each Row.

### Row 1
![20200602122727](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200602122727.png)

Add code as follows.

```html
<div class="row">
  <div class="col-md-6">
    <!-- highlight-start -->
    <img
      src="img/undraw_mobile_wireframe_euf4.svg"
      class="img-fluid"
      alt=""
    />
    <!-- highlight-end -->
  </div>

  <div
    <!-- highlight-next-line -->
    class="col-md-6 d-flex flex-column justify-content-center"
  > 
    <!-- highlight-start -->
    <h3 class="mb-4">Easy to customize</h3>
    <p>
      One pacifice typi tot hic successum sed nulla id orci pulvinar non
      modo in minim, rem, eos quam unde germania. Quo cum per turpis
      sanguinis nunc nicolae peccat.
    </p>
    <a href="#" class="font-weight-bold"
      >See ways how to customize
      <i class="ml-1 fas fa-arrow-right" aria-hidden="true"></i>
    </a>
    <!-- highlight-end -->
  </div>
</div>
```

The image is placed on the left side and the right side uses `d-flex flex-column justify-content-center` so that the text is centered vertically.

### Row 2
![20200605191057](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200605191057.png)
```html
<div class="row">
  <!-- highlight-next-line -->
  <div class="col-md-6 order-md-2 mb-2">
    <!-- highlight-next-line -->
    <img src="img/undraw_breakfast_psiw.svg" class="img-fluid" alt="" />
  </div>

  <div
    <!-- highlight-next-line -->
    class="col-md-6 order-md-1 d-flex flex-column justify-content-center"
  >
    <!-- highlight-start -->
    <h3 class="mb-4">Easy to make</h3>
    <p>
      One pacifice typi tot hic successum sed nulla id orci pulvinar non
      modo in minim, rem, eos quam unde germania. Quo cum per turpis
      sanguinis nunc nicolae peccat.
    </p>
    <a href="#" class="font-weight-bold">
      See ways how to make
      <i class="ml-1 fas fa-arrow-right" aria-hidden="true"></i>
    </a>
    <!-- highlight-end -->
  </div>
</div>
```

Using `order-md-*` changes the order of images on devices larger than a tablet and on mobile.


| Tablet and above                                                                                    | Mobile                                                                                              |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| ![20200602123637](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200602123637.png) | ![20200602124842](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200602124842.png) |



### Row 3
![20200605191125](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200605191125.png)

This is almost the same code as `row 1`.

```html
<div class="row">
  <div class="col-md-6">
    <img
      src="img/undraw_personal_notebook_sobb.svg"
      class="img-fluid"
      alt=""
    />
  </div>

  <div class="col-md-6 d-flex flex-column justify-content-center">
    <h3 class="mb-4">Easy to memorize</h3>
    <p>
      One pacifice typi tot hic successum sed nulla id orci pulvinar non
      modo in minim, rem, eos quam unde germania. Quo cum per turpis
      sanguinis nunc nicolae peccat.
    </p>
    <a href="#" class="font-weight-bold">
      See ways how to memorize
      <i class="ml-1 fas fa-arrow-right" aria-hidden="true"></i>
    </a>
  </div>
</div>
```

## margin and padding for each rows

Let's adjust the margin and padding of each row.

```css title="css/custom.css"
#about-us .row {
  margin-bottom: 10rem;
  padding: 0 1.25rem;
}
```


## Final Code
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

    <!-- Font Awesome -->
    <script
      src="https://kit.fontawesome.com/6284da3ffd.js"
      crossorigin="anonymous"
    ></script>

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
            <h1 class="display-4 font-weight-bold">Learn web development</h1>
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
                <i class="fas fa-arrow-alt-circle-right ml-2"></i>
              </a>
              <a
                class="btn btn-dark font-weight-bold ml-lg-3"
                href="#"
                role="button"
              >
                Learn more
                <i class="fas fa-arrow-alt-circle-right ml-2"></i>
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

    <!-- About Us -->
    <section id="about-us">
      <div class="container">
        <div class="section-header text-center">
          <h1 class="display-5 mb-4">About Us</h1>
          <p>
            Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img
              src="img/undraw_mobile_wireframe_euf4.svg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="col-md-6 d-flex flex-column justify-content-center">
            <h3 class="mb-4">Easy to customize</h3>
            <p>
              One pacifice typi tot hic successum sed nulla id orci pulvinar non
              modo in minim, rem, eos quam unde germania. Quo cum per turpis
              sanguinis nunc nicolae peccat.
            </p>
            <a href="#" class="font-weight-bold"
              >See ways how to customize
              <i class="ml-1 fas fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 order-md-2 mb-2">
            <img src="img/undraw_breakfast_psiw.svg" class="img-fluid" alt="" />
          </div>
          <div
            class="col-md-6 order-md-1 d-flex flex-column justify-content-center"
          >
            <h3 class="mb-4">Easy to make</h3>
            <p>
              One pacifice typi tot hic successum sed nulla id orci pulvinar non
              modo in minim, rem, eos quam unde germania. Quo cum per turpis
              sanguinis nunc nicolae peccat.
            </p>
            <a href="#" class="font-weight-bold">
              See ways how to make
              <i class="ml-1 fas fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img
              src="img/undraw_personal_notebook_sobb.svg"
              class="img-fluid"
              alt=""
            />
          </div>

          <div class="col-md-6 d-flex flex-column justify-content-center">
            <h3 class="mb-4">Easy to memorize</h3>
            <p>
              One pacifice typi tot hic successum sed nulla id orci pulvinar non
              modo in minim, rem, eos quam unde germania. Quo cum per turpis
              sanguinis nunc nicolae peccat.
            </p>
            <a href="#" class="font-weight-bold">
              See ways how to memorize
              <i class="ml-1 fas fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

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
    height: calc(100vh - 57.69px);
    margin-bottom: 0;
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

/* || About Us */
#about-us {
  padding-top: 5rem;
}

#about-us .section-header {
  margin-bottom: 5rem;
}

@media screen and (min-width: 992px) {
  #about-us .section-header p {
    max-width: 50%;
    margin: 0 auto;
  }
}

#about-us .row {
  margin-bottom: 10rem;
  padding: 0 1.25rem;
}
```