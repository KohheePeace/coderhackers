---
title: Flexbox Usecase - Navbar
---

## ゴール
- ⚡ Make navbar by using Flexbox

![navbar-flexbox-ゴール](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-29-06-45-20.png)


## Preparation

Please make `flexbox-navbar.html` in `css-test` folder.

## Add html code

```html title="flexbox-navbar.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- highlight-start -->
    <nav>
      <a href="#">Logo</a>
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button>Sign Up</button>
    </nav>
    <!-- highlight-end -->
  </body>
</html>
```

#### Check the current output
![html-only-navbar](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-29-05-06-10.png)

## Add class name
Add class name to add CSS
```html title="flexbox-navbar.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- highlight-next-line -->
    <nav class="navbar">
      <a href="#">Logo</a>
      <!-- highlight-start -->
      <ul class="navbar-list">
        <li class="navbar-list-item"><a href="#">Features</a></li>
        <li class="navbar-list-item"><a href="#">Pricing</a></li>
        <li class="navbar-list-item"><a href="#">About</a></li>
        <li class="navbar-list-item"><a href="#">Team</a></li>
        <li class="navbar-list-item"><a href="#">Contact</a></li>
      </ul>
      <!-- highlight-end -->
      <button>Sign Up</button>
    </nav>
  </body>
</html>
```

## Add style

### Step1 Disable browser default css
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* highlight-start */
      /* Disable Browser default style */
      body {
        margin: 0;
      }

      ul {
        margin-top: 0;
        margin-bottom: 0;
        list-style: none;
        padding-left: 0;
      }
      /* highlight-end */
    </style>
  </head>
  <body>
    <nav class="navbar">
      <a href="#">Logo</a>
      <ul class="navbar-list">
        <li class="navbar-list-item"><a href="#">Features</a></li>
        <li class="navbar-list-item"><a href="#">Pricing</a></li>
        <li class="navbar-list-item"><a href="#">About</a></li>
        <li class="navbar-list-item"><a href="#">Team</a></li>
        <li class="navbar-list-item"><a href="#">Contact</a></li>
      </ul>
      <button>Sign Up</button>
    </nav>
  </body>
</html>
```

### Step2 Use Flexbox
To align navbar item, let's use Flexbox!
```html title="flexbox-navbar.html"
<style>
  /* Disable Browser default style */
  body {
    margin: 0;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
  }

  /* Navbar style */
  .navbar {
    /* highlight-next-line */
    display: flex;
  }

  .navbar-list {
    /* highlight-next-line */
    display: flex;
  }
</style>
```

### Step3 Make navbar cool
```html
<style>
  /* Disable Browser default style */
  body {
    margin: 0;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
  }

  /* Navbar style */
  .navbar {
    display: flex;
    /* highlight-start */
    padding: 15px 30px;
    background: #d3d3d3;
    /* highlight-end */
  }

  .navbar-list {
    display: flex;
    /* highlight-next-line */
    margin-left: auto;
  }

  /* highlight-start */
  .navbar-list-item {
    margin-right: 15px;
  }
  /* highlight-end */
</style>
```

## Final Code
```html title="flexbox-navbar.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* Disable Browser default style */
      body {
        margin: 0;
      }

      ul {
        margin-top: 0;
        margin-bottom: 0;
        list-style: none;
        padding-left: 0;
      }

      /* Navbar style */
      .navbar {
        display: flex;
        padding: 15px 30px;
        background: #d3d3d3;
      }

      .navbar-list {
        display: flex;
        margin-left: auto;
      }

      .navbar-list-item {
        margin-right: 15px;
      }
    </style>
  </head>
  <body>
    <nav class="navbar">
      <a href="#">Logo</a>
      <ul class="navbar-list">
        <li class="navbar-list-item"><a href="#">Features</a></li>
        <li class="navbar-list-item"><a href="#">Pricing</a></li>
        <li class="navbar-list-item"><a href="#">About</a></li>
        <li class="navbar-list-item"><a href="#">Team</a></li>
        <li class="navbar-list-item"><a href="#">Contact</a></li>
      </ul>
      <button>Sign Up</button>
    </nav>
  </body>
</html>
```