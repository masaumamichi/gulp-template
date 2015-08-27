var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var C = require('../config');
var changed = require('gulp-changed');

// src/copy -> dest へコピーする
gulp.task('imageCopy', function () {
    return gulp.src(C.src.img)
    .pipe(changed(C.dest.img))  // 変更ファイルのみコピー
    .pipe(gulp.dest(C.dest.img));
});
