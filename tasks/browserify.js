
import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import tsify from 'tsify';

export default () => 

  browserify('./lib/index.ts', { debug: true })
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
    .pipe(source('bundle.dev.js'))
    .pipe(gulp.dest('./dist'));