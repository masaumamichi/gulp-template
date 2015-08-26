var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var C = require('../config');

// src/copy -> dest へコピーする
gulp.task('copy', function () {
    return gulp.src(
        [C.srcCopy + '/**'],
        {base: C.srcCopy}
    )
        .pipe(gulp.dest(C.destCopy));
});