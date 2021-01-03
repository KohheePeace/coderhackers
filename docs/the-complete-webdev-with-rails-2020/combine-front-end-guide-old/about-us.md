---
title: About us section
---

## About Us Section
I edited https://bootstrapmade.com/demo/NewBiz/ About section for easy understanding.

It **only** includes Bootstrap class, so if you don't understand some class please google it.

*When recording write this code step by step.

```html
<!-- About Us -->
<section id="about-us">
  <div class="container">
    <header class="pb-5">
      <h1 class="text-center font-weight-bold">About Us</h1>
      <p class="text-center w-50 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        incididunt ut labore et dolore magna aliqua.</p>
    </header>

    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-1 order-lg-2">
          <img src="img/about-easy-collaboration.svg" class="img-fluid" alt="about-easy-collaboration">
        </div>

        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
          <h2 class="font-weight-bold">Easy Collaboration</h2>
          <p>
            Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo
            qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis
            beatae incidunt sunt.
          </p>
          <p>
            Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias.
            Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
          </p>
          <p>
            Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga
            mollitia
            exercitationem nam accusantium provident quia.
          </p>
        </div>
      </div>

      <div class="row pt-5">
        <div class="col-lg-6">
          <img src="img/about-knowledge-bases.svg" class="img-fluid" alt="about-knowledge-bases">
        </div>
        <div class="col-lg-6 pt-5 pt-lg-0">
          <h2 class="font-weight-bold">Knowledge Bases</h2>
          <p>
            Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis
            occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
          </p>
          <p>
            Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt
            veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
          </p>
        </div>
      </div>

      <div class="row pt-5">
        <div class="col-lg-6 order-1 order-lg-2">
          <img src="img/about-interaction-design.svg" class="img-fluid" alt="about-interaction-design">
        </div>

        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
          <h2 class="font-weight-bold">Interaction Design</h2>
          <p>
            Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo
            qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis
            beatae incidunt sunt.
          </p>
          <p>
            Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias.
            Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
          </p>
          <p>
            Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga
            mollitia
            exercitationem nam accusantium provident quia.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- # About Us -->
```

### Add images of about section
Download images from https://undraw.co/search

Please search, download, move to `img` folder and rename it.

| Search Word        | Rename filename              |
| ------------------ | ---------------------------- |
| team spirit        | about-easy-collaboration.svg |
| teacher            | about-knowledge-bases.svg    |
| interaction design | about-interaction-design.svg |

![about-us-img-folder](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/the-complete-webdev-with-rails-2020/combine-front-end-guide/about-us-img-folder.png)

### Check how some bootstrap class works

Let's check what happenes if you delte `order-lg-2` using google dev tools

![how-order-class-works](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/the-complete-webdev-with-rails-2020/combine-front-end-guide/how-order-class-works.gif)

Do you understand the meaning of class ?

```html
order-1 order-lg-2
```
means...

By default the image column is on the left side (order-1).

But if window size is large, it is on the right side (order-lg-2).