// https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
const fs = require('fs');

const reactCrud2aFolder = './docs/crud2a-react-react-router/';
let crud2aReactReactRouterFiles = [];

fs.readdirSync(reactCrud2aFolder).forEach(file => {
  const filePath = `crud2a-react-react-router/${file.split(".")[0]}`;
  crud2aReactReactRouterFiles.push(filePath);
});

const flutterCrud2aFolder = './docs/flutter-crud2a/';
let futterCrud2aFiles = [];

fs.readdirSync(flutterCrud2aFolder).forEach(file => {
  if (file == 'manuscript') return;
  const filePath = `flutter-crud2a/${file.split(".")[0]}`;
  futterCrud2aFiles.push(filePath);
});

module.exports = {
  crud2aReactReactRouter: crud2aReactReactRouterFiles,
  flutterCrud2a: [
    'flutter-crud2a/install-flutter-sdk',
    'flutter-crud2a/setup-vscode-editor',
    'flutter-crud2a/create-flutter-app',
    'flutter-crud2a/write-initial-counter-app-from-scratch',
    'flutter-crud2a/folder-structure',
    'flutter-crud2a/add-drawer-and-routing',
    'flutter-crud2a/setup-firebase',
    'flutter-crud2a/edit-register-page',
    'flutter-crud2a/login-page',
    'flutter-crud2a/change-content-by-user-state',
    'flutter-crud2a/provider-basics',
    'flutter-crud2a/multi-provider',
    'flutter-crud2a/change-notifier-provider',
    'flutter-crud2a/stream-provider',
    'flutter-crud2a/recap-the-flow-of-state-management',
    'flutter-crud2a/create-user-in-firestore',
    'flutter-crud2a/create-post',
    'flutter-crud2a/list-posts',
    'flutter-crud2a/show-post-page',
    'flutter-crud2a/my-posts-page',
    'flutter-crud2a/delete-post',
    'flutter-crud2a/edit-post-page',
    'flutter-crud2a/firestore-security-rules',
  ]
};