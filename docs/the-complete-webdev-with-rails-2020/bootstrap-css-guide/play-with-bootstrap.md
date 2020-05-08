---
title: Play with Bootstrap CSS
---

## Goal
  - ⚡ Get used to Bootstrap CSS

## Start from Bootstrap starter template

Make `bootstrap-test` folder, and make `bootstrap-test-1.html`.

Copy and paste bootstrap starter template.

https://getbootstrap.com/docs/4.4/getting-started/introduction/#starter-template

![copy-bootstrap-starter-html](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/copy-bootstrap-starter-html.gif)

:::caution
- Ignore Javascript files now.
- After we learn javascript, I will explain about these files.
:::

```html title="bootstrap-test/bootstrap-test-1.html"
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
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />

    <title>Hello, world!</title>
  </head>

  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

#### Check current output
![copy-bootstrap-html-output](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/copy-bootstrap-html-output.png)


## Try Bootstrap CSS

So, let's try bootstrap CSS.

First, please go to **Components** page.

![click-component-link](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/click-component-link.gif)


:::info
In Bootstrap site, they show

1. Output of the HTML
2. **HTML with class** that generates **the output**
:::

Copy `alert alert-primary` class and add this to `<h1>` tag.

![copy-alert-class](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/copy-alert-class.gif)

```html title="bootstrap-test/bootstrap-test-1.html"
...
  <!-- highlight-next-line -->
  <h1 class="alert alert-primary">Hello, world!</h1>
...
```

Check the output...

![output-after-alert-class.png](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/output-after-alert-class.png)


:::important
- You can obtain **the same output** in document.
- By just adding class `alert`, `alert-primary`
:::


## Detect applied CSS by Chrome DevTools
You see  CSS from bootstrap applied by `alert` `alert-primary` class from Bootstrap.

![bootstrap-alert-class](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/bootstrap-alert-class.png)


## What is the merit?
Did you notice the merit of Bootstrap?

Thanks to Bootstrap,

:::important
- **You don't need to write CSS** by yourself
:::

In the next step, let's see another example of Bootstrap CSS.