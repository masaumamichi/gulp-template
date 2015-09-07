var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var C = require('../config');
var changed = require('gulp-changed');

// src/copy -> dest へコピーする
gulp.task('imgCopy', function () {
    return gulp.src(C.src.imgCopy)
    .pipe(changed(C.dest.imgCopy))  // 変更ファイルのみコピー
    .pipe(gulp.dest(C.dest.imgCopy));
});
