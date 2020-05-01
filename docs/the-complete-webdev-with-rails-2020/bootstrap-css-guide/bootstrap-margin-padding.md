---
title: Bootstrap Margin and Padding
---

## Overview
In this step, we're going to 
- 🍫Learn Bootstrap margin and padding utilities


## What is this ?
Bootstrap offers <mark>**`class` to add margin or padding**</mark> responsively.

https://getbootstrap.com/docs/4.4/utilities/spacing/

By using this `class`, **you don't need to write CSS** for just adding margin or padding.

### For example
If you want to add `margin-bottom` to `<h1>`
```html title="html file"
<div>
  <h1>Hello World!</h1>
  <p>Good morning</p>
</div>
```

You need to

1. add `class` to `h1`
2. write css for that `class`

```html title="html file"
<div>
  <!-- highlight-next-line -->
  <h1 class="hello-world-title">Hello World!</h1>
  <p>Good morning</p>
</div>
```

```css title="css file"
.hello-world-title {
  margin-bottom: 32px;
}
```

#### But with Bootstrap utilities
You just need to add `mb-4`

```html title="html file"
<div>
  <!-- highlight-next-line -->
  <h1 class="mb-4">Hello World!</h1>
  <p>Good morning</p>
</div>
```

## Syntax

Let's check this utilities syntax

### Margin
#### When screen size is `xs`
**`m{sides}-{size}`**
```html
<!--margin top 2 -->
mt-2

<!--margin bottom 1 -->
mb-1

<!--margin left 3 -->
ml-3

<!--margin right auto -->
mr-auto
```

#### When screen size is `sm, md, lg, and xl`
**`m{sides}-{breakpoint}-{size}`**
```html
<!-- If screen size is bigger than `lg`, margin top 2 -->
mt-lg-2

<!-- If screen size is bigger than `xl`, margin bottom 3 -->
mb-xl-3
```

### Padding

#### When screen size is `xs`
**`p{sides}-{size}`**
```html
<!--padding top 2 -->
pt-2

<!--padding bottom 1 -->
pb-1

<!--padding left 3 -->
pl-3

<!--padding right auto -->
pr-auto
```

#### When screen size is `sm, md, lg, and xl`
**`p{sides}-{breakpoint}-{size}`**
```html
<!-- If screen size is bigger than `lg`, padding top 2 -->
pt-lg-2

<!-- If screen size is bigger than `xl`, padding bottom 3 -->
pb-xl-3
```


## Usecase