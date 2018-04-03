var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var cssnested = require('postcss-nested');
var discardComments = require('postcss-discard-comments');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
    console.log("Início dos trabalhos...");
    gulp.start('styles');
});

gulp.task('html', function(){
    console.log('Image some HTML being generate right here!');
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, autoprefixer, cssnested, cssvars, discardComments]))
    .pipe(gulp.dest('./app/temp/styles'))
})

gulp.task('watch', function(){

    browserSync.init({
        server:{
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function () {  
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'] , function(){
return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream())
});