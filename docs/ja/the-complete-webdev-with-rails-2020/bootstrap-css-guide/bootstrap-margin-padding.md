---
title: Bootstrap Margin and Padding
---

## ゴール
- ⚡ Learn Bootstrap margin and padding utilities


## What is this ?
Bootstrap offers <mark>**`classes` to add margin or padding**</mark> responsively.

https://getbootstrap.com/docs/4.5/utilities/spacing/

By using these `classes`, **you don't need to write CSS** for just adding margin or padding.

## For example

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
  margin-bottom: 24px;
}
```

**But by using Bootstrap utilities**

You just need to add `mb-4`

```html title="html file"
<div>
  <!-- highlight-next-line -->
  <h1 class="mb-4">Hello World!</h1>
  <p>Good morning</p>
</div>
```

![](/docs/img/20200522_081850.gif)


:::caution
I will explain `rem` in the future step.
:::

Okay, so Let's check this margin and padding utilities syntax.

## Margin
### Without breakpoint
**`m{sides}-{size}`**

It will be applied to all breakpoints.

```html
<!--margin top 2 -->
mt-2

<!--margin bottom 1 -->
mb-1

<!--margin left 3 -->
ml-3

<!--margin right auto -->
mr-auto

<!--margin left and right 2 -->
mx-2

<!--margin top and bottom 2 -->
my-2
```

### With breakpoint: `sm, md, lg, and xl`

**`m{sides}-{breakpoint}-{size}`**

It will be applied to **<mark>that one breakpoint and all those above it</mark>**.

```html
<!-- If viewport width is bigger than `lg`, margin top 2 -->
mt-lg-2

<!-- If viewport width is bigger than `xl`, margin bottom 3 -->
mb-xl-3
```

## Padding
### Without breakpoint

**`p{sides}-{size}`**

It will be applied to all breakpoints.
```html
<!--padding top 2 -->
pt-2

<!--padding bottom 1 -->
pb-1

<!--padding left 3 -->
pl-3

<!--padding right auto -->
pr-auto

<!--padding left and right 2 -->
px-2

<!--padding top and bottom 2 -->
py-2
```

### With breakpoint: `sm, md, lg, and xl`

**`p{sides}-{breakpoint}-{size}`**

It will be applied to **<mark>that one breakpoint and all those above it</mark>**.

```html
<!-- If screen size is bigger than `lg`, padding top 2 -->
pt-lg-2

<!-- If screen size is bigger than `xl`, padding bottom 3 -->
pb-xl-3
```


## Use case

:::note Use case
- we need `margin-bottom` for mobile and tablet
- we don't need `margin-bottom` for laptop
:::


![](/docs/img/20200522_092929.gif)
https://frontend-combine-demo.now.sh/

```html
<!-- highlight-next-line -->
<div class="mb-5 mb-lg-0">
```

