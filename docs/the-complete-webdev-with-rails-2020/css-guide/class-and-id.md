---
title: Class and ID
---

## Goal

- ⚡Learn how to use **`class`** and **`id`** for css selector.

## Class and ID
In addition to HTML tag like `<h1>`, you can use **class** and **id** as **css selector**.

And this is more common way to apply CSS.

Let's edit `test1.html` file like below.

```html title="css/test1.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <link rel="stylesheet" href="test1.css" />
  </head>

  <body>
    <h1>Here is a title.</h1>
    <h2>Here is a subtitle.</h2>

    <ul>
      <!-- highlight-start -->
      <li class="drink" id="coffee">Coffee</li>
      <li class="drink tea">Tea</li>
      <li class="drink">Milk</li>
      <!--  highlight-end -->
    </ul>
  </body>
</html>
```
`test1.css`
```css
h1 { color: white; background: navy; }
ul { background: #FFFF33; }

/* highlight-start */
.drink {
  color: red;
}

#coffee {
  text-decoration: underline;
}

.tea {
  font-weight: bold;
}
/* highlight-end */
```

The output is like below...

![css-class-and-id](../../img/2020-04-27-22-48-30.png)

## Difference between an id and a class?

> **`id`s are unique**
> 
>  - Each element can have only one `id` 
>  - Each page can have only one element with that `id`
> 
> **`class`es are NOT unique**
> 
>  - You can use the same `class` on multiple elements.
>  - You can use multiple `class`es on the same element.

https://stackoverflow.com/questions/544010/whats-the-difference-between-an-id-and-a-class

So...

```html title="❌ Bad" {2-3}
<ul>
  <li class="drink" id="coffee">Coffee</li>
  <li class="drink" id="coffee">Coffee 2</li>
  <li class="drink tea">Tea</li>
  <li class="drink">Milk</li>
</ul>
```

```html title="✅ Good" {2-3}
<ul>
  <li class="drink" id="coffee-1">Coffee 1</li>
  <li class="drink" id="coffee-2">Coffee 2</li>
  <li class="drink tea">Tea</li>
  <li class="drink">Milk</li>
</ul>
```

:::tip
- Even if you wrongly use same `id`, it works.
- Don't worry too much.
:::