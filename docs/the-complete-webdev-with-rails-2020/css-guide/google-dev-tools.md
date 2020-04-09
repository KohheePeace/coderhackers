---
title: Chrome DevTools
---

In this chapter, we are going to
- Learn how to use **Chrome DevTools** to detect CSS.

## Open DevTools
`Command+Shift+C (Mac)` or `Control+Shift+C (Windows, Linux)`

![open-google-dev-tools](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/css-guide/open-google-dev-tools.gif)

You see the applied css
![detect-applied-css](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/css-guide/detect-applied-css.png)


:::info
  - **`user agent stylesheet`** is a **default CSS of web browser** (chrome, safari etc...)
  - That's why the appearance differs slightly in each browser
:::

## Detect real world CSS
So, let's check real world website CSS.
https://rubyonrails.org/

![rails-website-chrome-devtools.png](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/css-guide/rails-website-chrome-devtools.png)


### Responsive view
![rails-website-chrome-devtools-mobile.png](https://storage.googleapis.com/coderhackers-assets/the-complete-webdev-with-rails-2020/css-guide/rails-website-chrome-devtools-mobile.png)

```html
<a href="https://weblog.rubyonrails.org/2020/3/19/Rails-6-0-2-2-and-5-2-4-2-has-been-released/">
    Latest version — Rails 6.0.2.2 <span class="hide-mobile">released March 19, 2020</span>
</a>
```

:::note
- Famous website CSS is really complex.
- After you finish this course, choose one of theme of this site (https://startbootstrap.com/themes/)
:::

## Refs
https://developers.google.com/web/tools/chrome-devtools