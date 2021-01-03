---
title: Play with Bootstrap CSS
---

## Goal
  - ⚡ Get used to Bootstrap CSS

## Preparation

1. Make `bootstrap-test` folder
2. Inside it make `bootstrap-test1.html`
3. Copy and paste bootstrap starter template.

https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template

![copy-bootstrap-starter-html](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/copy-bootstrap-starter-html.gif)

:::caution
- Ignore Javascript files now.
- After we learn javascript, I will explain about these files.
:::

```html title="bootstrap-test/bootstrap-test1.html"
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- highlight-start -->
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <!-- highlight-end -->

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- highlight-start -->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <!-- highlight-end -->
  </body>
</html>
```

#### Check current output
![copy-bootstrap-html-output](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/copy-bootstrap-html-output.png)


## Try Bootstrap CSS

So, let's try bootstrap CSS.

First, please go to **Components => Buttons** page.

![click-component-link](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200517_200207.gif)

https://getbootstrap.com/docs/4.5/components/buttons/


:::info Important🔥
In Bootstrap site, they show

1. **Output**
2. **HTML code with classes (which is from Bootstrap CSS)** that generates **the output**

⚠️ **Read document carefully** to know how to use !

:::

## Try Button

:::info Use Case
- You want to add **"Sign Up"** button
:::


1. Make **"Sign Up"** `<a>` tag HTML code
2. Add `btn btn-primary` classes to Sign Up button.


![copy-btn-class](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200517_200931-fix.gif)

> The `.btn` classes are designed to be used with the `<button>` element. <mark>However, you can also use these classes on `<a>` or `<input>` elements</mark> (though some browsers may apply a slightly different rendering).

Ref: https://getbootstrap.com/docs/4.5/components/buttons/#button-tags

```html title="bootstrap-test/bootstrap-test1.html"
<h1>
  Hello, world!
  <!-- highlight-next-line -->
  <a href="#" class="btn btn-primary">Sign Up</a>
</h1>
```

Check the output...

![bootstrap-btn](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/2020-05-18-13-35-06.png)


### Outline buttons

```html title="bootstrap-test/bootstrap-test1.html"
<h1>
  Hello, world!
  <!-- highlight-next-line -->
  <a href="#" class="btn btn-outline-primary">Sign Up</a>
</h1>
```

:::note Output
![](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/2020-05-18-18-43-01.png)
:::

### Change sizes of Button
```html title="bootstrap-test/bootstrap-test1.html"
<h1>
  Hello, world!
  <!-- highlight-next-line -->
  <a href="#" class="btn btn-outline-primary btn-lg">Sign Up</a>
</h1>
```

:::note output

![](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/2020-05-18-18-42-07.png)

:::

## What is the merit?
Did you notice the merit of Bootstrap?

By using Bootstrap,

:::important
- **<mark>You don't need to write CSS</mark>** 😁
:::

In the next step, let's see another example of Bootstrap CSS.