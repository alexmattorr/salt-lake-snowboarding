// ==== VIDEOS ==== //

var gulp        = require('gulp')
  , plugins     = require('gulp-load-plugins')({ camelize: true })
  , config      = require('../../gulpconfig').video
;

// Copy changed videos from the source folder to `build`
gulp.task('video-copy', function() {
  return gulp.src(config.build.src)
  .pipe(plugins.changed(config.build.dest))
  .pipe(gulp.dest(config.build.dest));
});

gulp.task('video', ['video-copy']);
