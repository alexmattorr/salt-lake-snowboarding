var gulp = require('gulp');
var gutil = require('gulp-util');
var commandLineArgs = require('command-line-args');
var _gulpStart = gulp.Gulp.prototype.start;
var _runTask = gulp.Gulp.prototype._runTask;

// Grab the command line args so know what values to send to browsersync... true || false
var cli = commandLineArgs([{
  name: 'openBrowser',
  type: String,
  multiple: false,
  defaultOption: true
}]);
var options = cli.parse();

var openBrowser;
if (options.openBrowser) {
  // if gulp start || gulp s was entered than we want browsersync to open a window
  openBrowser = true;
} else {
  // otherwise do not auto open window
  openBrowser = false;
}

// Project paths
var project = 'kni-gulp',
  src = './src/',
  build = './build/',
  dist = './dist/' + project + '/',
  npm = './node_modules/',
  composer = './vendor/';

// Project settings
module.exports = {

  browsersync: {
    files: [build + '/**', '!' + build + '/**.map'],
    notify: false,
    open: openBrowser,
    port: 1111,
    proxy: 'http://kni-wp/', //Replace this on per-project basis
    watchOptions: {
      debounceDelay: 2000
    }
  },

  images: {
    build: {
      src: src + '**/*(*.png|*.jpg|*.jpeg|*.gif|*.ico|*.svg)',
      dest: build
    },
    dist: {
      src: [dist + '**/*(*.png|*.jpg|*.jpeg|*.gif|*.ico|*.svg)', '!' + dist +
        'screenshot.png'
      ],
      imagemin: {
        optimizationLevel: 7,
        progressive: true,
        interlaced: true
      },
      dest: dist
    }
  },

  scripts: {
    bundles: {
      core: ['vendor', 'core']
    },
    chunks: {
      vendor: [
        // npm + 'jquery/dist/jquery.min.js'
      ],

      core: [
        src + 'js/*.js',
        src + 'js/vendor/*.js',
        src + 'js/modules/*.js'
      ]
    },
    dest: build + 'js/',
    lint: {
      src: [src + 'js/**/*.js']
    },
    minify: {
      src: [build + 'js/**/*.js', '!' + build + 'js/**/*.min.js'],
      rename: {
        suffix: '.min'
      },
      uglify: {},
      dest: build + 'js/'
    },
    namespace: ''
  },

  styles: {
    build: {
      src: [src + 'scss/*.scss', '!' + src + 'scss/_*.scss'],
      dest: build
    },
    dist: {
      src: [dist + '**/*.css', '!' + dist + '**/*.min.css'],
      minify: {
        keepSpecialComments: 1,
        roundingPrecision: 3
      },
      dest: dist
    },
    compiler: 'libsass',
    autoprefixer: {
      browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']
    },
    rename: {
      suffix: '.min'
    },
    minify: {
      keepSpecialComments: 1,
      roundingPrecision: 3
    },
    rubySass: {
      loadPath: npm,
      precision: 6,
      'sourcemap=none': true
    },
    libsass: {
      includePaths: [npm],
      precision: 6
    }
  },

  fonts: {
    build: {
      src: src + '**/*(*.eof|*.ttf|*.woff)',
      dest: build
    }
  },

  video: {
    build: {
      src: src + '**/*(*.mp4|*.m4v|*.webm)',
      dest: build
    }
  },

  theme: {
    lang: {
      src: src + 'languages/**/*',
      dest: build + 'languages/'
    },
    php: {
      src: src + '**/*.php',
      dest: build
    }
  },

  utils: {
    clean: [build + '**/.DS_Store'],
    wipe: [dist],
    dist: {
      src: [build + '**/*', '!' + build + '**/*.min.css'],
      dest: dist
    }
  },

  watch: {
    src: {
      styles: src + 'scss/**/*.scss',
      scripts: [src + 'js/**/*.js'],
      images: src + '**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)',
      theme: src + '**/*.php',
    },
    watcher: 'browsersync'
  }
};
