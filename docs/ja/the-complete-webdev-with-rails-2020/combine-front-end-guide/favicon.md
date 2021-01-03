---
title: Favicon
---

## ゴール
- ⚡ このステップでは、Faviconを作りましょう。

## Faviconとは？
> A favicon /ˈfæv.ɪˌkɒn/ (short for favorite icon), also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is <mark>a file containing one or more small icons, associated with a particular website or web page.</mark>

https://en.wikipedia.org/wiki/Favicon

実際に例を見てみましょう。

## Create demo favicon
以下のサイトでデモ用のfaviconを作成しましょう。

https://realfavicongenerator.net/

**Demo with a random image**をクリックしてください。

![20200609202326](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200609202326.png)


ここに表示されているのがfaviconの例になります。
![20200609202734](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200609202734.png)

次に、
**Favicon Generator Options**のPathのところの

**I cannot or I do not want to place favicon files at the root of my web site. Instead I will place them here:**にチェックをいれて

**favicons**と入力してボタンをクリックしてください。

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_030309.gif)


次に、以下のボタンをおしてfaviconパッケージをダウンロードしてください。

![20200609204037](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200609204037.png)

`favicons` フォルダを作成し、ダウンロードしたファイルを移動させてください。

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-06-03-06-13.png)

## Link in `index.html`
以下の画像の箇所をコピーして、`index.html`の`head`タグの中にペーストします。
![20200609204356](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200609204356.png)
```html title="index.html"
...
<!-- highlight-start -->
<!-- Favicons -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="favicons/apple-touch-icon.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="favicons/favicon-32x32.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="favicons/favicon-16x16.png"
/>
<link rel="manifest" href="favicons/site.webmanifest" />
<link rel="shortcut icon" href="favicons/favicon.ico" />
<meta name="msapplication-TileColor" content="#da532c" />
<meta name="msapplication-config" content="favicons/browserconfig.xml" />
<meta name="theme-color" content="#ffffff" />
<!-- highlight-end -->

<!-- Font Awesome -->
```

## Check the output
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-06-03-09-43.png)