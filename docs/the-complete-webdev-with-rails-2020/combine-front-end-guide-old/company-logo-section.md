---
title: Company Logo Section
---

## Company Logos section
Use code from this site.

https://startbootstrap.com/previews/agency/

```html
<!-- Company Logos -->
<section class="py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <a href="#">
          <img class="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="">
        </a>
      </div>
      <div class="col-md-3 col-sm-6">
        <a href="#">
          <img class="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="">
        </a>
      </div>
      <div class="col-md-3 col-sm-6">
        <a href="#">
          <img class="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="">
        </a>
      </div>
      <div class="col-md-3 col-sm-6">
        <a href="#">
          <img class="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="">
        </a>
      </div>
    </div>
  </div>
</section>
<!-- # Company Logos -->
```

### Change img src path and Add border-bottom

From
```
img/logos/envato.jpg
```
to
```
https://blackrockdigital.github.io/startbootstrap-agency/img/logos/envato.jpg
```

```html hl_lines="2 7 12 17"
<!-- Company Logos -->
<section class="py-5 border-bottom">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
        <a href="#">
          <img class="img-fluid d-block mx-auto" src="https://blackrockdigital.github.io/startbootstrap-agency/img/logos/envato.jpg" alt="">
        </a>
      </div>
      <div class="col-md-3 col-sm-6">
        <a href="#">
          <img class="img-fluid d-block mx-auto" src="https://blackrockdigital.github.io/startbootstrap-agency/img/logos/designmodo.jpg" alt="">
        </a>
      </div>
      <div class="col-md-3 col-sm-6">
        <a href="#">
          <img class="img-fluid d-block mx-auto" src="https://blackrockdigital.github.io/startbootstrap-agency/img/logos/themeforest.jpg" alt="">
        </a>
      </div>
      <div class="col-md-3 col-sm-6">
        <a href="#">
          <img class="img-fluid d-block mx-auto" src="https://blackrockdigital.github.io/startbootstrap-agency/img/logos/creative-market.jpg" alt="">
        </a>
      </div>
    </div>
  </div>
</section>
<!-- # Company Logos -->
```