var gulp = require('gulp');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var reload = browserSync.reload;

var cssDest = './app/css';
var htmlSource = './app/**/*.html';
var jsSource = './app/js/**/*.js';
var lessAppRoot = './app/less/app.less';
var lessSource = './app/less/**/*.less';

gulp.task('browserSync', function () {
    return browserSync({
        server: {
            baseDir: './app'
        },
        browser: ['google chrome canary']
    });
});

gulp.task('html', function () {
    return gulp.src(htmlSource)
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    return gulp.src(jsSource)
        .pipe(reload({stream: true}));
});

gulp.task('less', function () {
    return gulp.src(lessAppRoot)
        .pipe(less())
        .pipe(gulp.dest(cssDest))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['less', 'browserSync'], function () {
    gulp.watch(htmlSource, ['html']);
    gulp.watch(jsSource, ['js']);
    gulp.watch(lessSource, ['less']);
});