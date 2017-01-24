const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

gulp.task('copy-html', function () {
  gulp.src('./source/index.html')
    .pipe(gulp.dest('./'))
})

gulp.task('copy-images', function () {
  gulp.src('./source/images/*')
    .pipe(gulp.dest('./images'))
})

gulp.task('styles', function () {
  gulp.src('./source/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
})

gulp.task('scripts', function () {
  return gulp.src('./source/js/**/*.js')
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./js'))
})

gulp.task('default', ['copy-html', 'copy-images', 'styles', 'scripts'], function () {
  gulp.watch('./source/sass/**/*.sass', ['styles'])
  gulp.watch('./source/index.html', ['copy-html'])
  gulp.watch('./source/js/**/*.js', ['scripts'])
  gulp.watch('./index.html', browserSync.reload)

  browserSync.init({
    server: './'
  })
})
