
const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
 

export default () =>

  gulp.src('lib/**/*.ts')
    .pipe(ts({
      noImplicitAny: false,
      // out: 'index.js',
      module: 'commonjs',
      sourceMap: true,
      moduleResolution: 'node'
    }))
    .pipe(gulp.dest('dist/lib'));