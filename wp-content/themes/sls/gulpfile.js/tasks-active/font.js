// ==== FONTS ==== //

var gulp        = require('gulp')
  , plugins     = require('gulp-load-plugins')({ camelize: true })
  , config      = require('../../gulpconfig').fonts
;

// Copy changed images from the source folder to `build` (fast)
gulp.task('fonts-copy', function() {
  return gulp.src(config.build.src)
  .pipe(plugins.changed(config.build.dest))
  .pipe(gulp.dest(config.build.dest));
});

gulp.task('fonts', ['fonts-copy']);
