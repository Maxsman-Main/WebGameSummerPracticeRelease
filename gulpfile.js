var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var watchify = require("watchify");
var tsify = require("tsify");
var fancy_log = require("fancy-log");

var paths = {
    pages: ['src/*.html'],
    images: ['src/images/**'],
    styles: ['src/sass/**/*.sass'],
    scripts: ['src/scripts/**/*.ts']
}

gulp.task('images', () => {
    return gulp.src(paths.images).pipe(gulp.dest('dist/images/'));
});

gulp.task('sass', () => {
    return gulp.src(paths.styles).pipe(sass()).pipe(gulp.dest('dist/css'));
});

gulp.task('html', () => {
    return gulp.src(paths.pages).pipe(gulp.dest('dist/'));
});

gulp.task('ts', () => {
    return browserify({
        basedir: ".",
        debug: true,
        entries: ["src/scripts/main.ts"],
        cache: {},
        packageCache: {}
    }).plugin(tsify).bundle().pipe(source("bundle.js")).pipe(gulp.dest("dist"));
});

gulp.task('default', () => {
    gulp.series('html', 'sass', 'ts', 'images')();
    gulp.watch(paths.pages, gulp.series('html'));
    gulp.watch(paths.styles, gulp.series('sass'));
    gulp.watch(paths.scripts, gulp.series('ts'));
    gulp.watch(paths.images, gulp.series('images'));
});
