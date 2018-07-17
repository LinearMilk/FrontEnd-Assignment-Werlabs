"use strict";

// Load plugins
var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");

//dev server
gulp.task("webserver", function() {
  connect.server({
    livereload: true
  });
});

// SCSS
gulp.task("scss", function() {
  gulp
    .src("scss/werlabs.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )

    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("css"))
    .pipe(connect.reload());
});

// Watch
gulp.task("watch", function() {
  gulp.watch(["scss/*.scss"], ["scss"]);
});

gulp.task("default", ["scss", "webserver", "watch"]);
