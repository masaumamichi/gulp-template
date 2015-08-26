var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var C = require('../config');

// src/copy -> dest へコピーする
gulp.task('imageCopy', function () {
    return gulp.src(
        [C.src.img + '/**'],
        {base: C.src.img}
    )
        .pipe(gulp.dest(C.dest.img));
});
