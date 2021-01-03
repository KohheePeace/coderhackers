---
title: Jumbotron
---

## ゴール
- ⚡ このステップではJumbotronを作成しましょう。

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-04-05-42-31.png)

## jumbotronのコードをコピーする
まず、以下のBootstrapのjumbotronのページからからコードをコピーしましょう。
https://getbootstrap.com/docs/4.5/components/jumbotron/

```html
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
```

コピーしたコードを`index.html`にペーストしてください。

```html title="index.html"
...
</nav>

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
<!-- highlight-end -->

<!-- Optional JavaScript -->
...
```

## 画像を用意する
次に、Jumbotronに使用する画像を用意していきましょう。

### メイン画像
まずメイン画像を用意しましょう。

- https://undraw.co/illustrations にアクセスする
- 画像のカラーを`"#00B0FF"`に変更する
- **"static assets"**と検索する
- svgファイルをダウンロードする
- ダウンロードしたファイルを **`img`**フォルダに移す

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-04-05-48-28.png)


### 背景画像
次に背景画像を作成しましょう。

https://www.canva.com/ にアクセスして、アカウントを作成してください。

次に以下のgifのように
- "Presentation"のデザインを作成してください。

![](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200603_235735.gif)


次に、
- **"blue and white startup business animated presentation"**と検索して"Enter"を押してください。
- その中の一つのスライドを選択してください。

![](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200601_115813.gif)


次に以下のgifのように画像のカラーを`#00B0FF`に編集します。
![](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200601_120145.gif)


最後に作成した画像を`.png`形式でダウンロードしてください。
![](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200601_120321.gif)


ダウンロードが完了したら、ファイルを`img`フォルダの下に移して`jumbotron-bg.png`とリネームしてください。

![20200601130307](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200601130307.png)

## background colorを変更する
`bg-white`クラスを追加してjumbotronの背景色を変更しましょう。
```html
<!-- highlight-next-line -->
<div class="jumbotron bg-white">
```

## 50:50に分割する
Jumbotronの中身を以下のように50:50に分割しましょう。

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

既存の`Hello World`のコードを左側にコピー&ペーストして、右側に`img`を追加します。
コードは以下のようになります。

```html
<div class="jumbotron bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <!-- highlight-start -->
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
        <a class="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
        <!-- highlight-end -->
      </div>
      <div class="col-lg-6">
        <!-- highlight-start -->
        <img
          src="img/undraw_static_assets_rpm6.svg"
          alt="jumbotron-image"
          class="img-fluid"
        />
        <!-- highlight-end -->
      </div>
    </div>
  </div>
</div>
```
![20200604003421](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200604003421.png)

`img-fluid`を画像が親要素に収まるように使用しています。: https://getbootstrap.com/docs/4.5/content/images/#responsive-images

## スローガン
スローガンを"Hello World!"から変更しましょう。
```html
<!-- highlight-next-line -->
<h1 class="display-4 font-weight-bold">
  <!-- highlight-next-line -->
  Learn web development
</h1>
```

## ボタンの追加と編集
ボタンを追加して、整えましょう。
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

## height `calc`, `vh` and Flexbox
Jumbotronのエリアを画面いっぱいに表示させるためにjumbotronの`height`を`calc`と`vh`を使って調整します。

また、Flexboxを使ってjumbotronの中身を中央に配置します。

```css title="css/custom.css"
/* || Jumbotron */
.jumbotron {
  /* highlight-start */
  height: calc(100vh - 57.69px);
  margin-bottom: 0;
  display: flex;
  align-items: center;
  /* highlight-end */
}
```

**`57.69px`** はnavbarの高さです。
![20200604004055](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200604004055.png)

`100vh`は現在の画面サイズを表します。
https://www.w3schools.com/cssref/css_units.asp

jumbotronの高さを`height: calc(100vh - 57.69px);`とすることで、navbarとjumbotron合わせて画面一杯に表示されます。


## Background image
jumbotronエリアに背景画像を適用しましょう。背景画像を適用するには`background-image`を使用し背景画像の大きさを`background-size`で調整します。
```css title="css/custom.css"
/* || Jumbotron */
.jumbotron {
  height: calc(100vh - 57.69px);
  margin-bottom: 0;
  display: flex;
  align-items: center;
  /* highlight-start */
  background-image: url(../img/jumbotron-bg.png);
  background-size: cover;
    /* highlight-end */
}
```

`../`はひと階層上を表します。`custom.css`のひと階層上は`index.html`と同じ階層です。

Ref: https://stackoverflow.com/questions/4810927/how-to-go-up-a-level-in-the-src-path-of-a-url-in-html


## レスポンシブの修正
ここからは、モバイルのレイアウトを調整していきましょう。

### jumbotron CSS
以下のCSSは**デスクトップ**のためのものなので、mediaクエリで囲みましょう。

```css title="css/custom.css"
/* highlight-next-line */
@media screen and (min-width: 992px) {
  .jumbotron {
    margin-bottom: 0;
    height: calc(100vh - 57.69px);
    display: flex;
    align-items: center;
    background-image: url(../img/jumbotron-bg.png);
    background-size: cover;
  }
}
```

`992px`のbreakpointは以下を参照。
https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints

### jumbotronと画像とスローガンの順番を変更する
`order-`クラスを用いて、画像とスローガンの順番をモバイルで変更しましょう。
```html
<!-- highlight-next-line -->
<div class="col-lg-6 order-2 order-lg-1">
  ...
</div>
<!-- highlight-next-line -->
<div class="col-lg-6 order-1 order-lg-2">
  ...
</div>
```


| Before                                                                                              | After                                                                                               |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| ![20200604011205](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200604011205.png) | ![20200604011138](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200604011138.png) |


Ref: https://getbootstrap.com/docs/4.5/utilities/flex/#order

### モバイル用のスローガン
モバイル用にスローガンを調整しましょう。
```css
@media screen and (max-width: 575.98px) {
  .jumbotron h1 {
    text-align: center;
    font-size: 2.3rem;
    margin-top: 2rem;
  }
}
```
`575.98px`は以下のリンクを参照してください:
https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints

`.jumbotron h1`と記述することで、`.jumbotron`の中にある`h1`を指定できます。

https://www.w3schools.com/css/css_combinators.asp


### ボタンリンク
モバイル用のボタンレイアウトを変更しましょう。`d-flex`, `flex-column`, `flex-lg-row`を使って、レイアウト画面サイズに応じて変更しています。

```html
<div
  <!-- highlight-next-line -->
  class="d-flex flex-column flex-lg-row"
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

ボタンは以下のようになります。

#### デスクトップ
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-04-21-18-02.png)

#### モバイルおよびタブレット
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-04-21-18-50.png)

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
            <h1 class="display-4 font-weight-bold">
              Learn web development
            </h1>
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

```css title="css/custom.css"
body {
  font-family: "Poppins", sans-serif;
}

/* || Navbar */
.nav-item {
  font-weight: 500;
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.9);
}

/* || Jumbotron */
@media screen and (min-width: 992px) {
  .jumbotron {
    margin-bottom: 0;
    height: calc(100vh - 57.69px);
    display: flex;
    align-items: center;
    background-image: url(../img/jumbotron-bg.png);
    background-size: cover;
  }
}

@media screen and (max-width: 575.98px) {
  .jumbotron h1 {
    text-align: center;
    font-size: 2.3rem;
    margin-top: 2rem;
  }
}
```