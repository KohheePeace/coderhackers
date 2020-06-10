---
title: Complex CSS
---

## Goal
  - ⚡ Copy the code of a part of real website for recapping what we've learned in CSS section.
  - 🔥 To know the pain point which is solved by using Bootstrap

## Website to make

https://complex-css.now.sh/

#### Desktop
![](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-16-15-30-25.png)

#### Mobile
![](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/2020-05-16-15-30-48.png)



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
    <link rel="stylesheet" href="complex-css-example.css" />
    <!-- highlight-end -->
  </head>
  <body>
    <!-- highlight-start -->
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
    <!-- highlight-end -->

    <!-- highlight-start -->
    <div class="jumbotron">
      <h1>We provide solutions for your business</h1>
      <p>
        And an even wittier subheading to boot. Jumpstart your marketing efforts
        with this example based on Apple’s marketing pages.
      </p>
      <a class="get-started-button" href="#">Get started</a>
    </div>
    <!-- highlight-end -->
  </body>
</html>
```

```css title="complex-css-example.css"
body {
  margin: 0;
}

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
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  padding-left: 0;
}

/* when viewport is 767px or narrower */
@media screen and (max-width: 767px) {
  .navbar-list {
    display: none;
  }
}

.navbar-list-item {
  margin-right: 16px;
}

.navbar-list-item-link {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-list-item-link:hover {
  color: rgba(0, 0, 0, 1);
}

.sign-up-button {
  color: #ffffff;
  background-color: #007bff;
  margin-left: 16px;
  padding: 6px 12px;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;
}

/* when viewport is 767px or narrower */
@media screen and (max-width: 767px) {
  .sign-up-button {
    margin-left: auto;
  }
}

.jumbotron {
  background: aliceblue;
  text-align: center;
  padding: 32px 48px 96px;
}

.jumbotron-title {
  font-weight: bold;
}

.jumbotron-subtitle {
  margin-bottom: 32px;
}

.get-started-button {
  background-color: #007bff;
  color: #ffffff;
  font-weight: bold;
  padding: 10px 32px;
  border-radius: 50px;
  text-decoration: none;
}
```

## What is a pain point ?

:::important Pain Point 😭
  - Troublesome to write a lot of CSS
  - You need to get familiar with CSS
:::

By using **Bootstrap**, these problems will be solved!