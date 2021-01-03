---
title: Deploy
---

## Goal
- ⚡ In this step we''ll learn how to deploy!

## What is Deploy?
> **Software deployment** is all of the activities that <mark>**make a software system available for use**</mark>.

https://en.wikipedia.org/wiki/Software_deployment

The website we're building now can only be accessed by you.

To make it accessible to everyone if they specify a url, **<mark> you need to deploy. </mark>**


## Vercel
![20200609230223](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200609230223.png)
https://vercel.com/

**Vercel is a service that makes it easy to deploy your website.**

In this case, let's use this service to deploy our site.


## Preparation

### Create a vercel account
Create a Vercel account. It is recommended to create a Github account beforehand and log in via github.

https://vercel.com/login

### Install Node

You will need **Node** to download the vercel command line tool, so install it first.

First, **check to see if node and npm are already installed.**

Type the following command in terminal. **If you see the version, it's already installed.**

```sh
node -v
# highlight-next-line
v10.10.0
npm -v
# highlight-next-line
6.4.1
```
**If you don't have node and npm installed**, please click the link below to install the LTS version.

When you install node, npm is installed at the same time.

https://nodejs.org/en/download/


When the installation is complete, check again in the terminal to make sure it is installed correctly.

If you see the version, it has been installed correctly.

```sh
node -v
# highlight-next-line
v10.10.0
npm -v
# highlight-next-line
6.4.1
```

### Download Vercel's command line tool.

Next, let's download the vercel command line tool.

https://vercel.com/download

Type the following command in `terminal`.
```sh
npm i -g vercel
```


## Login to vercel
Now that you have the vercel command line tool installed, let's log in to your vercel account.

Type the following command in `terminal`.

```sh
vercel login
```

Enter your email address and press enter to VERIFY in the email you receive.

## Deploy with vercel

Now, let's deploy the site using vercel.

Under the `frontend-combine` folder, just type `vercel` to deploy.

When prompted by the terminal, **press "Enter" on everything**. The default settings are applied.

```sh title="terminal in "
$ vercel
```
Once the deployment is complete, the url is automatically copied to the clipboard and you can paste it into your browser.