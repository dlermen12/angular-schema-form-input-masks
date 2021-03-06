/* global require */

var gulp = require('gulp');

var templateCache = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var streamqueue = require('streamqueue');
var jscs = require('gulp-jscs');
var plumber = require('gulp-plumber');
var htmlreplace = require('gulp-html-replace');
var fs = require('fs');

gulp.task('minify', function() {
  var common = fs.readFileSync('./src/input-common-attributes.html').toString();
  var stream = streamqueue({objectMode: true});
  stream.queue(
      gulp.src('./src/input.html')
          .pipe(htmlreplace({
            common: common
          }))
          .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
          }))
          .pipe(templateCache({
            module: 'schemaForm',
            root: 'directives/decorators/bootstrap/inputmasks/'
          }))
  );
  stream.queue(gulp.src('./src/*.js'));

  stream.done()
      .pipe(concat('dist/input-masks.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('.'));

});

gulp.task('non-minified-dist', function() {
  var common = fs.readFileSync('./src/input-common-attributes.html').toString();
  var stream = streamqueue({objectMode: true});
  stream.queue(
      gulp.src('./src/input.html')
          .pipe(htmlreplace({
            common: common
          }))
          .pipe(templateCache({
            module: 'schemaForm',
            root: 'directives/decorators/bootstrap/inputmasks/'
          }))
  );
  stream.queue(gulp.src('./src/*.js'));

  stream.done()
      .pipe(concat('dist/input-masks.js'))
      .pipe(gulp.dest('.'));

});

gulp.task('jscs', function() {
  gulp.src('./src/**/*.js')
      .pipe(plumber())
      .pipe(jscs({esnext: true}));
});

gulp.task('default', [
  'minify',
  'non-minified-dist',
  'jscs'
]);

gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['default']);
});
