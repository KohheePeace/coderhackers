---
title: Dive into Javascript
---

## Goal

In the previous step, we learned the flow of the javascript code.

So, in this step, let's
- Dive into javascript code


:::note important words
- **document**
- **Element**
- **let**
- **Event**
:::

From now, let's dive into more details.

## What is `document` ?

To understand `document`, the below images helpful.

Web page is constructed like below.

![dom-image](http://todd-henderson.me/assets/images/2014/DOM-Tree.png)

Ref: http://todd-henderson.me/tutorials/javascript/building-a-javascript-library-part-1/

#### In our case

![window-document-html-body-div](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/javascript-guide/window-document-html-body-div.jpg)

This is why we can access **`div#demo`**
```js
document.getElementById('demo');
```
And

```
getElementById(id)
```

is a method of `document`

https://developer.mozilla.org/en-US/docs/Web/API/Document#Methods

## What is `let` ?
> The let statement **declares** a block scope local **variable**, optionally initializing it to a value.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

:::note
It is enough to remember that **`let`** is used to declare variable.
```js
  let x = document.getElementById('demo');

  x.onclick = function () {
    x.innerHTML = "Help me";
    x.style = "color: red";
  }
```
:::


## What is `event` ?
There are lots of event in javascript, let's try another event other than `onclick`

### Try different "Event" `onmouseover`

In `test4.html`

```html title="test4.html"
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <title>Hello, world!</title>
</head>

<body>
  <h1>Hello, world!</h1>

  <div id="demo">Click here</div>
  <!-- highlight-next-line -->
  <div id="hover-me">Hover me!</div>

  <!-- Optional JavaScript -->
  <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> -->
  <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
  <script>
    // Comment out before code.
    // document.getElementById('demo').onclick = function changeContent() {
    //   document.getElementById('demo').innerHTML = "Help me";
    //   document.getElementById('demo').style = "color: red";
    // }

    // Get target element
    let demoElement = document.getElementById('demo');

    // Add function to the demoElement's `onclick` event.
    // you can skip function name 'changeContent'
    demoElement.onclick = function () {
      // Do something towards target Element
      demoElement.innerHTML = "Help me";
      demoElement.style = "color: red";
    }

    // highlight-start
    let hoverMeElement = document.getElementById('hover-me');

    hoverMeElement.onmouseover = function () {
      hoverMeElement.innerHTML = "Help me";
      hoverMeElement.style = "color: red";
    }
    // highlight-end
  </script>
</body>

</html>
```


### Common html event
![common-html-events](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/javascript-guide/common-html-events.png)

:::note
- You don't need to remember these events
- It is enough to understand that there are various **Events**
:::


## `window.alert`

Okay, let's try some different js code.

https://www.w3schools.com/js/js_output.asp

`test4.html`
```html
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <title>Hello, world!</title>
</head>

<body>
  <h1>Hello, world!</h1>

  <div id="demo">Click here</div>
  <div id="alert">Alert Click!</div>

  <!-- Optional JavaScript -->
  <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> -->
  <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
  <script>
    // document.getElementById('demo').onclick = function changeContent() {
    //   document.getElementById('demo').innerHTML = "Help me";
    //   document.getElementById('demo').style = "color: red";
    // }

    // Get Target element
    let demoElement = document.getElementById('demo');

    // Add onclick function to the #demoElement.
    // you can skip function name 'changeContent'
    demoElement.onclick = function () {
      demoElement.innerHTML = "Help me";
      demoElement.style = "color: red";
    }

    // Get Target element
    let alertElement = document.getElementById('alert');

    // Attach function to `onclick` method
    alertElement.onclick = function () {
      window.alert('Alert!!!!!!!!!!');
    }
  </script>
</body>

</html>
```

### Check the output


### Api docs
https://developer.mozilla.org/en-US/docs/Web/API/Window


## `console.log`




## Summery

:::note summery
 - You don't need to memorize every javascript docs.
 - Just memorizing the code introduced here is enough.
 - You will become able to search by yourself at the end of this course
:::