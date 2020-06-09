---
title: Favicon
---

## Goal
- ⚡ In this step, we are going to create **favicon**.

## What is Favicon?
> A **favicon** /ˈfæv.ɪˌkɒn/ (short for favorite icon), also known as a **shortcut icon**, **website icon**, **tab icon**, **URL icon**, or **bookmark icon**, is <mark>a file containing one or more small icons, associated with a particular website or web page.</mark>

https://en.wikipedia.org/wiki/Favicon

The icon in the following images are examples of favicon.

![20200609210713](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200609210713.png)

## Create demo favicon
So, let's create a demo favicon at the following site

https://realfavicongenerator.net/

Please Click **Demo with a random image**.

![20200609202326](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200609202326.png)


These are the examples of favicon.
![20200609202734](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200609202734.png)

Next, in the Path tab of **Favicon Generator Options** section, there is a checkbox

**I cannot or I do not want to place favicon files at the root of my web site. Instead I will place them here:**

Please check this checkbox, then type <mark><b>favicons</b></mark> and click button.


![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200506_030309.gif)


Then click the button below to download the favicon package.

![20200609204037](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200609204037.png)

Create the `favicons` folder and move the downloaded files into it.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-06-03-06-13.png)

## Favicon links in `index.html`
Copy and paste the following image code into the `head` tag of `index.html`.
![20200609204356](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200609204356.png)
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
We successfully added favicons.
![](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-06-03-09-43.png)