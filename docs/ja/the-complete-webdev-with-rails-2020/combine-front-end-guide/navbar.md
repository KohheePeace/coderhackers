---
title: Navbar
---

## ゴール
- ⚡ このステップでは**Navbar**を作くっていきましょう.

## `Navbar`コンポーネントのコードをコピーする
まず以下のリンクからNavbarコンポーネントのコードをコピーしてください。
https://getbootstrap.com/docs/4.5/components/navbar/

![copy-navbar](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/combine-front-end-guide/copy-navbar.gif)


次に`index.html`にコピーしたコードをペーストしてください。

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

## Navbarコンポーネントのコードを整理する
では次に、Navbarコンポーネントの不要なコードを削除し、`nav-item`を追加しましょう。

最終的なコードは以下のようになります。
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

以下のようになっていれば大丈夫です。
![20200530231534](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200530231534.png)

## Sign Up ボタン
次にSign Upボタンを追加しましょう。以下の様にコードをコピー&ペーストしてください。
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
ここで使われているBootstrapのクラスは以下になります。
- `btn btn-warning`でボタンを追加: https://getbootstrap.com/docs/4.5/components/buttons/#examples
- `font-weight-bold`で文字を太く: https://getbootstrap.com/docs/4.5/utilities/text/#font-weight-and-italics
- `px-3 py-2`でpaddingを調整: https://getbootstrap.com/docs/4.5/utilities/spacing/

現在のアウトプットは以下のようになります。
![20200530235220](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200530235220.png)


## Logo
それでは、次にロゴを追加しましょう。

まず、以下のサイトでダミーのロゴを作成しましょう。

https://favicon.io/favicon-generator/

ダウンロードしたzipファイルを解凍して,その中から`android-chrome-192x192.png`を`img`フォルダーに移します。
その後、`logo.png`とリネームしてください。

![20200603203949](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603203949.png)


この`logo.png`を`navbar-brand`の中で読み込みましょう。

```html
<a class="navbar-brand" href="#">
  <!-- highlight-start -->
  <img src="img/logo.png" alt="logo" />
  <!-- highlight-end -->
  Navbar
</a>
```

以下のようになります。
![20200603204838](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603204838.png)

しかし、このままではサイズが大きすぎるので、以下のリンクを参考にattributesを追加しましょう。
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

以下のようにちょうどいい大きさのロゴになりました。
![20200603205543](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603205543.png)

### Logo title
次に、"Navbar"から"Logo"に文字を変えて、`span`で囲み、Bootstrapのクラス`font-weight-bold`を追加しましょう。

```html
<a class="navbar-brand" href="#">
  ...
  <!-- highlight-next-line -->
  <span class="font-weight-bold">Logo</span>
</a>
```

以下のようになります。
![20200603205625](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603205625.png)

## Navbarのbackground colorを変更する。
以下のように、`bg-light`から`bg-white`クラスに変更してNavbarのbackgroundカラーを変更しましょう。
```html
<!-- highlight-next-line -->
<nav class="... bg-white">
```

以下のようになります。
![20200603205738](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603205738.png)

https://getbootstrap.com/docs/4.5/utilities/colors/#background-color

## Shadow
`shadow-sm`クラスを追加して、navbarに影をつけて立体感を出しましょう。

```html
<nav class="... shadow-sm">
```

以下のようになります。
![20200603205801](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603205801.png)

https://getbootstrap.com/docs/4.5/utilities/shadows/

## Sticky navbar
`sticky-top`クラスを追加して、navbarをスティッキーにしましょう。
```html
<nav class="... sticky-top">
```
https://getbootstrap.com/docs/4.5/utilities/position/#sticky-top

しかし、現在はコンテンツがなくスクロールできないので`sticky-top`による違いがわかりません。なので、以下のリンクをチェックしましょう。

https://getbootstrap.com/docs/4.5/examples/product/

`sticky-top`を加えるとnavbarが画面の上に固定されたままになります。

## マージンを調整する
`ml-auto`と`mr-lg-4`を加えてマージンを調整しましょう。
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

以下のようになります。
![20200603210020](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200603210020.png)

## Custom CSSを追加する
細かい見た目の調整のための以下のCSSを加えてください。
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
最終的なコードは以下のようになります。
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