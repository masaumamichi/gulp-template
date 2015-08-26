var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('src/img/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    imgPath: '/img/sprite.png',
    cssFormat: 'scss'
  }));
  spriteData.img.pipe(gulp.dest('dest/img'));
  spriteData.css.pipe(gulp.dest('src/resource/sass/'));
});
