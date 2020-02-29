---
title: How to add Forum like disqus in docusaurus
author: kohheepeace
author_url: 'https://github.com/kohheepeace'
author_image_url: >-
  https://avatars3.githubusercontent.com/u/29557494?s=400&u=e613f0acaae1f51e7e96530b95437d2d69bad713&v=4
tags:
  - docusaurus
  - Disqus
published: true
---


I will introduce how to add "comment forum like Disqus" in docusaurus site 😄

<!--truncate-->

## What we will make
By using https://utteranc.es/, we will make comment system like below.

![ss](https://storage.googleapis.com/coderhackers-assets/blog/ss-of-forum-in-docusaurus.png)

## Github setup
Your github repo should
- public
- Go to [utterances app](https://github.com/apps/utterances) and "Click Configure" button.

## Swizzle theme DocItem and BlogPostPage
#### `terminal`
```bash
yarn run swizzle @docusaurus/theme-classic DocItem BlogPostPage
```

## Edit `DocItem`
Add highlighted code lines.
#### `src/theme/DocItem/index.js`
```js {1,5-17,33}
import React, {useEffect} from 'react';

...
function DocItem(props) {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://utteranc.es/client.js";
    script.setAttribute('repo', "KohheePeace/coderhackers");
    script.setAttribute('issue-term', "pathname");
    script.setAttribute('label', "comment");
    script.setAttribute('theme',"github-light");
    script.crossOrigin = "anonymous";
    script.async = true;

    document.getElementById("comment-system").appendChild(script);
  }, []);

  ...

  return (
    <>
      ...
      <div className="padding-vert--lg">
        <div className="container">
          <div className="row">
            <div className={classnames('col', styles.docItemCol)}>
              <div className={styles.docItemContainer}>
                ...
                <div className="margin-vert--lg">
                  <DocPaginator metadata={metadata} />
                </div>
                <div id="comment-system"></div>
              </div>
            </div>
            ...
          </div>
        </div>
      </div>
    </>
  );
}

export default DocItem;
```

#### Edit `BlogPostPage`
Add highlighted code lines.
#### `src/theme/BlogPostPage/index.js`
```js {1,8-20,44}
import React, {useEffect} from 'react';

import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';

function BlogPostPage(props) {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://utteranc.es/client.js";
    script.setAttribute('repo', "KohheePeace/coderhackers");
    script.setAttribute('issue-term', "pathname");
    script.setAttribute('label', "comment");
    script.setAttribute('theme',"github-light");
    script.crossOrigin = "anonymous";
    script.async = true;

    document.getElementById("comment-system").appendChild(script);
  }, []);

  const {content: BlogPostContents} = props;
  const {frontMatter, metadata} = BlogPostContents;
  return (
    <Layout title={metadata.title} description={metadata.description}>
      {BlogPostContents && (
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <BlogPostItem
                frontMatter={frontMatter}
                metadata={metadata}
                isBlogPostPage>
                <BlogPostContents />
              </BlogPostItem>
              {(metadata.nextItem || metadata.prevItem) && (
                <div className="margin-vert--xl">
                  <BlogPostPaginator
                    nextItem={metadata.nextItem}
                    prevItem={metadata.prevItem}
                  />
                </div>
              )}
              <div id="comment-system"></div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default BlogPostPage;
```