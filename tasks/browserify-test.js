
import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import glob from 'glob';
import tsify from 'tsify';

export default () => 

  browserify(glob.sync('./test/**/*.ts'), { paths: ['./lib'], debug: true })
    .plugin(tsify, {
      noImplicitAny: false,
      out: 'output.js',
      module: 'commonjs',
      sourceMap: true,
      moduleResolution: 'node'
    })
    .exclude('../shims/window')
    .require('./shims/browser-window.ts', { expose: '../shims/window' })
    .bundle()
    .pipe(source('bundle.test.js'))
    .pipe(gulp.dest('./dist'));