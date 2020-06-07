---
title: Deploy
---

## ゴール
- ⚡ Learn how to deploy.

## What is deploy?
> **Software deployment** is all of the activities that **make a software system available for use**.

https://en.wikipedia.org/wiki/Software_deployment

Currently our website can be accessed by only you.

By deploying your website, others can access your site.


## Install Node

### Check if you have already installed node and npm.

Please

In `terminal`
```sh
node -v
# highlight-next-line
v10.10.0
npm -v
# highlight-next-line
6.4.1
```

If you have not installed node js,

please download nodejs <mark>**"LTS"** version</mark>

https://nodejs.org/


After you finish download, please check if it shows version.

```sh
node -v
# highlight-next-line
v10.10.0
npm -v
# highlight-next-line
6.4.1
```

## Zeit "now"
https://zeit.co/

### Create zeit account
Please create zeit account.

### Install "now"

In `terminal`
```sh
npm i -g now
```


### Login with now
In `terminal`

```sh
now login
```

And follow the logs in terminal.

### Deploy with now

Under the `bootstrap-combine-demo` folder,

Just type **`now`**

```sh title="terminal"
$ now
> Deploying ~/Code/important/bootstrap-combine-demo under kohheepeace
> Using project bootstrap-combine-demo
> Synced 198 files (2.24MB) [3s]
> https://bootstrap-combine-demo-7tcwel6ys.now.sh [v2] [859ms]
> Ready! Aliased to https://bootstrap-combine-demo.kohheepeace.now.sh [in clipboard] [5s]
```

Visit URL...
