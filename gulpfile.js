var gulp = require('gulp');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var reload = browserSync.reload;

var htmlSource = './app/**/*.html';
var jsSource = './app/js/**/*.js';
var lessSource = './app/less/**/*.less';

gulp.task('browserSync', function(){
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

gulp.task('less', function() {
    return gulp.src(lessSource)
        .pipe(less())
        .pipe(gulp.dest('./app/css'))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['less', 'browserSync'], function() {
    gulp.watch(htmlSource, ['html']);
    gulp.watch(jsSource, ['js']);
    gulp.watch(lessSource, ['less']);
});