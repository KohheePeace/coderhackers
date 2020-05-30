---
title: How to change the font
---

## Goal
- ⚡ Learn how to **change the font** on your website.

## `font-family`

You can change the font of the entire website by changing the `font-family` of the `body`.

```css title="For example"
body {
  font-family: 'Oswald', sans-serif;
}
```

Let's try it with Chrome dev tools.

![change-font](https://storage.googleapis.com/coderhackers-assets/docs/img/20200530_123837.gif)

You'll see that the font has been changed.

## Use a font that is not installed in the browser by default

How can I use a font that is not installed in my browser by default?

### For example, if you want to use the `Tangerine` font
**`Tangerine`** fonts are not installed in the chrome browser by default.

So, if you give the following CSS

```css
body {
  font-family: 'Tangerine', cursive;
}
```

The `Tangerine` font is not applied, instead the **fallback font** `cursive` is applied.


:::caution
The look of the font has changed, but this is not the `Tangerine` font, but the `cursive` of the **fallback font** has been applied.

![tangerine-font-test](https://storage.googleapis.com/coderhackers-assets/docs/img/20200530_124904.gif)
:::

## About Fallback Fonts
You can specify multiple fallback fonts if the specified font is not available.

```css
font-family: 'Tangerine', 'Oswald', ... , cursive;
```

`'Tangerine'` is missing => `'Oswald'` is missing => ... `cursive` fonts.

The last `cursive` is not the name of the font, but the name of a type of font, and the browser will automatically select and apply the installed font of this font type.

See: https://www.w3schools.com/cssref/pr_font_font-family.asp

## About Google Fonts
If you want to specify a specific font for your website, it is better to use **Google Fonts**.

Because.

:::info
- The font you want to specify may not be installed in the user's browser.
- If you load Google Fonts, the font will be applied even if it's not installed in the user's browser.
:::

## Using Google Fonts

Let's take a look at how to use Google Fonts.

1. Go to https://fonts.google.com/
2. Search for the font name you want to use
3. Select the size of the font weight you want to use.
4. Copy **Embed `<link>`**

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200503_075419.gif)

Paste the copied `<link>` into the `<head>` tag.

```html title="index.html"
<head>
  ...
  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
    rel="stylesheet"
  />
</head>
```
Let's add the following CSS to the `body` tag by using Chrome dev tools.

```css
font-family: 'Tangerine', cursive;
```

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200530_125046.gif)

You can see that the `Tangerine` font is applied correctly by loading Google fonts.

## Poppins font 👏
We will use the **"Poppins "** font on our website.

### Add a Poppins font.
https://fonts.google.com/specimen/Poppins

For now, let's add **`300`**, **`400`**, **`500`** and **`700`** fonts.

***Note**: Please add any weights or italics you may need later as appropriate. In my case, I usually add **`300`**, **`400`**, **`500`**, **`700`** for the first time and adjust it as needed.

:::info Q. Why do you choose `font-weight` and `italic`?

A. To improve the loading speed of the site by reducing the size of the font file to be loaded.

See: https://www.smashingmagazine.com/2019/06/optimizing-google-fonts-performance/
:::

```html title="Link embed"
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
```

```css title="CSS"
font-family: 'Poppins', sans-serif;
```


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
