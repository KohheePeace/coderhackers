---
title: How it works section
---

## Goal
- ⚡ Make "How it works" section

## Boilerplate
```html
<!-- How it works -->
<section id="how-it-works">
  <div class="container">
    <div class="section-header text-center">
      <h1 class="display-5 mb-4">How it works</h1>
      <p>
        Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore.
      </p>
    </div>
  </div>
</section>
<!-- # How it works -->
```

## Section css
```css title="css/custom.css"
/* How it works
------------------- */
#how-it-works {
  padding: 5rem 0;
  background-color: #ecf5ff;
}
```

## Section Header
This is same code with "about us" section.

```css title="css/custom.css"
#how-it-works .section-header {
  margin-bottom: 5rem;
}

@media screen and (min-width: 769px) {
  #how-it-works .section-header p {
    max-width: 50%;
    margin: 0 auto;
  }
}
```

## Prepare row and column

```html
<div class="row">
  <div class="col-lg-4">
  </div>
  <div class="col-lg-4">
  </div>
  <div class="col-lg-4">
  </div>
</div>
```

## column 1
```html
<div class="col-lg-4">
  <div class="text-center">
    <img
      src="img/undraw_breakfast_psiw.svg"
      style="width: 200px; height: 140px;"
      alt=""
    />
  </div>
  <div class="p-3">
    <h5>
      <div
        style="width: 22px;"
        class="badge badge-primary align-top mr-2"
      >
        1
      </div>
      Make breakfast
    </h5>
    <p>
      Cum similitudinem vero te nisi fructum sem duis Desideriis's
      quis similitudinem quos. Earum class metus iis duis,
      recordatione crudelitas illa.
    </p>
  </div>
</div>
```
### Bootstrap refs
- `text-center`: https://getbootstrap.com/docs/4.4/utilities/text/#text-alignment
- `badge badge-primary`: https://getbootstrap.com/docs/4.4/components/badge/
- `align-top`: https://getbootstrap.com/docs/4.4/utilities/vertical-align/


Then, just copy and paste this to make 2, 3 column.

## Responsive margin
```html
<div class="col-lg-4 mb-5 mb-lg-0">
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
      src="https://kit.fontawesome.com/476ef21ecf.js"
      crossorigin="anonymous"
    ></script>

    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="d-block mx-auto"
        role="img"
        viewBox="0 0 24 24"
        focusable="false"
      >
        <title>Product</title>
        <circle cx="12" cy="12" r="10"></circle>
        <path
          d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
        ></path>
      </svg>
      <a class="navbar-brand font-weight-bold ml-2" href="#">Logo</a>
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
          <li class="nav-item mr-lg-4">
            <a class="btn btn-warning font-weight-bold px-3 py-2" href="#"
              >Sign up</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- # Navbar -->

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
            <div
              class="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start"
            >
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
    <!-- # Jumbotron -->

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
            <a href="#" class="font-weight-bold">
              See ways how to customize
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
    <!-- # About Us -->

    <!-- highlight-start -->
    <!-- How it works -->
    <section id="how-it-works">
      <div class="container">
        <div class="section-header text-center">
          <h1 class="display-5 mb-4">How it works</h1>
          <p>
            Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="text-center">
              <img
                src="img/undraw_breakfast_psiw.svg"
                style="width: 200px; height: 140px;"
                alt=""
              />
            </div>
            <div class="p-3">
              <h5>
                <div
                  style="width: 22px;"
                  class="badge badge-primary align-top mr-2"
                >
                  1
                </div>
                Make breakfast
              </h5>
              <p>
                Cum similitudinem vero te nisi fructum sem duis Desideriis's
                quis similitudinem quos. Earum class metus iis duis,
                recordatione crudelitas illa.
              </p>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="text-center">
              <img
                src="img/undraw_Cautious_dog_q83f.svg"
                style="width: 200px; height: 140px;"
                alt=""
              />
            </div>
            <div class="p-3">
              <h5>
                <div
                  style="width: 22px;"
                  class="badge badge-primary align-top mr-2"
                >
                  2
                </div>
                Feeding
              </h5>
              <p>
                Cum similitudinem vero te nisi fructum sem duis Desideriis's
                quis similitudinem quos. Earum class metus iis duis,
                recordatione crudelitas illa.
              </p>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="text-center">
              <img
                src="img/undraw_Modern_woman_lxh7.svg"
                style="width: 200px; height: 140px;"
                alt=""
              />
            </div>
            <div class="p-3">
              <h5>
                <div
                  style="width: 22px;"
                  class="badge badge-primary align-top mr-2"
                >
                  3
                </div>
                Dog walking
              </h5>
              <p>
                Cum similitudinem vero te nisi fructum sem duis Desideriis's
                quis similitudinem quos. Earum class metus iis duis,
                recordatione crudelitas illa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- # How it works -->
    <!-- highlight-end -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
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

/* Navbar
------------------- */
.nav-item {
  font-weight: 500;
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.9);
}

/* Jumbotron
------------------- */
@media screen and (min-width: 769px) {
  .jumbotron {
    background: url(https://storage.googleapis.com/coderhackers-assets/docs/img/jumbotron-bg.png);
    background-size: cover;
    margin-bottom: 0;
    height: calc(100vh - 57.69px);
    display: flex;
    align-items: center;
  }
}

@media screen and (max-width: 575.98px) {
  .jumbotron h1 {
    text-align: center;
    font-size: 2.3rem;
  }
}

/* About Us
------------------- */
#about-us {
  padding-top: 5rem;
}

#about-us .section-header {
  margin-bottom: 5rem;
}

@media screen and (min-width: 769px) {
  #about-us .section-header p {
    max-width: 50%;
    margin: 0 auto;
  }
}

#about-us .row {
  margin-bottom: 10rem;
  padding: 0 1.25rem;
}

/* highlight-start */
/* How it works
------------------- */
#how-it-works {
  padding: 5rem 0;
  background-color: #ecf5ff;
}

#how-it-works .section-header {
  margin-bottom: 5rem;
}

@media screen and (min-width: 769px) {
  #how-it-works .section-header p {
    max-width: 50%;
    margin: 0 auto;
  }
}
/* highlight-end */
```