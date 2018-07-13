'use strict'

// Load plugins
var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');


// SCSS
gulp.task('scss', function () {
    gulp.src('scss/werlabs.scss')
        .pipe(sourcemaps.init())

        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest('css'))
});


// Watch
gulp.task('default', function() {
    gulp.watch(['scss/werlabs.scss'], ['scss']);
});
