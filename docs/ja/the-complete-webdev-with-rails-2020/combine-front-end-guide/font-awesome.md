---
title: Font Awesome
---

## ゴール
- ⚡ このステップではFont Awesomeを使用したiconの追加方法を学んでいきましょう!
- 👇 以下の画像のようなアイコンを追加します。

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-05-00-04-44.png)

## Font Awesome とは?
![20200605163710](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200605163710.png)
Font Awesomeはwebで最も人気なアイコンのツールキットです。
**Font Awesomeを使えば、クールなアイコンを簡単に追加できます。**


## インストール
では、早速Font Awesomeをインストールしていきましょう。

まず、Font Awesomeのウェブサイトにメールアドレスを入力して登録・サインインしてください。
https://fontawesome.com/

サインインができたら、以下のGIFの様に**Kit Code**をコピーします。
![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200504_234358.gif)

次に、`index.html`の`<head>` tagの中にコピーしたKit Codeを貼り付けましょう。
```html title="index.html"
<head>
  ...
<!-- highlight-start -->
<!-- Font Awesome -->
<script
  src="https://kit.fontawesome.com/476ef21ecf.js"
  crossorigin="anonymous"
></script>
<!-- highlight-end -->

<!-- Google Fonts -->
...
</head>
```

これで、Font Awesomeが使えるようになりました。

## Iconの追加の仕方
では、実際にアイコンを追加してみましょう。
- Iconsページに飛んでhttps://fontawesome.com/icons?d=gallery
- `arrow right`と検索
- 検索結果の中から使用するiconを選択
- iconコードをコピー

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200504_235918.gif)

次に、以下のようにコピーしたコードを`index.html`にペーストしましょう。

```html title="index.html"
<a
  class="btn btn-primary font-weight-bold mb-3 mb-lg-0"
  href="#"
  role="button"
>
  Get Started!
  <!-- highlight-next-line -->
  <i class="fas fa-arrow-alt-circle-right"></i>
</a>
<a
  class="btn btn-dark font-weight-bold ml-lg-3"
  href="#"
  role="button"
>
  Learn more
  <!-- highlight-next-line -->
  <i class="fas fa-arrow-alt-circle-right"></i>
</a>
```

![20200605173330](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200605173330.png)

以下のコードを貼り付けるだけでアイコンが追加できます。
```html
<i class="fas fa-arrow-alt-circle-right"></i>
```

## `margin-left`を追加する
両方のアイコンに`ml-2`を追加してマージンを調整しましょう。
```html
<i class="fas fa-arrow-alt-circle-right ml-2"></i>
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