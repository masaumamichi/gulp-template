var gulp = require('gulp');
var browserifyTask = require('./browserify');
var C = require('../config');
var ejs = require('gulp-ejs');
var browserSync = require('browser-sync');


// ejsのコンパイル
gulp.task("ejs", function() {
    gulp.src(
      [C.srcEjs + '/**/*.ejs']
    )
    .pipe(ejs())
    .pipe(gulp.dest(C.destRoot))
    .pipe(browserSync.reload({ stream : true }));;
});
