var gulp          = require('gulp'),
    gulpUtil      = require('gulp-util'),
    jshint        = require('gulp-jshint'),
    concat        = require('gulp-concat'),
    autoprefixer  = require('gulp-autoprefixer'),
    jade          = require('gulp-jade'),
    uglify        = require('gulp-uglify'),
    connect       = require('gulp-connect'),
    rename        = require('gulp-rename'),
    qunit         = require('node-qunit-phantomjs');

//Server task
gulp.task('connect', function(){
  connect.server({
    root: ['dist'],
    port: 8000,
    base: 'http://localhost',
    livereload: true
  });
});

//Bower Components - JS Files
gulp.task('vendorJS', function(){
  gulp.src([
    'bower_components/jquery/dist/jquery.min.js'
  ])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('dist/vendor/js'));
});


// JSHint task
gulp.task('lint', function() {
  gulp.src('app/scripts/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(connect.reload());
});

//Jade task
gulp.task('templates', function() {
  var YOUR_LOCALS = {};
  gulp.src('app/index.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
          'app/scripts/app.js',
          'app/scripts/models/*.js',
          'app/scripts/controllers/*.js'
        ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('bundle.min.js'))
        .pipe(uglify().on('error', gulpUtil.log))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

gulp.task('qunit', function() {
    qunit('./test/calculatorOperations.html');
});

// Dev task
gulp.task('dev', ['connect', 'vendorJS','lint', 'templates', 'scripts', 'qunit'], function() { });


gulp.task('watch', ['lint'], function() {
  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
    'lint'
  ]);

  gulp.watch(['app/index.jade'], [
    'templates'
  ]);

  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'], [
    'scripts'
  ]);
});

gulp.task('default', ['dev', 'watch']);
