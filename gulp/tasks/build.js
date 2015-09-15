'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var C = require('../config');
var runSequence = require('run-sequence');

// destを空にする
gulp.task('clean', function() {
    return del(C.dest.root);
});
// logを出力
gulp.task('outLog', function() {
    return $.util.log($.util.colors.green('Building...'));
});
// buildタスクを定義
gulp.task('build', function() {
    return runSequence(
        'outLog',
        'clean',
        ['imgCopy', 'ejs', 'sass', 'browserify-prod']
    );
});
