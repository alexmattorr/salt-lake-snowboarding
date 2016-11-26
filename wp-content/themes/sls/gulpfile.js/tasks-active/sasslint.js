// ==== SassLinting ==== //

var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');

gulp.task('sass-lint', function () {
  gulp.src('src/scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
