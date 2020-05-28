---
title: フォントの変え方
---

## ゴール
- ⚡　ウェブサイトの**フォントの変更方法**を学習する。

## `font-family`

<!-- You can change whole website font by adding **`font-family`** in `body`. -->

`body`の`font-family`を変更することによって、ウェブサイト全体のフォントを変更することができます。

```css title="For example"
body {
  font-family: 'Oswald';
}
```

chrome dev toolsで試してみましょう。

![change-font](https://storage.googleapis.com/coderhackers-assets/docs/img/20200503_234618.gif)

フォントが変更されたのが分かるかと思います。

## 現在インストールされているフォントを確認する
Google chrome で **`chrome://settings/fonts`**にアクセスすることで、現在chromeブラウザにインストールされているフォントを確認することができます。

You see **`'Oswald'`** is installed. (Maybe `Oswald` is not installed in your machine)

## ブラウザにインストールされていないフォントを使用する

現在ブラウザにインストールされていないフォントを使用するにはどうしたらいいでしょうか？

### 例えば`Tangerine`フォントを使用したい場合
**`'Tangerine'`** フォントはデフォルトではchromeブラウザにインストールされていません。

なので、以下のようなCSSを与えた場合

```css
body {
  font-family: 'Tangerine';
}
```

`'Tangerine'`フォントは適用されず、代わりに**fallback font**が適用されます。


:::caution
フォントの見た目は変更されましたが、これは`'Tangerine'`フォントではなくて、fallback fontが適用されています。

![tangerine-font-test](https://storage.googleapis.com/coderhackers-assets/docs/img/20200503_235157.gif)
:::

## Fallback fontについて

## Google Fontsについて
特定のフォントをウェブサイトで指定する場合は、**Google Fonts**を使用するといいでしょう。

なぜなら、

:::info
- 指定したいフォントがユーザーの使用するブラウザにインストールされていない可能性がある
- Google Fontsを読み込んでおけば、ユーザーのブラウザにインストールされていなくてもフォントが適用される。
:::

## Google Fontsを使用する

それでは、Google Fontsの利用の仕方を見ていきましょう。

1. go to: https://fonts.google.com/
2. **Search** font you want to use
3. **Select** font-weight you want to use.
4. Copy **embed `<link>`**

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200503_075419.gif)

Paste inside `<head>` tag.

```html title="index.html"
<head>
  ...
  <!-- Fonts -->
  <link
    href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
    rel="stylesheet"
  />
</head>
```
Then

```css
body {
  font-family: 'Tangerine', cursive;
}
```

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200503_080252.gif)


## Fallback font

**"cursive"** is **fallback** generic family font.

**This font is applied if the browser does not support the first font.**
```css
body {
  font-family: 'Tangerine', cursive;
}
```


## Poppins フォント 👏
私たちのウェブサイトには、**"Poppins"**フォントを使用していきたいと思います。

### Poppinsフォントを追加する
https://fonts.google.com/specimen/Poppins

We're only adding **`300`**, **`400`**, **`500`**, **`700`** and it's **`italic`** currently.

:::info
Q. Why select `font-weight` and `italic`?

A. This is because web site performance.


Ref: https://www.smashingmagazine.com/2019/06/optimizing-google-fonts-performance/
:::


```html title="Link embed"
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
```

```css title="CSS"
font-family: 'Poppins', sans-serif;
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

    <!-- highlight-start -->
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
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

## Refs

- `font-family`:
https://www.w3schools.com/cssref/pr_font_font-family.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/font-family


- Google fonts:
https://developers.google.com/fonts/docs/getting_started#a_quick_example
