---
title: Complex CSS
---

## Goal
  - ⚡ Make a part of real website for reviewing what we've learned in CSS section.
  - 🔥 To know the pain point which is solved by using Bootstrap

## Task
We're going to make **a part of** real world website.
#### Desktop
![complex-css-demo](../../img/2020-05-16-05-24-34.png)

#### Mobile
![complex-css-responsive](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-29-19-06-29.png)


## Preparation

Okay let's start!

Make **`complex-css-example.html`** and **`complex-css-example.css`** in `css-test` folder.


## Final code
```html title="complex-css-example.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- highlight-start -->
    <!-- Custom CSS -->
    <link rel="stylesheet" href="complex-css-example.css" />
    <!-- highlight-end -->
  </head>
  <body>
    <!-- highlight-start -->
    <!-- navbar -->
    <nav class="navbar">
      <a href="#" class="logo">Logo</a>
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
      <a class="sign-up-button" href="#">Sign Up</a>
    </nav>
    <!-- END navbar -->
    <!-- highlight-end -->

    <!-- highlight-start -->
    <!-- jumbotron -->
    <div class="jumbotron">
      <h1>We provide solutions for your business</h1>
      <p>
        And an even wittier subheading to boot. Jumpstart your marketing efforts
        with this example based on Apple’s marketing pages.
      </p>
      <a class="get-started-button" href="#">Get started</a>
    </div>
    <!-- END jumbotron -->
    <!-- highlight-end -->
  </body>
</html>
```

```css title="complex-css-example.css"
/* || General */
body {
  margin: 0;
}

ul {
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  padding-left: 0;
}

/* || Navbar */
.navbar {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #dddddd;
}

.logo {
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
}

.navbar-list {
  display: flex;
  margin-left: auto;
}

/* Responsive CSS to hide navbar-list for mobile */
@media screen and (max-width: 767.98px) {
  .navbar-list {
    display: none;
  }
}

.navbar-list-item {
  padding-right: 8px;
  padding-left: 8px;
}

.navbar-list-item-link {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-list-item-link:hover {
  color: rgba(0, 0, 0, 0.9);
}

.sign-up-button {
  color: #ffffff;
  background-color: #007bff;
  border-color: #007bff;
  margin-left: 16px;
  padding: 6px 12px;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;
}

/* Responsive CSS for mobile */
@media screen and (max-width: 767.98px) {
  .sign-up-button {
    margin-left: auto;
  }
}

/* || Section Jumbotron */
.jumbotron {
  background: aliceblue;
  text-align: center;
  padding: 32px 48px 96px;
}

/* CSS for child of .jumbotron */
.jumbotron > h1 {
  font-weight: bold;
}

.jumbotron > p {
  margin-bottom: 32px;
}

.get-started-button {
  background-color: #007bff;
  border-color: #007bff;
  color: #ffffff;
  font-weight: bold;
  padding: 10px 32px;
  border-radius: 50px;
  text-decoration: none;
}
```

## What is pain point ?

:::important Pain Point 😭
  - Troublesome to write a lot of CSS
  - You need to get familiar with CSS
:::

By using **Bootstrap**, these problems will be solved!


## Refs
- CSS comment: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing
- `CSS element>element Selector`: https://www.w3schools.com/cssref/sel_element_gt.asp