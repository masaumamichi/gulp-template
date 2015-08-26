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

## 編集項目
gulp/config.js にgulpに使うディレクトリパスが書いてあるので、必要ならこれを編集する
