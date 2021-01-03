---
title: Deploy
---

## ゴール
- ⚡ このステップでは、deployの仕方を学びましょう!

## Deployとは？
> **Software deployment** is all of the activities that <mark>**make a software system available for use**</mark>.

https://en.wikipedia.org/wiki/Software_deployment

今作っているウェブサイトは、自分だけしかアクセスできません。

**<mark>urlを指定すれば誰でもアクセスできるようにするためには、デプロイする必要があります。</mark>**


## Vercel
![20200609230223](https://coderhackers-1304676641.cos.ap-singapore.myqcloud.com/20200609230223.png)
https://vercel.com/

**Vercelはウェブサイトを簡単にデプロイできるサービスです。**

今回はこのサービスを使用してサイトをデプロイしましょう。


## 下準備

### vercelのアカウントを作成する
Vercelのアカウントを作成してください。事前にGithubアカウントを作成してログインするのがおすすめです。

https://vercel.com/login

### Nodeをインストールする

vercelのコマンドラインツールをダウンロードするには**Node**が必要なのでまずインストールしましょう。

最初に、**すでにnodeとnpmがインストールされているかどうか**を確認します。

`terminal`で以下のコマンドを入力してください。**バージョンが表示された場合はすでにインストールされています。**

```sh
node -v
# highlight-next-line
v10.10.0
npm -v
# highlight-next-line
6.4.1
```

**もしnodeとnpmがインストールされていない場合**は、以下のリンクから<mark>**"LTS"** バージョン</mark>をインストールしてください。

nodeをインストールすると同時にnpmもインストールされます。

https://nodejs.org/en/download/


**インストールが完了したら再度ターミナルで正しくインストールされているかチェックしましょう。**

バージョンが表示されたら正しくインストールされています。

```sh
node -v
# highlight-next-line
v10.10.0
npm -v
# highlight-next-line
6.4.1
```

### Vercelのコマンドラインツールをダウンロードする。

次にvercelのコマンドラインツールをダウンロードしましょう。

https://vercel.com/download

`terminal`で以下のコマンドを叩いてください。
```sh
npm i -g vercel
```


## vercelにログインする
vercelのコマンドラインツールがインストールできたので、vercelのアカウントにログインしましょう。

`terminal`で以下のコマンドを叩いてください。

```sh
vercel login
```

メールアドレスを入力して、エンターを押し、送られてくるメールでverifyしてください。

## vercelを使ってデプロイする

では、vercelを使ってサイトをデプロイしましょう。

`frontend-combine`フォルダの下でただ`vercel`とタイプするだけでデプロイできます。

ターミナルから質問されますが、**すべて"Enter"を押してください**。デフォルトの設定が適用されます。

```sh title="terminal in "
$ vercel
```

デプロイが完了したら、urlが自動的にクリップボードにコピーされているので、ブラウザにペーストしましょう。