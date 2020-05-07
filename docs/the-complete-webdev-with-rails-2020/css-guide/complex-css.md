---
title: Complex CSS
---

## Goal
  - ⚡ Make a part of real website for recapping what we've learned

## What we will make

A part of real world website.

#### Desktop
![complex-css-demo](../../img/2020-04-29-19-06-52.png)


#### Mobile
![complex-css-responsive](../../img/2020-04-29-19-06-29.png)


:::caution
- You don't need to understand the code in this chapter now. **Just looking or copying is enough**.
- The purpose of this chapter is understanding **why Bootstrap is useful**.
:::

## Write HTML and CSS

Okay let's start!

Make **`complex-css-test.html`** and **`complex-css-test.css`** in `css-test` folder.

Writing HTML and CSS manually from here in video...

## Final code
```html title="complex-css-test.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="complex-css-test.css" />
  </head>
  <body>
    <!-- navbar -->
    <nav class="navbar">
      <a href="#">Logo</a>
      <ul class="navbar-list">
        <li class="navbar-list-item">
          <a class="navbar-list-item-link" href="#">Features</a>
        </li>
        <li class="navbar-list-item">
          <a class="navbar-list-item-link" href="#">Pricing</a>
        </li>
        <li class="navbar-list-item">
          <a class="navbar-list-item-link" href="#">About</a>
        </li>
        <li class="navbar-list-item">
          <a class="navbar-list-item-link" href="#">Team</a>
        </li>
        <li class="navbar-list-item">
          <a class="navbar-list-item-link" href="#">Contact</a>
        </li>
      </ul>
      <button class="sign-up-button">Sign Up</button>
    </nav>
    <!-- #End navbar -->

    <!-- jumbotron -->
    <div class="jumbotron">
      <h1>We provide solutions for your business</h1>
      <p>
        And an even wittier subheading to boot. Jumpstart your marketing efforts
        with this example based on Apple’s marketing pages.
      </p>
      <a class="get-started-button" href="#">Get started</a>
    </div>
    <!-- #End jumbotron -->
  </body>
</html>
```

```css title="complex-css-test.css"
/* General
------------------- */
body {
  margin: 0;
}

ul {
  margin-top: 0;
  margin-bottom: 0;
}

/* Navbar
-------------------- */
.navbar {
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #dddddd;
}

.logo {
  color: #007bff;
  font-weight: 800;
  text-decoration: none;
}

.navbar-list {
  margin-left: auto;
  display: flex;
  padding-left: 0;
  list-style: none;
}

/* Responsive CSS for hide navbar-list for mobile */
@media only screen and (max-width: 600px) {
  .navbar-list {
    display: none;
  }
}

.navbar-list-item {
  padding-right: 8px;
  padding-left: 8px;
}

.navbar-list-item-link {
  color: blue;
}

.sign-up-button {
  margin-left: 16px;
  padding: 6px 12px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  border: 1px solid transparent;
  font-weight: 400;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  border-radius: 4px;
}

@media only screen and (max-width: 600px) {
  .sign-up-button {
    margin-left: auto;
  }
}

/* Section Jumbotron
------------------- */
.jumbotron {
  text-align: center;
  background: aliceblue;
  padding: 32px 48px 96px;
}

/* CSS for child of jumbotron */
.jumbotron > h1 {
  font-weight: 800;
}

.jumbotron > p {
  margin-bottom: 32px;
}

.get-started-button {
  display: inline-block;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  font-weight: 800;
  text-align: center;
  padding: 10px 32px;
  border-radius: 50px;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
}
```

## Summery

:::important What you need to learn from this step
  1. You need to write a lot of CSS
  2. You need to get familiar with CSS
:::

By using **Bootstrap**, these problems are solved!