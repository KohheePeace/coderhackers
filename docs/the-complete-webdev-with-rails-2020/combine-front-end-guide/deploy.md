---
title: Deploy
---

- Learn how to deploy.
- Learn how to use deploy service.

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
kohheepeace@kohheepeacenoMacBook bootstrap-combine-demo $ node -v
v10.10.0
kohheepeace@kohheepeacenoMacBook bootstrap-combine-demo $ npm -v
6.4.1
kohheepeace@kohheepeacenoMacBook bootstrap-combine-demo $ 
```

If you have not installed node js, please download nodejs.

https://nodejs.org/

You will find tutorial to download on youtube.

After you finish dowload, please check if it shows version.

```bash
kohheepeace@kohheepeacenoMacBook bootstrap-combine-demo $ node -v
v10.10.0
kohheepeace@kohheepeacenoMacBook bootstrap-combine-demo $ npm -v
6.4.1
kohheepeace@kohheepeacenoMacBook bootstrap-combine-demo $ 
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
kohheepeace@kohheepeacenoMacBook bootstrap-combine-demo $ now
> Deploying ~/Code/important/bootstrap-combine-demo under kohheepeace
> Using project bootstrap-combine-demo
> Synced 198 files (2.24MB) [3s]
> https://bootstrap-combine-demo-7tcwel6ys.now.sh [v2] [859ms]
> Ready! Aliased to https://bootstrap-combine-demo.kohheepeace.now.sh [in clipboard] [5s]
```

Visit URL...


## Summery
