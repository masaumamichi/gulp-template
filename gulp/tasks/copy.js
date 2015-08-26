var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var C = require('../config');

// src/copy -> dest へコピーする
gulp.task('copy', function () {
    return gulp.src(
        [C.src.copy + '/**'],
        {base: C.src.copy}
    )
        .pipe(gulp.dest(C.dest.copy));
});
