---
id: success-making-blog
title: Successfuly Making Blog
author: kohheepeace
author_title: hogehoge
author_url: https://github.com/kohheepeace
author_image_url: https://avatars3.githubusercontent.com/u/29557494?s=400&u=e613f0acaae1f51e7e96530b95437d2d69bad713&v=4
tags: [diary]
---


I managed to make my own blog 😄

## Tech Stack
- [docusaurus 2](https://v2.docusaurus.io) for Blog and Document
- [Prose.io](https://github.com/prose/prose) for CMS
- [Netlify](https://www.netlify.com/) for Deploy


## What I wanted...
I wanted my blog site for managing not only blog but also tutorial contents.


## Looping sidebar contents
By doing this, you don't need to write sidebar strcture.
(*Note If you struct docs in order like below.)
![sidebar](https://storage.googleapis.com/coderhackers-assets/blog/docusaurus-sidebar-auto-lookup.png)

#### `sidebars.js`

```js
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
  secondSidebar: {
    ...
  },
};
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg4NjcwNzk3N119
-->