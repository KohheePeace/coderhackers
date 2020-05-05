---
title: Jumbotron
---

## Goal
- ⚡ Make Jumbotron section

![](../../img/2020-05-04-05-42-31.png)

## Copy code from
https://getbootstrap.com/docs/4.3/components/jumbotron/

```html
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
```

Then, paste it to the `index.html`

```html title="index.html"
...
<!-- # Navbar -->

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
<!-- # Jumbotron -->
<!-- highlight-end -->

<!-- Optional JavaScript -->
...
```

## Prepare Image

### Main image

- Go to https://undraw.co/illustrations
- Then, change color `"#00B0FF"`
- Search **"static assets"**
- Download svg
- Move download file to **`img`** folder

![](../../img/2020-05-04-05-48-28.png)


### Background image
Go to https://www.canva.com/

Then create "Presentation"
![](../../img/20200504_055222.gif)

Then

![](../../img/20200504_212238.gif)

- Make jumbotron background image
- Download file as **`.png`**
- Move under `img` folder

## Change background color
```html
<div class="jumbotron bg-white">
```

## Separate 50:50
Separate jumbotron 50:50 whe

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

So the Jumbotron looks...

```html
<div class="jumbotron bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
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
        <a class="btn btn-primary btn-lg" href="#" role="button"
          >Learn more</a
        >
      </div>
      <div class="col-lg-6">
        <img
          src="img/undraw_static_assets_rpm6.svg"
          alt="jumbotron-image"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</div>
```

## Change Slogan and make bold
```html
<h1 class="display-4 font-weight-bold">
  Learn web development
</h1>
```

## Add and Edit Button
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

## Background image
```css title="css/custom.css"
/* Jumbotron
------------------- */
.jumbotron {
  background: url(../img/jumbotron-bg.png);
  background-size: cover;
}
```


`../` is one level up.


Ref: https://stackoverflow.com/questions/4810927/how-to-go-up-a-level-in-the-src-path-of-a-url-in-html


## Jumbotron height `vh`

```css title="css/custom.css"
/* Jumbotron
------------------- */
.jumbotron {
  background: url(../img/jumbotron-bg.png);
  background-size: cover;
  /* highlight-start */
  margin-bottom: 0;
  height: calc(100vh - 57.69px);
  display: flex;
  align-items: center;
  /* highlight-end */
}
```

**`57.69px`** is navbar height.
![](../../img/2020-05-04-07-51-28.png)

- To fit jumbotron perfectly, I use `vh`.
- By using Flexbox, centerize jumbotron content

---

> **`vh`**:	Relative to 1% of the height of the viewport*

:::info
  > * Viewport = the **browser window size**. If the viewport is 50cm wide, 1vw = 0.5cm.
:::


https://www.w3schools.com/cssref/css_units.asp


## Responsive
From, here let's fix for responsive

### Background image responsive
This css is only for laptop.

So add media query.

```css title="css/custom.css"
@media screen and (min-width: 769px) {
  .jumbotron {
    background: url(../img/jumbotron-bg.png);
    background-size: cover;
    margin-bottom: 0;
    height: calc(100vh - 57.69px);
    display: flex;
    align-items: center;
  }
}
```

### Change jumbotron image and slogan order
```html
<div class="col-lg-6 order-2 order-lg-1">
  ...
</div>
<div class="col-lg-6 order-1 order-lg-2">
  ...
</div>
```

Flex Order: https://getbootstrap.com/docs/4.4/utilities/flex/#order

### Slogan for mobile
```css
@media screen and (max-width: 575.98px) {
  .jumbotron h1 {
    text-align: center;
    font-size: 2.3rem;
  }
}
```
`575.98px` is coming from this link:
https://getbootstrap.com/docs/4.4/layout/overview/#responsive-breakpoints

### Wrap button link with `d-flex`

```html
<div
  <!-- highlight-next-line -->
  class="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start"
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

This code is for changing the layout of buttons

#### Desktop
![](../../img/2020-05-04-21-18-02.png)

#### Mobile
![](../../img/2020-05-04-21-18-50.png)

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
    <!-- # Jumbotron -->

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
    background: url(../img/jumbotron-bg.png);
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
```