// https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
const docsFolder1 = './docs/crud2a-react-react-router/';
const fs = require('fs');

// array of 'crud2a-react-react-router/00-intro' etc...
let crud2aReactReactRouterFiles = [];

fs.readdirSync(docsFolder1).forEach(file => {
  const filePath = `crud2a-react-react-router/${file.split(".")[0]}`;
  crud2aReactReactRouterFiles.push(filePath);
});

module.exports = {
  crud2aReactReactRouter: crud2aReactReactRouterFiles,
  docs: {
    Guides: [
      {
        type: 'category',
        label: 'Docs',
        items: ['doc1', 'doc2'],
      },
    ],
  },
};