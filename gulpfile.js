'use strict';

/* ------------------------------------ *\
    Includes
\* ------------------------------------ */

var gulp = require('gulp');
// Pump - https://github.com/mafintosh/pump
var pump = require('pump');
// Sass autocompile - https://github.com/dlmanning/gulp-sass
var sass = require('gulp-sass');
// CSS Autoprefixer - https://github.com/sindresorhus/gulp-autoprefixer
var autoprefixer = require('gulp-autoprefixer');
// Concat ("merge JS") - https://github.com/contra/gulp-concat 
var concat = require('gulp-concat');
// JS Uglyfy - https://www.npmjs.com/package/gulp-uglify
var uglify = require('gulp-uglify');
// BrowserSync - https://www.browsersync.io
var browserSync = require('browser-sync').create();
// Sourcemaps - https://github.com/gulp-sourcemaps/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

/* ------------------------------------ *\
    Paths
    - https://arwhd.co/2015/05/18/svg-gulp-workflow/
\* ------------------------------------ */

const paths = {
  // templates
  template: '**/*.html',
  // CSS
  scss: 'scss/**/*.scss',
  css: 'css',
  // JS
  js: 'js/src/',
  js_in: 'js/src/**/*.js',
  js_out: 'js',
}


/* ------------------------------------ *\
    Tasks
\* ------------------------------------ */

// Compile Sass to CSS (and minify) + feed updates to BrowserSync
gulp.task('sass', function (cb) {
  pump([
    gulp.src(paths.scss),
    sourcemaps.init(),
    sass({outputStyle: 'compressed'}).on('error', sass.logError),
    autoprefixer({
      browsers: ['> 0.01%'], // https://github.com/ai/browserslist#queries
      cascade: false
    }),
    sourcemaps.write(''),
    gulp.dest(paths.css),
    browserSync.reload({
      stream: true
    }),
  ], cb );
});


// Concatenate JavaScript and uglify
gulp.task('scripts', function (cb) {
  pump([
    gulp.src([
      paths.js + 'jquery-1.11.2.min.js',
      paths.js + 'brickst.js',
    ]),
    sourcemaps.init(),
    concat('app.js'),
    uglify(),
    sourcemaps.write(''),
    gulp.dest(paths.js_out),
    browserSync.reload({
      stream: true
    }),
  ], cb );
});


// Launch BrowserSync server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});


// Watch for Sass/JS changes and compile + BrowserSync
//gulp.task('watch', ['browserSync', 'sass'], function () {
gulp.task('watch', ['browserSync', 'sass', 'scripts'], function () {
  gulp.watch(paths.scss, ['sass']);
  gulp.watch(paths.js_in, ['scripts']);
  gulp.watch(paths.template, browserSync.reload); 
});

// Manual build (Sass compiling, JS concat/uglify)
gulp.task('build', ['sass', 'scripts'], function (){
  console.log('-- Building files');
});

gulp.task('default', ['build'], function (){
});