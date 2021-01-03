---
title: Step5-2 Note about import
---

In this step, we are going to

- Learn how to import files in flutter

## Note about **"import"**
There are two types of `import` in flutter
- package imports
- relative imports

![flutter-import-files](https://coderhackers-1304676641.cos.ap-tokyo.myqcloud.com/docs/img/2020-04-17-05-34-02.png)


https://stackoverflow.com/questions/50732897/whats-the-different-between-full-path-and-relative-path-in-dart

## But
According to flutter maintainer, we should use `package imports`.


> I think the conclusion to this problem was that lib/main.dart should **always only contain package imports**, then Dart is able to canonicalize libraries properly no matter what form the imports are in other libraries.

https://github.com/flutter/flutter-intellij/issues/2015

And I also encountered VS code code completion issue when using `relative imports`.

That's why in this course, we're going to use `packages import`.