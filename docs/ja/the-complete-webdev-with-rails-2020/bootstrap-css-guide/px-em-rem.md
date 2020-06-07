---
title: px, em and rem
---

## ゴール
- ⚡ Learn the difference of `px`, `em` and `rem`


## Preparation
Please make **`px-em-rem.html`** file in `bootstrap-test` folder.

```html title="bootstrap-test/px-em-rem.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      html {
        font-size: 16px;
      }

      .em-area {
        font-size: 14px;
      }

      .i-am-2em {
        font-size: 2em;
      }

      .i-am-2rem {
        font-size: 2rem;
      }

      .i-am-32px {
        font-size: 32px;
      }
    </style>
  </head>
  <body>
    <div class="em-area">
      <p class="i-am-2em">Hello I'm 2em</p>
      <p class="i-am-2rem">Hello I'm 2rem</p>
      <p class="i-am-32px">Hello I'm 32px</p>
    </div>
  </body>
</html>
```

## What is `em` ?
`em`: Relative to font-size of the parent element	

https://dzone.com/articles/css-relative-font-size

### Demo

If you change `.em-area` font-size,

```css
.em-area {
  font-size: 20px;
}
```

you see 
```html
<p class="i-am-2em">Hello I'm 2em</p>
```
also become bigger.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_074317.gif)

## What is `rem` ?
> `rem`: Relative to font-size of the root element	

https://www.w3schools.com/cssref/css_units.asp

**root element** is **`<html>`**.

### Demo
If you change `html` font-size,

```css
html {
  font-size: 24px;
}
```

you see 
```html
<p class="i-am-2rem">Hello I'm 2rem</p>
```
also become bigger.

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200509_074159.gif)

## `px`
Pixel doesn't change related to other element. That's why this is called absolute value.

## Which should I use ?
Bootstrap uses **`rem`**, and we're using Bootstrap, so following bootstrap convention is better.

We're going to use **`rem`** towards these properties in future steps
- `font-size`
- `margin`
- `padding`

## Refs

Discussion about this topic: 
- https://github.com/twbs/bootstrap/issues/19943
- https://stackoverflow.com/questions/11799236/should-i-use-px-or-rem-value-units-in-my-css