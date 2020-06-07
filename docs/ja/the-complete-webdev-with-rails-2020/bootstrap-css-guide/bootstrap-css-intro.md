---
title: Introduction to Bootstrap
---

## ゴール
- ⚡ Understand what is **Bootstrap**

## What is Bootstrap ?
From wikipedia...
> Bootstrap is a free and open-source <mark>**CSS framework**</mark> directed at responsive, mobile-first front-end web development. <mark>**It contains CSS- and (optionally) JavaScript-based** design templates</mark> for typography, forms, buttons, navigation and other interface **components**.

https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)

So, Bootstrap is a **CSS framework** which contains CSS and Javascript.

In this section, we are going to **focus on CSS part** of Bootstrap.

## Check official website

Visit: https://getbootstrap.com/

You see you need to add **CSS and Javascript**.

![bootstrap-get-started](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/bootstrap-get-started.gif)


## Check Bootstrap CSS file
In Bootstrap page, it is written that you need to import below CSS file. 
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
```

Let's check this file.

Open: https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css

![bootstrap-css-file](../../img/2020-05-19-16-31-17.png)

It is difficult to read this file because this file is **compressed** .

So, use chrome extension to **decompress** this file for easy reading.
https://chrome.google.com/webstore/detail/javascript-and-css-code-b/iiglodndmmefofehaibmaignglbpdald?hl=en


![beautified-bootstrap-ss](../../img/2020-05-19-16-32-19.png)

:::info important 🔥
**Bootstrap CSS is a <mark>huge external CSS file</mark>.**
:::

Remember [the step in CSS section](../css-guide/3-writing-ways-of-css#3-external-css-file).

From the next step, let's play with this bootstrap CSS!