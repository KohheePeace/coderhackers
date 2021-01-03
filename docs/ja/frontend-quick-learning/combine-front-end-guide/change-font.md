---
title: How to change fonts
---

## Goal
- ⚡ In this step, we'll learn how to change the font on our website.

## `font-family`

To change the font of the whole website, you can change the `font-family` of the `body` as follows.

```css title="For example"
body {
  font-family: 'Oswald', sans-serif;
}
```

Let's try it in Chrome Dev Tools.

![change-font](https://storage.googleapis.com/coderhackers-assets/docs/img/20200530_123837.gif)

You see that the font has been changed.

## `Tangerine` font
Now, let's try the `Tangerine` font. The `Tangerine` font looks like the following image.

![20200603002843](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200603002843.png)

Now, let's try the following CSS in Chrome Dev Tools as before.

```css
body {
  font-family: 'Tangerine', cursive;
}
```

![tangerine-font-test](https://storage.googleapis.com/coderhackers-assets/docs/img/20200530_124904.gif)

The font has changed, but this is not the `Tangerine` font, but the `cursive` of the **fallback** font has been applied.

:::caution
The reason for this is that the `Tangerine` font is **not installed in the chrome browser by default**.

*I will explain about `fallback font` later.
:::


So how do you use a font that is not installed in your browser by default?

**<mark>=> The answer is to use Google Fonts. 😸</mark>**

## Google Fonts
If you want to use a particular font on your website, it is better to use **Google Fonts**.

### Using Google Fonts

Now let's take a look at how to use Google Fonts.

1. First, go to https://fonts.google.com/
2. Next, search for the name of the font you want to use. This time, do a search for `Tangerine`.
3. Next, select the font weight you want to use. Let's choose all this time.
4. Please copy **Embed `<link>`** at the end.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200503_075419.gif)

Paste copied embeded `<link>` into the `<head>` tag as follows.

```html title="index.html"
<head>
  ...
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />

  <!-- highlight-start -->
  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <!-- highlight-end -->
</head>
```

Now, let's check the following CSS in Chrome Dev Tools again.

```css
font-family: 'Tangerine', cursive;
```

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200530_125046.gif)

This time, thanks to loading Google Fonts, you'll see that the `Tangerine` font was applied correctly.

## About Fallback Fonts
A **fallback font** is a font that is applied when the specified font is unavailable for some reason.

Start with the font you want to use and then multiple fallback fonts as follows.

```css
font-family: 'Tangerine', 'Oswald', ... , cursive;
```

`'Tangerine'` is missing => `'Oswald'` is missing => ... `cursive`.

The last `cursive` is the name of the font type, not the font name, and the browser will automatically select and apply the installed font of this type.

Besides `cursive`, there are also `serif`, `sans-serif`, `fantasy`, and `monospace`, but it is sufficient to use CSS shown in Google Fonts.

See: https://www.w3schools.com/cssref/pr_font_font-family.asp

## Poppins font 👏
We use the **"Poppins"** font on our website.

### Add a Poppins font.
Now, let's add the Poppins font by clicking on the URL below.

https://fonts.google.com/specimen/Poppins

In the meantime, please add **300`**, **400`**, **500`**, and **700`** fonts.

***Note**: Different weights and italics can be added later, as needed and appropriate. In my case, I first add **`300`**, **`400`**, **`500`**, and **`700`** and adjust as needed.

Now, copy and paste the embed link into the head tag.

```html title="index.html"
<head>
  ...
  <!-- Google Fonts -->
  <!-- highlight-next-line -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
  ...
</head>
```

Next, let's change the `font-family` of the body to the Poppins font.

```css title="css/custom.css"
/* highlight-start */
body {
  font-family: "Poppins", sans-serif;
}
/* highlight-end */
```

:::info Q. Why do I need to choose `font-weight` and `italic`?

A. This is to improve the loading speed of the site by reducing the size of the font file to be loaded.

See: https://www.smashingmagazine.com/2019/06/optimizing-google-fonts-performance/
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
