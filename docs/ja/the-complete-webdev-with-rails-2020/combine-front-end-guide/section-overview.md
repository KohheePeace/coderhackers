---
title: セクションの概要と準備
---


## ゴール
- ⚡ このセクションでは、今まで学んできた知識を組み合わせて下のgifのようなウェブサイトを作っていきます。

![preview-of-frontend-final.gif](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/20200507_214000.gif)




## 準備

1. このウェブサイト用に **`frontend-combine`** フォルダーを作成してください。
2. **`index.html`** ファイルを `frontend-combine`フォルダー内に作成してください。
3. Bootstrapのスターターテンプレートコードを`index.html`にペーストしてください。
https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template


```html title="frontend-combine/index.html"
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>
```

### VS Codeで新しいウィンドウを開く
`frontend-combine`フォルダーを新しいVS codeウィンドウとして開きましょう。
![](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200602_235337.gif)


### フォルダー構成

1. `css`, `js`, `img` の3つのフォルダーを`frontend-combine`内に作成してください。
2. `custom.css`ファイルと`custom.js`ファイルを`css`下の画像のように作成してください。

![folder-structure](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/2020-05-03-23-20-58.png)

From now on, we will write CSS and javascript to these files.

次に`css/custom.css`と`js/custom.js`を`index.html`に読み込みます。

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

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />

    <!-- highlight-start -->
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/custom.css" />
    <!-- highlight-end -->

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

    <!-- highlight-start -->
    <!-- Custom Javascript -->
    <script src="js/custom.js"></script>
    <!-- highlight-end -->
  </body>
</html>
```

これで下準備は完了です。ここからステップバイステップでウェブサイトを作成していきましょう！😸