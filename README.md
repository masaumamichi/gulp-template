# gulp-template
gulpのよく使うやつ集めたテンプレート

## 構造
```
├─ dest	  // コンパイル先ディレクトリ
│
├─ gulp   // gulpファイル
│   ├── config.js  // パス等設定ファイル
│   ├── tasks      // 実行されるタスク
│   └── util
│
├─ node_modules
│
└─ src    // 開発用ディレクトリ
    ├── copy   // そのままdestへコピーされる
    ├── ejs    // ejsをコンパイルしてdestへ
    ├── js     // main.jsをコンパイルしてdestへ
    └── sass   // sassファイルをコンパイルしてdestへ
```

### ビルドツール  

* Gulp              タスクランナー
* gulp-ejs          ejs -> html コンパイル
* gulp-ruby-sass    sass -> css コンパイル
* browserify        jsファイルを統合
* js-hint           jsファイルのチェック
* BrowserSync       ローカルサーバーを起動
* gulp.spritesmith  スプライト画像を作成


## インストール

npm install する

```
$ cd [プロジェクのディレクトリネーム]
$ npm i
```
　
## 実行


### gulp起動
BrowserSyncでサーバーを起動し、sass, html, jsファイルをwatchする

```
$ gulp
```

## 変えるとこ
gulp/config.js
```
└─ gulp
   └── config.js  // 設定ファイル
```
コンパイルに用いる各ディレクトリパス, autoprefixerに用いるブラウザバージョンを変えて。
