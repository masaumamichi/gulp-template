var gulp = require('gulp');
var C = require('../config');
var $ = require('gulp-load-plugins');

// watch
gulp.task('watch', ['watchify', 'browser-sync'],function () {

	gulp.watch(C.srcRoot+'/**/*.js', ['lint:js']);
	gulp.watch(C.srcEjs+'/**/*.ejs', ['ejs']);
	gulp.watch(C.srcSass+'/**/*.scss', ['sass']);
	gulp.watch(C.srcCopy, ['copy']);

    // imagesも追加したほうがいいかも

});
