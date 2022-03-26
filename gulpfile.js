const gulp = require('gulp');
const gfi = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));

gulp.task('build', function () {
    return gulp.src(['./page/*.html'])
        .pipe(gfi())
        .pipe(gulp.dest("./build"));
})

gulp.task('sass', function () {
    return gulp.src(['./sass/*.scss'])
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('./css'))
});
