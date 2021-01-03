---
title: Carousel
---

<!-- Todo -->
普通にowl-carousel使ったほうがいいかも。


## Carousel
Copy and Paste 
https://getbootstrap.com/docs/4.5/components/carousel/#with-indicators

![copy-carousel-code](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/the-complete-webdev-with-rails-2020/combine-front-end-guide/copy-carousel-code.gif)

### Paste the code to index.html
Please paste this code under about us section.

This code does not work because there is no img.

```html
<!-- Testimonials -->
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!-- # Testimonials -->
```

### Add dummy h1 tag to see how it works
```html hl_lines="1 9 12 15"
<div id="carouselExampleIndicators" class="carousel slide bg-primary" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <h1>Slide 1</h1>
    </div>
    <div class="carousel-item">
      <h1>Slide 2</h1>
    </div>
    <div class="carousel-item">
      <h1>Slide 3</h1>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

Check the output here...
![check-carousel-work-with-h1.gif](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/the-complete-webdev-with-rails-2020/combine-front-end-guide/check-carousel-work-with-h1.gif)


### Add section header
```html hl_lines="2 3 4"
<div id="carouselExampleIndicators" class="carousel slide bg-primary" data-ride="carousel">
  <header class="pt-4 pb-3">
    <h1 class="text-center text-white font-weight-bold">Testimonials</h1>
  </header>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <h1>Slide 1</h1>
    </div>
    <div class="carousel-item">
      <h1>Slide 2</h1>
    </div>
    <div class="carousel-item">
      <h1>Slide 3</h1>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

### Download Portrait 640x640
Please download your favorite portrait from below.

https://www.pexels.com/search/portrait/


Please change the suze to **640x640**.
![download-portrait-square](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/the-complete-webdev-with-rails-2020/combine-front-end-guide/download-portrait-square.png)

After you donwload images, please move it under `img` folder and rename it to `portrait-1 2 3`.

### Replace dummy h1 tag
```html
<div id="carouselExampleIndicators" class="carousel slide bg-primary" data-ride="carousel">
  <header class="pt-4 pb-3">
    <h1 class="text-center text-white font-weight-bold">Testimonials</h1>
  </header>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style="width: 90px;" src="img/portrait-1.jpg" class="mb-3 rounded-circle border border-white" alt="...">
      <h5 class="mt-0">Jimmy Donaldson</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla.
      </p>
    </div>
    <div class="carousel-item">
      <img style="width: 90px;" src="img/portrait-2.jpg" class="mb-3 rounded-circle border border-white" alt="...">
      <h5 class="mt-0">Morgan Adams</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla.
      </p>
    </div>
    <div class="carousel-item">
      <img style="width: 90px;" src="img/portrait-3.jpg" class="mb-3 rounded-circle border border-white" alt="...">
      <h5 class="mt-0">Chandler Hallow</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla.
      </p>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

![check-carousel-2.gif](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/the-complete-webdev-with-rails-2020/combine-front-end-guide/check-carousel-2.gif)

### Add styles
```html hl_lines="4 11 12 19 26"
<!-- Testimonials -->
<div id="carouselExampleIndicators" class="carousel slide bg-primary" data-ride="carousel" style="height: 350px;">
  <header class="pt-4 pb-3">
    <h1 class="text-center text-white font-weight-bold">Testimonials</h1>
  </header>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner px-4 text-white">
    <div class="carousel-item text-center active">
      <img style="width: 90px;" src="img/portrait-1.jpg" class="mb-3 rounded-circle border border-white" alt="...">
      <h5 class="mt-0">Jimmy Donaldson</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla.
      </p>
    </div>
    <div class="carousel-item text-center">
      <img style="width: 90px;" src="img/portrait-2.jpg" class="mb-3 rounded-circle border border-white" alt="...">
      <h5 class="mt-0">Morgan Adams</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla.
      </p>
    </div>
    <div class="carousel-item text-center">
      <img style="width: 90px;" src="img/portrait-3.jpg" class="mb-3 rounded-circle border border-white" alt="...">
      <h5 class="mt-0">Chandler Hallow</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla.
      </p>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<!-- # Testimonials -->
```