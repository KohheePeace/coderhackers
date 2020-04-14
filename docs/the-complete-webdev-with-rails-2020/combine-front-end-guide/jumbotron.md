---
title: Jumbotron
---

In this chapter, we are going to implement jumbotron.

Copy code from
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

`index.html`
```html hl_lines="49 57"
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand font-weight-bold" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        <button class="btn btn-warning my-2 my-sm-0" type="submit">Sign Up</button>
      </div>
    </nav>
    <!-- # Navbar -->

    <!-- Jumbotron -->
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    <!-- # Jumbotron -->

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
```

### Change background color
```html
<div class="jumbotron bg-primary">
```

### Font bold
```html
<h1 class="display-4 font-weight-bold">Hello, world!</h1>
```

### Change button
```html
<a class="btn btn-warning btn-lg rounded-pill" href="#" role="button">Get Started</a>
```

### Separate 50% 50%
```html
<div class="row">
  <div class="col-md-6">
    <!-- Hello World here... -->
  </div>
  <div class="col-md-6">
    <!-- Image here... -->
  </div>
</div>
```

So the Jumbotron looks...

```html
<!-- Jumbotron -->
<div class="jumbotron bg-primary">
  <div class="row">
    <div class="col-md-6">
      <h1 class="display-4 font-weight-bold">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-warning btn-lg rounded-pill" href="#" role="button">Get Started</a>
    </div>
    <div class="col-md-6">
    </div>
  </div>
</div>
<!-- # Jumbotron -->
```

### Prepare Image
Make `img` folder

we are going to use this site

https://undraw.co

If you're interested in other resources...
https://dribbble.com/stories/2019/07/26/7-best-illustration-resources-for-your-web-design-projects

Search `status` and change color

https://undraw.co/search

![undraw-search-status-update.png](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/combine-front-end-guide/undraw-search-status-update.png)

Download **status update**
![download-status-update](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/combine-front-end-guide/download-status-update.png)


Move this file under `img` folder and rename it to `jumbotron.svg`
![move-status-update-and-rename](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/combine-front-end-guide/move-status-update-and-rename.png)

Add `img tag` to the right column of jumbotron
```html hl_lines="12"
<!-- Jumbotron -->
<div class="jumbotron bg-primary">
  <div class="row">
    <div class="col-md-6">
      <h1 class="display-4 font-weight-bold">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-warning btn-lg rounded-pill" href="#" role="button">Get Started</a>
    </div>
    <div class="col-md-6">
        <img src="img/jumbotron.svg" alt="jumbotron" class="img-fluid">
    </div>
  </div>
</div>
<!-- # Jumbotron -->
```

### Edit jumbotron style for mobile
Mobile jumbotron looks not good, so we'll fix this.
![edit-jumbotron-style-for-mobile](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/combine-front-end-guide/edit-jumbotron-style-for-mobile.png)
Add `mb-5` (marbin-bottom) for mobile style.

```html hl_lines="3"
<div class="jumbotron bg-primary">
  <div class="row">
    <div class="col-md-6 mb-5">
      <h1 class="display-4 font-weight-bold">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-warning btn-lg rounded-pill" href="#" role="button">Get Started</a>
    </div>
    <div class="col-md-6">
      <img src="img/jumbotron.svg" alt="jumbotron" class="img-fluid">
    </div>
  </div>
</div>
```

### Pro tip border-radius
```html hl_lines="4 5 6"
<!-- Jumbotron -->
<div
  class="jumbotron bg-primary"
  style="padding-bottom: 5rem;
    border-bottom-left-radius: 30% 10%;
    border-bottom-right-radius: 30% 10%;"
>
  <div class="row">
    <div class="col-md-6 mb-5">
      <h1 class="display-4 font-weight-bold">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-warning btn-lg rounded-pill" href="#" role="button">Get Started</a>
    </div>
    <div class="col-md-6">
      <img src="img/jumbotron.svg" alt="jumbotron" class="img-fluid">
    </div>
  </div>
</div>
<!-- # Jumbotron -->
```



![pro-tip-jumbotron.png](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/combine-front-end-guide/pro-tip-jumbotron.png)
