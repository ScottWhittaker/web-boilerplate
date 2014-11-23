'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var reload = browserSync.reload;

var config = {
    css: {
        dest: './app/css'
    },
    html: {
        source: './app/**/*.html'
    },
    js: {
        source: './app/js/**/*.js'
    },
    less: {
        root: './app/less/app.less',
        source: './app/less/**/*.less'
    }
};

gulp.task('browserSync', function () {
    return browserSync({
        server: {
            baseDir: './app'
        },
        browser: ['google chrome canary']
    });
});

gulp.task('html', function () {
    return gulp.src(config.html.source)
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    return gulp.src(config.js.source)
        .pipe(reload({stream: true}));
});

gulp.task('less', function () {
    return gulp.src(config.less.root)
        .pipe(less())
        .pipe(gulp.dest(config.css.dest))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['less', 'browserSync'], function () {
    gulp.watch(config.html.source, ['html']);
    gulp.watch(config.js.source, ['js']);
    gulp.watch(config.less.source, ['less']);
});