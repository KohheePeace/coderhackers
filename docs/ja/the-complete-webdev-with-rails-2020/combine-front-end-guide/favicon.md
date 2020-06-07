---
title: Favicon
---

## ゴール
- ⚡ Make favicon


## Create demo favicon
https://realfavicongenerator.net/


:::note
We will place favicon files under favicons folder
![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_030309.gif)
:::

Make `favicons` folder and then move downloaded files.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-06-03-06-13.png)

## Link in `index.html`
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

## Favicon checker
https://realfavicongenerator.net/favicon_checker#.XrGiHKgzbb2

## Other Favicon generator

- https://realfavicongenerator.net/favicon_checker#.XrGiHKgzbb2
- https://favicon.io/
