var gulp = require('gulp');
var C = require('../config');

// 実行
gulp.task('default', ['imageCopy', 'ejs', 'sass', 'watch']);
