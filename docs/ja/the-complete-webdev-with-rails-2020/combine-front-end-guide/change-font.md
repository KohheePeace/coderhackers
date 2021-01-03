---
title: フォントの変更の仕方
---

## Goal
- ⚡ このステップではウェブサイトのフォントの変更方法について学んでいきましょう

## `font-family`

ウェブサイト全体のフォントを変更するには、以下の様に`body`の`font-family`を変更することで実現できます。

```css title="For example"
body {
  font-family: 'Oswald', sans-serif;
}
```

では実際にChrome Dev Toolsで試してみましょう。

![change-font](https://storage.googleapis.com/coderhackers-assets/docs/img/20200530_123837.gif)

フォントが変更されたのが分かったかと思います。

## `Tangerine` font
では、次に`Tangerine`fontを試してみましょう。`Tangerine`フォントは以下の画像のようなフォントです。

![20200603002843](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200603002843.png)

では、先ほどと同様に以下のCSSをChrome Dev Toolsで試してみましょう。
```css
body {
  font-family: 'Tangerine', cursive;
}
```

![tangerine-font-test](https://storage.googleapis.com/coderhackers-assets/docs/img/20200530_124904.gif)

フォントは変わりましたが、これは`Tangerine`フォントではなく、**fallback**フォントの`cursive`が適用されています。


:::caution
これはなぜかというと、`Tangerine`フォントは**デフォルトではchromeブラウザにインストールされていない**からです。

*fallbackフォントについては後で説明します。
:::


では、デフォルトでブラウザにインストールされていないフォントを使用するにはどうしたらいいでしょうか？

**<mark>=> 答えはGoogle Fontsを使うことです。 😸</mark>**

## Google Fonts
もしウェブサイトで特定のフォントを使用したい場合は、**Google Fonts**を使うのがいいでしょう。

### Using Google Fonts

ではさっそく、Google Fontsの使い方を見ていきましょう。

1. まずhttps://fonts.google.com/ にアクセスしてください。
2. 次に、使用したいフォント名を検索します。今回は`Tangerine`と検索してください。
3. 次に、使用したいフォントウェイトを選択します。今回はすべて選択しましょう。
4. 最後に**Embed `<link>`**をコピーしてください。

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200503_075419.gif)

以下の様に、コピーしたembed `<link>`を`<head>`タグの中にペーストします。

```html title="index.html"
<head>
  ...
  <!-- highlight-start -->
  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <!-- highlight-end -->
</head>
```

では、再度Chrome Dev Toolsで以下のCSSをチェックしてみましょう。

```css
font-family: 'Tangerine', cursive;
```

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200530_125046.gif)

今回は、Google Fontsを読み込んだおかげで、`Tangerine`フォントが正しく適用されたのが分かったかと思います。

## About Fallback Fonts
**fallbackフォント**とは、指定したフォントが何らかの理由で使用できない場合に適用されるフォントです。

以下のように一番はじめに使用したいフォントを書いて、それ以降に複数のfallbackフォントを記述できます。

```css
font-family: 'Tangerine', 'Oswald', ... , cursive;
```

`'Tangerine'`がない => `'Oswald'`がない => ... `cursive`.

最後の`cursive`というのは、フォント名ではなくフォントの種類の名前で、ブラウザはこの種類のインストールされているフォントを自動的に選択して適用します。 `cursive`の他に`serif`, `sans-serif`, `fantasy`, `monospace`などがありますが、Google Fontsに示されたCSSを使用していれば十分です。

See: https://www.w3schools.com/cssref/pr_font_font-family.asp

## Poppins font 👏
私たちのウェブサイトでは **"Poppins"** フォントを使用していきます。

### Add a Poppins font.
では、以下のurlをクリックしてPoppinsフォントを追加していきましょう。

https://fonts.google.com/specimen/Poppins

とりあえず、**`300`**、**`400`**、**`500`**、**`700`**のフォントを追加してください。

***注意**: 別のweightやitalicは後から必要に応じて適宜追加してください。私の場合、最初に **`300`**、**`400`**、**`500`**、**`700`**を追加して、必要に応じて調整しています。

では、コピーしたembedリンクをheadタグの中にペーストしてください。

```html title="index.html"
<head>
  ...
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  
  <!-- Google Fonts -->
  <!-- highlight-next-line -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
  ...
</head>
```

次に、bodyの`font-family`をPoppinsフォントに変更しましょう。

```css title="css/custom.css"
/* highlight-start */
body {
  font-family: "Poppins", sans-serif;
}
/* highlight-end */
```

:::info Q. なぜ `font-weight` と `italic` を選択する必要があるのですか？

A. 読み込むフォントファイルのサイズを小さくすることで、サイトの読み込み速度を向上させるためです。

参照: https://www.smashingmagazine.com/2019/06/optimizing-google-fonts-performance/
:::



## Final Code
The final code looks like this
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

    <!-- highlight-start -->
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- highlight-end -->

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
    <h1>Hello, world!</h1>

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

```css title="css/custom.css"
/* highlight-start */
body {
  font-family: "Poppins", sans-serif;
}
/* highlight-end */
```

## Refs.

`font-family`:
- https://www.w3schools.com/cssref/pr_font_font-family.asp
- https://developer.mozilla.org/en-US/docs/Web/CSS/font-family


Google fonts:
- https://developers.google.com/fonts/docs/getting_started#a_quick_example
