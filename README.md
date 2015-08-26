# gulp-templete
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

* Gulp
* gulp-ejs
* gulp-ruby-sass
* browserify
* js-hint
* BrowserSync
* gulp.spritesmith


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
