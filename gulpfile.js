var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('jekyll', function() {
  return gulp.src('_pages/index.html', { read: false })
    .pipe(shell([
      'JEKYLL_ENV=production bundle exec jekyll build'
  ]));
});

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html');

gulp.task('html', ['jekyll'], function() {
    return gulp.src('_site/**/*.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(gulp.dest('_site/'));
});

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    importCss = require('gulp-import-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uncss = require('gulp-uncss'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    glob = require('glob');

gulp.task('css', ['jekyll'], function() {
   return gulp.src('css/style.scss')
       .pipe(sass())
       .pipe(importCss())
       .pipe(autoprefixer())
       .pipe(uncss({
           html: glob.sync("_site/**/*.html"),
           ignore: [
               'label.active', 
               '.dark-mode', 
               'span.tweet-time',
               /(#|\.)(is-)/,
               /(#|\.)(has-)/,
               /(#|\.)(js-)/           
          ]
       }))
       .pipe(minifyCss({keepBreaks:false}))
       .pipe(rename('style.min.css'))
       .pipe(gulp.dest('_site/css/'));
});

gulp.task('build', ['css', 'html']);

var gulp = require('gulp'),
    request = require('request');

gulp.task('seo', ['build'], function(cb) {
    request('http://www.google.com/webmasters/tools/ping?sitemap=https://www.krvmedia.com/sitemap.xml');
    request('http://www.bing.com/webmaster/ping.aspx?siteMap=https://www.krvmedia.com/sitemap.xml');
    cb();
});


