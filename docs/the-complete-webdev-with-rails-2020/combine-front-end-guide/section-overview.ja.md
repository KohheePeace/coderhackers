---
title: 概要と準備
---


## Sectionのゴール
- ⚡ このSectionでは、いままで学んだ知識を組み合わせて以下のgifの様なウェブサイトを作成しましょう!

![preview-of-frontend-final.gif](https://storage.googleapis.com/coderhackers-assets/docs/img/20200507_214000.gif)



## 準備

Please make new folder **`frontend-combine`** for this project.

## Start from Bootstrap starter
We start from Bootstrap starter template.

https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template

Make **`index.html`** inside **`frontend-combine`** and paste starter code.

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

## Folder Structure
Please make 

1. `css`, `js`, and `img` folder.
2. `custom.css` and `custom.js` file.

![folder-structure](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-05-03-23-20-58.png)

We're going to write custom CSS and Javascript code in these file.


### Import `css/custom.css` and `js/custom.js` in `index.html`
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

Okay so we're ready! Let's make real website step by step! 😸

## Refs

https://bootstrapmade.com/

https://bootstrapmade.com/demo/themes/NewBiz/

https://www.shopify.com/

https://squareup.com/us/en?country_redirection=true

https://www.netlify.com/

https://www.gitbook.com/

https://startbootstrap.com/themes/new-age/