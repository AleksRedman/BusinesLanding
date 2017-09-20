'use strict';

var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var pug           = require('gulp-pug');
var sass          = require('gulp-sass');
var spritesmith   = require('gulp.spritesmith');
var rimraf        = require('rimraf');
var rename        = require('gulp-rename');

/*------------------- SERVER ---------------------*/

gulp.task('server', function () {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });
    
    gulp.watch('build/**/*').on('change', browserSync.reload);
});


/*------------------- PUG COMPILE ---------------------*/

/*gulp.task('templates:compile', function buildHTML() {
    return gulp.src('sourse/templates/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});*/

/*------------------- SASS COMPILE ---------------------*/

