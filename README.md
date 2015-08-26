# gulp-templete
gulpのよく使うやつ集めたテンプレート

## 構造
```
├─dest				// コンパイル先ディレクトリ
│  
├─gulp				// gulpファイル
│
├─node_modules
│
└── src       // 開発用ディレクトリ
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
* BrowserSync


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
