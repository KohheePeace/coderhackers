// https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
const fs = require("fs");

const reactCrud2aFolder = "./docs/crud2a-react-react-router/";
let crud2aReactReactRouterFiles = [];

fs.readdirSync(reactCrud2aFolder).forEach((file) => {
  const filePath = `crud2a-react-react-router/${file.split(".")[0]}`;
  crud2aReactReactRouterFiles.push(filePath);
});

const flutterCrud2aFolder = "./docs/flutter-crud2a/";
let futterCrud2aFiles = [];

fs.readdirSync(flutterCrud2aFolder).forEach((file) => {
  if (file == "manuscript") return;
  const filePath = `flutter-crud2a/${file.split(".")[0]}`;
  futterCrud2aFiles.push(filePath);
});

module.exports = {
  crud2aReactReactRouter: crud2aReactReactRouterFiles,
  flutterCrud2a: [
    "flutter-crud2a/introduction",
    "flutter-crud2a/install-flutter-sdk",
    "flutter-crud2a/setup-vscode-editor",
    "flutter-crud2a/create-flutter-app",
    "flutter-crud2a/write-initial-counter-app-from-scratch",
    {
      "Step5 Folder Structure": [
        "flutter-crud2a/prepare-files",
        "flutter-crud2a/note-about-import",
      ],
    },
    {
      "Step6 Add Drawer and Routing": [
        "flutter-crud2a/add-drawer",
        "flutter-crud2a/add-routing",
      ],
    },
    "flutter-crud2a/setup-firebase",
    {
      "Step8 Edit Register Page": [
        "flutter-crud2a/edit-register-page/overview",
        "flutter-crud2a/edit-register-page/build-a-form-with-validation",
        "flutter-crud2a/edit-register-page/styling-text-form-field",
        "flutter-crud2a/edit-register-page/fix-render-flex-error",
        "flutter-crud2a/edit-register-page/retrieve-value-from-text-form-field",
        "flutter-crud2a/edit-register-page/improve-validation",
        "flutter-crud2a/edit-register-page/add-firebase-auth",
      ],
    },
    "flutter-crud2a/login-page",
    "flutter-crud2a/change-content-by-user-state",
    "flutter-crud2a/provider-basics",
    "flutter-crud2a/multi-provider",
    "flutter-crud2a/change-notifier-provider",
    "flutter-crud2a/stream-provider",
    "flutter-crud2a/recap-the-flow-of-state-management",
    "flutter-crud2a/create-user-in-firestore",
    "flutter-crud2a/create-post",
    "flutter-crud2a/list-posts",
    "flutter-crud2a/show-post-page",
    "flutter-crud2a/my-posts-page",
    "flutter-crud2a/delete-post",
    "flutter-crud2a/edit-post-page",
    "flutter-crud2a/firestore-security-rules",
    "flutter-crud2a/firestore-security-rules-test",
  ],
  theCompleteWebDevWithRails2020: [
    "the-complete-webdev-with-rails-2020/introduction",
    "the-complete-webdev-with-rails-2020/udemy-course-comparison",
    "the-complete-webdev-with-rails-2020/install-chrome-browser",
    "the-complete-webdev-with-rails-2020/install-editor",
    "the-complete-webdev-with-rails-2020/terminal",
    {
      HTML: [
        "the-complete-webdev-with-rails-2020/html-guide/html-intro",
        "the-complete-webdev-with-rails-2020/html-guide/understand-basic-html",
        "the-complete-webdev-with-rails-2020/html-guide/play-with-html",
        "the-complete-webdev-with-rails-2020/html-guide/img-tag",
        "the-complete-webdev-with-rails-2020/html-guide/a-tag",
        "the-complete-webdev-with-rails-2020/html-guide/relative-and-absolute-path",
        "the-complete-webdev-with-rails-2020/html-guide/check-web-flow",
      ],
    },
    {
      CSS: [
        "the-complete-webdev-with-rails-2020/css-guide/intro",
        "the-complete-webdev-with-rails-2020/css-guide/3-writing-ways-of-css",
        "the-complete-webdev-with-rails-2020/css-guide/class-and-id",
        "the-complete-webdev-with-rails-2020/css-guide/google-dev-tools",
        "the-complete-webdev-with-rails-2020/css-guide/margin-and-padding",
        "the-complete-webdev-with-rails-2020/css-guide/play-with-padding",
        "the-complete-webdev-with-rails-2020/css-guide/play-with-margin",
        "the-complete-webdev-with-rails-2020/css-guide/media-query",
        "the-complete-webdev-with-rails-2020/css-guide/flexbox",
        "the-complete-webdev-with-rails-2020/css-guide/flexbox-navbar",
        "the-complete-webdev-with-rails-2020/css-guide/complex-css",
      ],
    },
    {
      "Bootstrap CSS": [
        "the-complete-webdev-with-rails-2020/bootstrap-css-guide/intro",
        "the-complete-webdev-with-rails-2020/bootstrap-css-guide/play-with-bootstrap",
        "the-complete-webdev-with-rails-2020/bootstrap-css-guide/component",
        "the-complete-webdev-with-rails-2020/bootstrap-css-guide/layout",
        "the-complete-webdev-with-rails-2020/bootstrap-css-guide/col",
        "the-complete-webdev-with-rails-2020/bootstrap-css-guide/combine-with-custom-css",
        // "the-complete-webdev-with-rails-2020/bootstrap-css-guide/check-examples-page",
        "the-complete-webdev-with-rails-2020/bootstrap-css-guide/bootstrap-margin-padding",
        "the-complete-webdev-with-rails-2020/bootstrap-css-guide/bootstrap-flexbox",
        "the-complete-webdev-with-rails-2020/bootstrap-css-guide/px-em-rem",
      ],
    },
    {
      JavaScript: [
        "the-complete-webdev-with-rails-2020/javascript-guide/intro",
        "the-complete-webdev-with-rails-2020/javascript-guide/get-used-to-javascript",
        // "the-complete-webdev-with-rails-2020/javascript-guide/play-with-javascript",
        "the-complete-webdev-with-rails-2020/javascript-guide/dom-document",
        "the-complete-webdev-with-rails-2020/javascript-guide/element",
        "the-complete-webdev-with-rails-2020/javascript-guide/dive-into-javascript",
        "the-complete-webdev-with-rails-2020/javascript-guide/various-writing-ways",
      ],
    },
    {
      jQuery: [
        "the-complete-webdev-with-rails-2020/jquery-guide/intro",
        "the-complete-webdev-with-rails-2020/jquery-guide/play-with-jquery",
      ],
    },
    {
      "JavaScript for Bootstrap": [
        "the-complete-webdev-with-rails-2020/bootstrap-js-guide/01-intro",
        "the-complete-webdev-with-rails-2020/bootstrap-js-guide/02-manual-js",
      ],
    },
    {
      "🔥 Combine all front end": [
        "the-complete-webdev-with-rails-2020/combine-front-end-guide/intro",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide/navbar",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide/jumbotron",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide/about-us",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide/footer",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide/jquery-scroll",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide/favicon",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide/deploy",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide/illustration-resources",
      ],
    },
    {
      "Combine all front end Old": [
        "the-complete-webdev-with-rails-2020/combine-front-end-guide-old/intro",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide-old/navbar",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide-old/jumbotron",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide-old/about-us",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide-old/carousel",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide-old/company-logo-section",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide-old/footer",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide-old/jquery-back-to-top",
        "the-complete-webdev-with-rails-2020/combine-front-end-guide-old/deploy",
      ],
    },
    "the-complete-webdev-with-rails-2020/recap-frontend",
    "the-complete-webdev-with-rails-2020/coffee-break1",
    {
      Git: [
        "the-complete-webdev-with-rails-2020/git-guide/intro",
        "the-complete-webdev-with-rails-2020/git-guide/benefit",
      ],
    },
    {
      "Rails Basics": [
        "the-complete-webdev-with-rails-2020/rails-guide-basics/overview",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter01",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter02",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter03",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter04",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter05",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter07",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter08",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter09",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter10",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter11",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter12",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter13",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/chapter14",
        "the-complete-webdev-with-rails-2020/rails-guide-basics/memo",
      ],
    },
    {
      "Rails Real World": [
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/overview",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/chapter01",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/chapter02",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/chapter03",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/chapter04",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/chapter05",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/install-bootstrap",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/jquery-setup-memo",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/devise-memo",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/css-convention",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/arrangement",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/scaffold-post",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/action-text",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/profile-page",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/friendly-id",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/username",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/active-storage",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/post-thumbnail",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/publish-post",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/pagination",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/change-email",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/flash-message",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/post-comment",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/mailer",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/stripe-flow-overview",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/stripe-connect-seller-side",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/add-price-to-post",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/stripe-connect-buyer-side-checkout",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/stripe-connect-buyer-side-checkout-send-post",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/stripe-checkout-with-connect",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/post-checkout-refactor",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/stripe-success-cancel-page",
        "the-complete-webdev-with-rails-2020/rails-guide-real-world/create-order-model",
      ],
    },
  ],
};
