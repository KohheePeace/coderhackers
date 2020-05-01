---
title: Introduction to Bootstrap
---

## Overview

In this step, we are going to
- Understand what is **Bootstrap CSS**

## What is Bootstrap ?
From wikipedia...
> Bootstrap is a free and open-source <mark>**CSS framework**</mark> directed at responsive, mobile-first front-end web development. <mark>**It contains CSS- and (optionally) JavaScript-based**</mark> design templates for typography, forms, buttons, navigation and other interface **components**.

https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)

So, Bootstrap is a **CSS framework** which contains CSS and Javascript.

In this step, we are going to **focus on CSS part**.

## Check official website

Visit: https://getbootstrap.com/

You see you need to add **CSS and JS** in Bootstrap Get Started page.

![bootstrap-get-started](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/bootstrap-get-started.gif)


## Check Bootstrap CSS file
In Bootstrap get started page, you see you need to add the below CSS `<link>` tag. 
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```

Let's check this file.

Acceess
https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
![access-min-bootstrap](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/access-min-bootstrap.png)

It is difficult to read this file because this is a **compressed** file.

So, let's download chrome extension to **decompression** this file for easy reading.
https://chrome.google.com/webstore/detail/javascript-and-css-code-b/iiglodndmmefofehaibmaignglbpdald?hl=en

![beautified-bootstrap-ss](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/bootstrap-css-guide/beautified-bootstrap-ss.png)



**You see this is a <mark>huge external CSS file</mark>.**

This is the same thing we did in [last chapter](../css-guide/3-writing-ways-of-css#3-external-css-file).

In the next chapter, let's play with bootstrap!