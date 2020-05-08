---
title: More detail of col
---

## Goal
- ⚡ Learn `col-` in detail


## Understand `col-`
Let's consider more real use case and understand **`col-`**

:::info Real use case
- Laptop => 6 columns
- iPad => 3 columns
- mobile => 1 column
:::

## Prepare 6 col
Replace existing `col-sm` in `bootstrap-test1.html` with 6 `col`
```html
<div class="col">
  <div class="card" style="width: 100%;">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tortoiseshell_she-cat.JPG/640px-Tortoiseshell_she-cat.JPG"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```
So, the code becomes...

### Current code
```html title="bootstrap-test1.html"
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <title>Hello, world!</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
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
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>

  <!-- highlight-start -->
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 100%;">
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg"
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 100%;">
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg"
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 100%;">
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg"
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 100%;">
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg"
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 100%;">
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg"
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style="width: 100%;">
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg"
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- highlight-end -->

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>

</html>
```

### Check the current output
Only using **`col-`** doesn't satisfy the specification

:::info specification
- Laptop => 6 columns
- iPad => 3 columns
- mobile => 1 column
:::

![bootstrap-grid-system-various-device-chrome-devtool](../../img/20200509_020555.gif)


## Mobile
So, let's start from mobile layout.

:::info Specification
- ⬜ Laptop => 6 columns
- ⬜ iPad => 3 columns
- <mark>⬜ mobile => 1 column</mark>
:::

### Check device width
You see **"Pixel 2"** viewport width is **411**px

![](../../img/2020-05-09-05-02-15.png)

### Check grid options tables
Then, check this link https://getbootstrap.com/docs/4.3/layout/grid/#grid-options

![bootstrap-grid-options](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/bootstrap-grid-options-mobile_LI%20(2).jpg)

:::tip
- As shown above image, we should use `col-` for mobile layout (**411px** < 576px).
- We want mobile layout **1 column**, => use `col-12`
:::

I will explain why <mark>`col-12` for **1 column**</mark> after finishing iPad layout.

Change every `col` to `col-12`
```html
<!-- highlight-next-line -->
<div class="col-12">
  <div class="card" style="width: 100%;">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tortoiseshell_she-cat.JPG/640px-Tortoiseshell_she-cat.JPG"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

## iPad
:::info Specification
- ⬜ Laptop => 6 columns
- <mark>⬜ iPad => 3 columns</mark>
- ✅ mobile => 1 column
:::

### Check device width
![](../../img/2020-05-09-05-13-58.png)

### Grid options table
![](../../img/2020-05-09-05-15-12.png)

:::note
- So, we need to use `col-md`
- We want **3 columns** for iPad => `col-md-4`
:::


Add every `col-md-4` to every column.
```html
<!-- highlight-next-line -->
<div class="col-12 col-md-4">
  <div class="card" style="width: 100%;">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tortoiseshell_she-cat.JPG/640px-Tortoiseshell_she-cat.JPG"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

:::info
- So, the number like `col-12`, `col-*-4` is the **width of each column**.
- Max width is **`12`**.
- **`col-*-4`** and **`3 columns`** = **`12`**
- **`col-*-12`** and **`1 column`** = **`12`**
:::

## Laptop

:::info Specification
- <mark>⬜ Laptop => 6 columns</mark>
- ✅ iPad => 3 columns
- ✅ mobile => 1 column
:::

### Check device width

![](../../img/2020-05-09-05-18-52.png)

### Grid options table
![](../../img/2020-05-09-05-19-48.png)

But, `col-lg` also covers this device width.

And we use `col-xl` to change layout for large desktop like monitor.

So, `col-lg` is enough for normal desktop or laptop.

![](../../img/2020-05-09-05-24-13.png)
Ref: https://getbootstrap.com/docs/4.4/layout/overview/#responsive-breakpoints

:::note
- So, we use **`col-lg`** for desktop
- We want **6 columns** for desktop => **`col-lg-2`**
:::


Add every `col-lg-2` to every column.
```html
<!-- highlight-next-line -->
<div class="col-12 col-md-4 col-lg-2">
  <div class="card" style="width: 100%;">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Tortoiseshell_she-cat.JPG/640px-Tortoiseshell_she-cat.JPG"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up
        the bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

## Check the output
Confirm everything works well in Chrome DevTools here...

## So what is `col-sm` ?
`col-sm` is 
- Applied if device screen width **`≥576px`**
- **Automatically** layout as equal width columns.

https://getbootstrap.com/docs/4.4/layout/grid/#auto-layout-columns