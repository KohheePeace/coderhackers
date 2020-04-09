---
title: Class and ID
---

In this chapter, we are going to

- Learn how to use **class** and **id** for css styling target

## Class and ID
In addition to HTML tag like `<h1>`, you can use **class** and **id** as **css target**.

And this is more common way to apply CSS.

Let's edit `test.html` file like below.

```html title="test.html"
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Title of the document</title>
  <link rel="stylesheet" href="test.css">
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
`test.css`
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
![Class and Id](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/css-guide/class-and-id.png)