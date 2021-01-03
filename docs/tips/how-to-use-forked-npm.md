---
title: 🍕 How to use forked npm package
---

## Question
- 🐯 What if you want to use a forked npm package in your project?

![20200612203410](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/20200612203410.png)

## Develop locally
First of all, you want to fix the npm that you forked, so clone it locally.

```bash title="terminal"
git clone fork-repo-url
```

Next, we want to use this cloned npm package in a different project locally, so we'll use `npm link`.

```bash title="terminal"
cd fork-repo
npm link
```

Type `npm link fork-repo` in the project where you want to use the forked npm package.

```bash title="Terminal: project you want to use forked npm package"
npm link fork-repo
```

## Commit and push modifications
Once the npm package has been modified locally, it's time to commit and push it.

```
git commit -m "fix npm package"
git push
```

## Using remote forked npm packages in the production environment
Now let's use the remote repository where you pushed your changes in the production environment.

```bash title="Terminal: Project directory you want to use forked npm package"
yarn add fork-url
# yarn add https://github.com/KohheePeace/docusaurus-lunr-search
```

Now you can use a remote forked github repository in your project.
