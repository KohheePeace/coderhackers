---
title: <a> Tag
---

## Goal

- ⚡ Learn how to use `<a>` tag

## What is `<a>` tag ?

> The `<a>` tag defines a hyperlink, which is <mark>**used to link from one page to another**</mark>.
>
> The most important attribute of the `<a>` element is the <mark>**href**</mark> attribute, which indicates **the link's destination**.

https://www.w3schools.com/tags/tag_a.asp

## Try `<a>` tag

```html title="test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <h1>Here is a title.</h1>
    <h2>Here is a subtitle.</h2>

    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>

    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/28/Tortoiseshell_she-cat.JPG"
      alt="Hello this is cat image"
      width="320"
      height="320"
    />

    <!-- highlight-next-line -->
    <a href="https://www.google.com/">Hello Google</a>
  </body>
</html>
```

![](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/20200507_224112.gif)

## Navigate to different file

I will show how to navigate to the different file.

### Make `test2.html`

Let's make `test2.html`.

```html title="html-test/test2.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello this is test2.html</h1>
  </body>
</html>
```

### Add link to `test2.html` in `test1.html`

```html title="test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <h1>Here is a title.</h1>
    <h2>Here is a subtitle.</h2>

    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>

    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/28/Tortoiseshell_she-cat.JPG"
      alt="Hello this is cat image"
      width="320"
      height="320"
    />

    <a href="https://www.google.com/">Hello Google</a>
    <!-- highlight-next-line -->
    <a href="test2.html">Go to test2.html</a>
  </body>
</html>
```

![](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/20200507_224542.gif)

<!-- ## Try absolute Path

Instead of this code

```html title="Relative Path"
<a href="test2.html">Go to test2.html</a>
```

The below code also works.

```html title="Abosolute Path"
<a href="file:///C:/Users/kohheepeace/Desktop/html-test/test2.html">
  Go to test2.html
</a>
```

In the next step, let's check the difference of `relative path` and `absolute path`. -->
