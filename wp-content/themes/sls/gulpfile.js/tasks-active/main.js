// ==== MAIN ==== //

var gulp = require('gulp');

// Default task chain: build -> (livereload or browsersync) -> watch
gulp.task('default', ['watch']);

// Default task chain: build -> (livereload or browsersync) -> watch
gulp.task('start', ['images', 'scripts', 'styles', 'theme', 'fonts', 'video', 'sass-lint', 'watch']);
gulp.task('s', ['images', 'scripts', 'styles', 'theme', 'fonts', 'video', 'sass-lint', 'watch']);

// Build a working copy of the theme
gulp.task('build', ['images', 'scripts', 'styles', 'theme', 'fonts', 'video', 'sass-lint']);

// Dist task chain: wipe -> build -> clean -> copy -> images/styles
// NOTE: this is a resource-intensive task!
gulp.task('dist', ['images-dist', 'styles-dist']);
