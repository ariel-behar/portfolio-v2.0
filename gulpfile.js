var gulp = require('gulp'); //npm install --save-dev gulp-...
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-terser');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

//Directory variables
var publicCSS = 'public/css';
var publicJS = 'public/js';
var publicIMG = 'public/img';

/*  --TOP LEVEL FUNCTIONS
    gulp.task - Define tasks
    gulp.src - Points to files to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
*/

// Copy all HTML files
// gulp.task("copyHtml", function(){
//     gulp.src("src/*.html")
//         .pipe(gulp.dest("public"));
// });

// LOGS MESSAGE
gulp.task('message', function (done) {
    return console.log('Gulp is running...');
    done();
});

// Optimize images
gulp.task('imagemin', function (done) {
    gulp.src('src/img/*')
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.jpegtran({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
                }),
            ])
        )
        .pipe(gulp.dest(publicIMG));
    done();
});

// JS HINT
// gulp.task('hint', function (done) {
//     return gulp.src('src/js/*.js').pipe(jshint('.jshintrc')).pipe(jshint.reporter(stylish));
//     done();
// });

//MINIFY JS
// gulp.task("minify",function(){
//     gulp.src("src/js/main.js")
//         .pipe(uglify())
//         .pipe(gulp.dest(publicJS));
// });

//COMPILE SASS
gulp.task('sass', function (done) {
    gulp.src('src/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                //Autoprefixer
                overrideBrowserslist: ['last 3 versions'],
                cascade: false,
            })
        )
        .pipe(cleancss()) //Minify CSS - Toggle as a comment if you don't want to minify at the moment
        .pipe(gulp.dest(publicCSS));
    done();
});

//CONCATENATE JS FILES - so all the files are concatenated and minified, don't run "minify"
gulp.task('concat', function () {
    return gulp.src('src/js/*.js').pipe(concat('main.js')).pipe(uglify()).pipe(gulp.dest(publicJS));
});

// EXECUTE ALL with "gulp" or "gulp default" commands
gulp.task(
    'default',
    gulp.series('message', 'imagemin', 'sass', 'concat', done => {
        done();
    })
);

//Watches and executes all these task without having to "gulp default" every time
gulp.task('watch', function () {
    // gulp.watch('src/js/*.js', gulp.series('hint'));
    gulp.watch('src/js/*.js', gulp.series('concat'));
    gulp.watch('src/img/*', gulp.series('imagemin'));
    gulp.watch('src/sass/*.scss', gulp.series('sass'));
    // gulp.watch("src/*.html", ["copyHtml"]);
});
