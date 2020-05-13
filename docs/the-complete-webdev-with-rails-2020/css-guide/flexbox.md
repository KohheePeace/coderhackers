---
title: Flexbox
---

## Goal
- ⚡ Learn **Flexbox**

## What is Flexbox ?
> The Flexible Box Layout Module, **<mark>makes it easier to design flexible responsive layout</mark>** structure 

So by using Flexbox, it will be easier to make complicated layout like below image.

![flex-box-complex-layout](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-28-22-07-10.png)
Ref: https://www.w3schools.com/css/css3_flexbox.asp


## Try Flexbox
Okay so, let's try basic Flexbox.

We're doing the same thing which is introduced in this link.

https://css-tricks.com/snippets/css/a-guide-to-flexbox/
![css-tricks-flexbox](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-29-01-24-56.png)

### Prepare Flexbox playground

Make `flexbox-test.html` in `css-test` folder.


```html title="flexbox-test.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        background-color: violet;
        padding: 20px;
        height: 800px;
      }

      .item {
        background-color: orange;
        width: 300px;
        height: 300px;
        color: white;
        border: 1px solid #000000;
        font-size: 32px;
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>
```

This is a image of layout without Flexbox.

![css-flexbox-skelton](https://storage.googleapis.com/coderhackers-assets/docs/img/2020-04-29-01-09-01.png)


### Try it here...
Recording how to imitate https://css-tricks.com/snippets/css/a-guide-to-flexbox/ here...