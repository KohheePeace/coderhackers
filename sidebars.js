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
  flutterCrud2a: futterCrud2aFiles,
};