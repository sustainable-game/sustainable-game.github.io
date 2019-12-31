# sustainable-game.github.io
Sustainable Game の公式Webサイトです。

## 動かし方

ローカル環境で開発・デザインをするときは Jekyll と Node.js が必要です。  
それぞれをセットアップしたら、次の手順で localhost 上にWebサイトを表示します。

$ npm install  
(初回のみ) npm ライブラリのインストール  
$ bundle install  
(初回のみ) gem ライブラリのインストール  
$ bundle exec jekyll server  
ローカルサーバーの立ち上げ  
立ち上がったらブラウザから localhost:4000 にアクセス  
成功すれば https://www.sustainablegame.com/ と同じ画面が表示されます。 その後、開発・修正したいファイルを適宜編集していきます。(再起動は不要)

## 投稿の手順
1. _posts ディレクトリ内に、年-月-日-記事タイトル(英語).md の形式のファイルを作る
2. 1で作ったファイルに以下のテンプレートに沿って入力
```yml
---
layout: post
title:  "記事のタイトル"
date:  投稿日時(例: 2019-11-10 15:00:00 +0900)
categories: イベント記事の場合は event , プレスリリースの場合は pressrelease ,ブログ記事は blog に設定
thumbnail: サムネイル画像のパス(/assets/img/内にいれること)
---
記事本文(Markdown記法)
```
