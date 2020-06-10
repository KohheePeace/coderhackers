---
title: Navbar
---

## Goal
- ⚡ In this step we are going to create **Navbar**.

## Copy the code of `Navbar` component.
First, copy the code of the Navbar component from the link below.
https://getbootstrap.com/docs/4.5/components/navbar/

![copy-navbar](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/combine-front-end-guide/copy-navbar.gif)


Next, paste the copied code into `index.html`.

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
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
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
    <!-- highlight-start -->
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
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
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
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

## Organize the code of the Navbar
Now, let's remove the unnecessary code from the Navbar and add a `nav-item`.

The final code looks like this.
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
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
    <ul class="navbar-nav mr-auto">
      <!-- highlight-start -->
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
      <!-- highlight-end -->
    </ul>
  </div>
</nav>
```

If it looks like the following, you should be fine.
![20200530231534](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200530231534.png)

## Sign Up Button
Next, let's add a Sign Up button. Please copy and paste the code as follows.
```html
<li class="nav-item">
  <a class="nav-link" href="#">Login</a>
</li>
<!-- highlight-start -->
<li class="nav-item">
  <a class="btn btn-warning font-weight-bold px-3 py-2" href="#">
    Sign up
  </a>
</li>
<!-- highlight-end -->
```
### Bootstrap ref
The Bootstrap classes used here are the followings.
- `btn btn-warning` to add a button: https://getbootstrap.com/docs/4.5/components/buttons/#examples
- `font-weight-bold` to make the text bold: https://getbootstrap.com/docs/4.5/utilities/text/#font-weight-and-italics
- `px-3 py-2` to adjust padding: https://getbootstrap.com/docs/4.5/utilities/spacing/

The current output looks like this.
![20200530235220](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200530235220.png)


## Logo
So let's add logo next.

First, let's create a dummy logo on the following site.

https://favicon.io/favicon-generator/

Unzip the downloaded zip file and move `android-chrome-192x192.png` from it to the `img` folder.

Then rename it as `logo.png`.

![20200603203949](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603203949.png)


Load this `logo.png` inside `navbar-brand`.

```html
<a class="navbar-brand" href="#">
  <!-- highlight-start -->
  <img src="img/logo.png" alt="logo" />
  <!-- highlight-end -->
  Navbar
</a>
```

It looks like the following.
![20200603204838](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603204838.png)

However, the size of the logo is too large, so let's add attributes by referring to the following link.
https://getbootstrap.com/docs/4.5/components/navbar/#brand

```html
<a class="navbar-brand" href="#">
  <img
    src="img/logo.png"
    alt="logo"
    <!-- highlight-start -->
    class="d-inline-block align-top"
    width="30"
    height="30"
    loading="lazy"
    <!-- highlight-end -->
  />
  Navbar
</a>
```

It became just the right size logo, as shown below.
![20200603205543](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603205543.png)

### Logo title
Next, let's change the character from "Navbar" to "Logo", enclose it in `span` and add the Bootstrap class `font-weight-bold`.

```html
<a class="navbar-brand" href="#">
  ...
  <!-- highlight-next-line -->
  <span class="font-weight-bold">Logo</span>
</a>
```

It looks like the following.
![20200603205625](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603205625.png)

## Change the background color of Navbar
Let's change the background color of Navbar from `bg-light` to `bg-white` class as follows.
```html
<!-- highlight-next-line -->
<nav class="... bg-white">
```

It looks like the following.
![20200603205738](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603205738.png)

https://getbootstrap.com/docs/4.5/utilities/colors/#background-color

## Shadow
Add the class `shadow-sm` to add a shadow to the navbar to give it a three-dimensional effect.

```html
<nav class="... shadow-sm">
```

It looks like the following.
![20200603205801](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603205801.png)

https://getbootstrap.com/docs/4.5/utilities/shadows/

## Sticky navbar
Let's add a `sticky-top` class to make the navbar sticky.
```html
<nav class="... sticky-top">
```
https://getbootstrap.com/docs/4.5/utilities/position/#sticky-top

However, we can't see the difference of the `sticky-top` because there is no content currently and we can't scroll. So, check the following link.

https://getbootstrap.com/docs/4.5/examples/product/

If you add `sticky-top`, the navbar remains fixed on the top of screen.

## Adjusting Margin
Let's add `ml-auto` and `mr-lg-4` to adjust the margins.
```html
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <!-- highlight-next-line -->
  <ul class="navbar-nav ml-auto">
    <!-- highlight-next-line -->
    <li class="nav-item mr-lg-4">
      <a class="nav-link" href="#">Features</a>
    </li>
    <!-- highlight-next-line -->
    <li class="nav-item mr-lg-4">
      <a class="nav-link" href="#">Pricing</a>
    </li>
    <!-- highlight-next-line -->
    <li class="nav-item mr-lg-4">
      <a class="nav-link" href="#">About</a>
    </li>
    <!-- highlight-next-line -->
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
```

It looks like the following.
![20200603210020](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603210020.png)

## Adding Custom CSS
Please add the following CSS for minor visual adjustments.
```css title="css/custom.css"
...
/* highlight-start */
/* || Navbar */
.nav-item {
  font-weight: 500;
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.9);
}
/* highlight-end */
```

![20200603210348](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603210348.png)


## Final Code
The final code looks like this
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
    <!-- highlight-start -->
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"
    >
      <a class="navbar-brand" href="#">
        <img
          src="img/logo.png"
          alt="logo"
          class="align-top"
          width="30"
          height="30"
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
    <!-- highlight-end -->

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

```css title="custom.css"
body {
  font-family: "Poppins", sans-serif;
}

/* highlight-start */
/* || Navbar */
.nav-item {
  font-weight: 500;
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.9);
}
/* highlight-end */
```