---
title: CSS Colors
---

## Goal
- ⚡ Learn CSS colors

## Comparison

| name   | hex       | rgb                | hsl                  |
| ------ | --------- | ------------------ | -------------------- |
| yellow | `#ffff00` | `rgb(255, 255, 0)` | `hsl(60, 100%, 50%)` |

This is all representing same color **"yellow"**

https://www.w3schools.com/colors/colors_converter.asp

![](../../img/2020-05-14-05-51-42.png)

```css title="CSS usage example"
color: yellow;

color: #ffff00;

color: rgb(255, 255, 0);

color: hsl(60, 100%, 50%);
```


## Change transparency or opacity
`rbga` and `hsla` change the **opacity**.

`0.0` (fully transparent) to `1.0` (fully opaque).

Let's check this link
https://www.w3schools.com/css/css_colors_rgb.asp

:::important
`rgba`: `rgba(255, 255, 0, 0.8)` => **opacity: 0.8** of the `rgb(255, 255, 0)`

`hsla`: `hsla(60, 100%, 50%, 0.8)` => **opacity: 0.8** of the `hsl(60, 100%, 50%)`
:::

## Which should I use ?
It depends, so I show you my use case.

:::info
1. `hex` is first option
2. If I want to change opacity of color, I use `rgba`
3. I haven't used `hsl`
:::

## Refs

https://developer.mozilla.org/en-US/docs/Web/CSS/color#rgba()