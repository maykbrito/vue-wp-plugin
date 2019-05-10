import gulp from 'gulp';

const dir = {
  src: './',
  build: './puglin-directory/',
};

const copyAndPasteToDestination = path =>
  gulp.src(path.src).pipe(gulp.dest(path.build));

export function php() {
  const path = {
    src: `${dir.src}./**/*.php`,
    build: dir.build,
  };

  return copyAndPasteToDestination(path);
}

export function classes() {
  const path = {
    src: `${dir.src}classes/**/*.php`,
    build: `${dir.build}classes/`,
  };

  return copyAndPasteToDestination(path);
}

export function js() {
  const path = {
    src: `${dir.src}dist/js/**/*`,
    build: `${dir.build}js/`,
    filename: 'scripts.js',
  };
  return copyAndPasteToDestination(path);
}

const build = gulp.series(php, gulp.parallel(classes, js));

export default build;
