---
title: Bootstrap JS with custom JavaScript
---

## Goal
  - ⚡ Make a feature something like below gif.

![document-ready-show-modal](https://coderhackers-1302290683.cos.ap-singapore.myqcloud.com/20200526_222117.gif)

:::info Specifications
1. When user visit your website
2. Show modal to announce something (ex: wikipedia donation)
:::


## Preparation
- Make `custom.js` in `bootstrap-js-test` folder
- Include `custom.js` in `bootstrap-js-test1.html`

```html title="bootstrap-js-test1.html"
<!DOCTYPE html>
<html lang="en">
    ...

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>

    <!-- highlight-start -->
    <!-- Custom javascript -->
    <script src="custom.js"></script>
    <!-- highlight-end -->
  </body>
</html>
```

:::caution
- Order of javascript file is important.
- We will use jQuery in `custom.js` file, that's why it should be `jQuery` => `custom.js`
:::

## Do something when user visit website
To do something when user visit website, you can use `$(document).ready()`.

### Add `$(document).ready()`
https://learn.jquery.com/using-jquery-core/document-ready/

```js title="bootstrap-js-test/custom.js"
$(document).ready(function () {
  console.log("ready!");
});
```

### Check the output

![](https://storage.googleapis.com/coderhackers-assets/docs/img/20200510_030230.gif)

### Refactor
This is a shorthand of  `$(document).ready()`
```js title="bootstrap-js-test/custom.js"
$(function() {
  console.log("ready!");
});
```

## Add code to open modal
This is a code to open modal manually.
```js
$('#myModal').modal('show')
```
https://getbootstrap.com/docs/4.5/components/modal/#modalshow

Then, change the target `id` for our code

```js title="custom.js"
$(function () {
  // highlight-next-line
  $("#exampleModal").modal("show");
});
```

## Edit modal title and body
```html title="bootstrap-js-test1.html"
...
<!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- highlight-start -->
            <h5 class="modal-title" id="exampleModalLabel">We need your help</h5>
            <!-- highlight-end -->
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- highlight-start -->
            <p>
              We need your help to maintain our website. Commodo sit anim
              laboris exercitation elit tempor anim veniam duis in. Nulla
              aliquip culpa pariatur irure eu deserunt. Dolore cupidatat
              reprehenderit occaecat commodo aliqua. Eiusmod qui ipsum
              exercitation et et adipisicing laboris. Exercitation ad
              adipisicing duis elit consectetur et voluptate officia dolore
              exercitation pariatur. Anim duis et ad velit et velit esse esse eu
              cillum nulla. Non voluptate culpa ad culpa labore sit minim elit.
            </p>
            <!-- highlight-end -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
...
```

## Check the output
check it works correctly here...