// jshint esversion: 6
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const less = require('gulp-less');
const gulp = require('gulp');
const minifyCSS = require('gulp-minify-css');

gulp.task('buildjs', function () {
  const javascriptFiles = [
    './js/*.js'
  ];
  return gulp.src(javascriptFiles)
             .pipe(concat('index.all.js'))
             .pipe(gulp.dest('./dist/'))
             .pipe(uglify())
             .pipe(rename('index.all.min.js'))
             .pipe(gulp.dest('./dist/'));
});

gulp.task('buildstyles', function () {
  const styleFiles = [
      'less/*.less'
  ];
  return gulp.src(styleFiles)
        .pipe(concat('styles.all.less'))
        .pipe(less())
        .pipe(rename('styles.all.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(minifyCSS())
        .pipe(rename('styles.all.min.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('buildassets', function () {
  const assetFiles = ['./assets/*.png'];
  gulp.src(assetFiles).pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['buildjs', 'buildassets']);

gulp.task('watch', function () {
  return gulp.watch(files, ['build']);
});

gulp.task('default', ['build', 'watch']);
