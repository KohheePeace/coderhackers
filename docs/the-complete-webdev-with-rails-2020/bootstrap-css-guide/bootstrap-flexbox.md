---
title: Bootstrap Flexbox
---

## Goal
- ⚡ Learn bootstrap Flexbox class


## What is this ?
Bootstrap provides flexbox utilities classes.

By adding these **`classes`**, <mark>you don't need to write your custom CSS to use Flexbox.</mark>

https://getbootstrap.com/docs/4.5/utilities/flex/


## For example
To use flexbox, you need to write every time like below.

Remember this site https://css-tricks.com/snippets/css/a-guide-to-flexbox/

**It is troublesome** to write separate CSS every time to use Flexbox. 😭

```html title="html file"
<div class="flex-container">
  <div>item 1</div>
  <div class="item-2">item 2</div>
  <div>item 3</div>
</div>
```

```css title="css file"
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.item-2 {
  flex-grow: 3;
}
```

## Solutions by Bootstrap
If you use bootstrap's Flexbox utilities, it becomes **just adding `class`es**.
```html
<div class="d-flex flex-column align-items-center justify-content-end">
  <div>item 1</div>
  <div class="flex-grow-3">item 2</div>
  <div>item 3</div>
</div>
```
So, you don't need to write CSS by yourself.