---
title: Javascript Plugin
---

## ゴール
- ⚡ このステップでは、javascriptプラグインの使い方を学びましょう。
- 🔥 プラグインを追加してCustomers Voiceセクションに以下のGIFの様なエフェクトを追加します。

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_010547.gif)

## wow.js
wow.jsというプラグインを追加してエフェクトを追加します。
![20200607233437](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200607233437.png)

https://wowjs.uk/

## Install
[wow.jsのドキュメント](https://wowjs.uk/docs.html)に記載されているとおり、wow.jsを使用するには以下の二つのファイルが必要です。

1. `animate.css`
2. `wow.min.js`

それぞれ用意していきましょう。

### Animate css
まず、以下のURLから`animate.min.css`のコードをコピーしてください。

https://github.com/daneden/animate.css

次に、`css`フォルダの中に`animate.min.css`ファイルを作成してコピーしたコードを貼り付けます。

:::caution
**注意**: コードをペーストした後にsaveしてしまうとauto formatによりコードの圧縮が解かれてしまうので**saveしないでください。**
:::

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_003923.gif)

### `wow.min.js`
では、今度は`wow.min.js`用意しましょう。以下のURLの`dist`フォルダから`wow.min.js`のコードをコピーしましょう。

https://github.com/graingert/wow

次に、`js`フォルダの中に`wow.min.js`ファイルを作成してコピーしたコードを貼り付けましょう。

:::caution
**注意**: こちらも先ほど同様saveしてしまうとauto formatによりコードの圧縮が解かれてしまうので**saveしないでください。**
:::

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_004112.gif)


:::info
`dist` は `distribution`の略でここに配布用のファイルを置く慣例があります.
:::


## Setup
では、ファイルの準備ができたので、[wow.jsのドキュメント](https://wowjs.uk/docs.html)に記載されているとおりにセットアップをしましょう。

### Animate css
```html title="index.html"
<head>
  ...
  <!-- highlight-start -->
  <!-- Animate CSS -->
  <link href="css/animate.min.css" rel="stylesheet" />
  <!-- highlight-end -->

  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/custom.css" />
</head>
```

### wow js
```html title="index.html"
<!-- highlight-next-line -->
<script src="js/wow.min.js"></script> 

<!-- Custom Javascript -->
<script src="js/custom.js"></script>
```

```js title="js/custom.js"
new WOW().init();
```

## How to use
エフェクトを加えたいターゲット要素に`wow bounceInUp`クラスを追加します。
また、`data-wow-duration`と`data-wow-delay`も加えましょう。

Customers Voiceセクションの一つ一つのcolumnを以下の様に編集します。

```html title="index.html"
<!-- Customers Voice -->
<section id="customers-voice">
  <div class="container">
    <div class="section-header text-center">
      <h1 class="display-5 mb-4">What our customers say</h1>
      <p>
        Orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore.
      </p>
    </div>
    <div class="row">
      <!-- highlight-start -->
      <div
        class="col-md-4 mb-4 wow bounceInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
      <!-- highlight-end -->
        <div class="card w-100 shadow" style="border: none;">
          <div class="card-body">
            <div class="media mb-3">
              <img
                src="img/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716.jpg"
                class="mr-3 rounded-circle"
                alt="..."
                style="width: 40px; height: 40px;"
              />
              <div class="media-body">
                <h6 class="mb-0">Denny Omega</h6>
                <span class="text-muted" style="font-size: 0.8rem;">
                  @WWF wrestler
                </span>
              </div>
            </div>
            <p class="card-text text-muted">
              Rem mus tibi vero metenda ea indignitatem modo. Harum netus
              fames sit eius, memorabilem magistratu ille. Magna te eget dis
              quod arduas victrici.
            </p>
          </div>
        </div>
      </div>
      <!-- highlight-start -->
      <div
        class="col-md-4 mb-4 wow bounceInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
      <!-- highlight-end -->
        <div class="card w-100 shadow" style="border: none;">
          <div class="card-body">
            <div class="media mb-3">
              <img
                src="img/adult-attractive-beautiful-beauty-415829.jpg"
                class="mr-3 rounded-circle"
                alt="..."
                style="width: 40px; height: 40px;"
              />
              <div class="media-body">
                <h6 class="mb-0">Malissa May</h6>
                <span class="text-muted" style="font-size: 0.8rem;">
                  @CEO of Zahoo
                </span>
              </div>
            </div>
            <p class="card-text text-muted">
              Rem mus tibi vero metenda ea indignitatem modo. Harum netus
              fames sit eius, memorabilem magistratu ille. Magna te eget dis
              quod arduas victrici.
            </p>
          </div>
        </div>
      </div>
      <!-- highlight-start -->
      <div
        class="col-md-4 mb-4 wow bounceInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
      <!-- highlight-end -->
        <div class="card w-100 shadow" style="border: none;">
          <div class="card-body">
            <div class="media mb-3">
              <img
                src="img/photography-of-a-guy-wearing-green-shirt-1222271.jpg"
                class="mr-3 rounded-circle"
                alt="..."
                style="width: 40px; height: 40px;"
              />
              <div class="media-body">
                <h6 class="mb-0">Sobias Luke</h6>
                <span class="text-muted" style="font-size: 0.8rem;">
                  @CEO of thopify
                </span>
              </div>
            </div>
            <p class="card-text text-muted">
              Rem mus tibi vero metenda ea indignitatem modo. Harum netus
              fames sit eius, memorabilem magistratu ille. Magna te eget dis
              quod arduas victrici.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

![](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200608_152902.gif)


## 各columnの`delay`時間を変更する
以下の様に各コラムの`data-wow-delay`を変更しましょう。
```html
<div
  class="col-md-4 mb-4 wow bounceInUp"
  data-wow-duration="1s"
  data-wow-delay="300ms"
>
...
<div
  class="col-md-4 mb-4 wow bounceInUp"
  data-wow-duration="1s"
  data-wow-delay="550ms"
>
...
<div
  class="col-md-4 mb-4 wow bounceInUp"
  data-wow-duration="1s"
  data-wow-delay="800ms"
>
```

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_010547.gif)