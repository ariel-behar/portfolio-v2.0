//NPM COMMANDS TO RUN
// npm install --save-dev gulp autoprefixer cssnano gulp-concat gulp-postcss gulp-sass gulp-sourcemaps gulp-terser gulp-imagemin gulp-purgecss gulp-babel @babel/core @babel/preset-env


//Initialize modules
const { src, dest, task, watch, parallel, series } = require('gulp');

const autoprefixer = require('autoprefixer'); // Autoprefixes CSS for older browsers
const cssnano = require('cssnano'); // Minifies CSS
const concat = require('gulp-concat'); // Concatenates files. For JS files, you need to toggle it the 'js' task
const postcss = require('gulp-postcss'); // 
const sass = require('gulp-sass'); // Converts SASS to CSS
const sourcemaps = require('gulp-sourcemaps'); // Creates maps for CSS and JS
const terser = require('gulp-terser'); // Minifies JS
const imagemin = require('gulp-imagemin'); // Minifies Images
const purgecss = require('gulp-purgecss'); // Removes Unnecessary CSS. Needs to be called separately
const babel = require('gulp-babel'); // Converts ES6 syntax to older

// Source file paths
const srcFile = {
    templates: 'templates/**/*.hbs',
    css: 'src/css/*.css',
    scss: 'src/scss/*.scss',
    js: 'src/js/*.js',
    img: 'src/img/**/*',
};

// Output directories
const public = {
    css: 'public/css',
    js: 'public/js',
    img: 'public/img/',
};

// Logs Message
task('message', done => {
    console.log('Gulp is running...');
    done();
});

// SCSS Task
task('scss', done => {
    src(srcFile.scss)
        .pipe(sourcemaps.init()) // Maps CSS files back to the original SASS files
        .pipe(sass().on('error', sass.logError)) // Complies SASS to CSS files and logs errors if there any
        .pipe(
            postcss([
                autoprefixer({
                    //Autoprefixes CSS
                    overrideBrowserslist: ['last 3 versions'],
                    cascade: false,
                }),
                cssnano(), //Minifies CSS Files
            ])
        )
        .pipe(sourcemaps.write('.')) //Writes CSS Map files in the same output folder
        .pipe(dest(public.css)); //Outputs the files in the public/css folder
    done();
});

// JS task (concatenates and minifies javascript)
task('js', done => {
    src(srcFile.js)
        .pipe(sourcemaps.init()) //Creates the source map of the JS file
        .pipe(babel({ // Transcribes the ES6 syntax to older
            presets: ['@babel/env']
        }))
        .pipe(terser()) //This minifies the JS files
        // .pipe(concat('main.js')) //Toggle this if you don't want JS files to be concatenated
        .pipe(sourcemaps.write('.'))
        .pipe(dest(public.js)); //Outputs the files in the public/js folder
    done();
});

// IMAGE task
task('image', done => {
    src(srcFile.img)
        .pipe(
            imagemin({
                verbose: true,
            })
        ) //Minifies images
        .pipe(dest(public.img));
    done();
});


// Purges unused CSS. In order to do it properly, copy all the CSS files you'd like to process  
// from the public/css to the src/css and then run 'gulp purgecss'. All the CSS files will be optimized
task('purgecss', done => {
    src(srcFile.css) //Minifies CSS Files
        .pipe(
            purgecss({
                content: ['templates/**/*.hbs'], // comparing it against the files in this folder
            })
        )
        .pipe(dest(public.css));
    done();
});

// Watch task (automatically detects changes)
// Watches and executes all these task without having to "gulp default" every time
task('watch', () => {
    watch(srcFile.scss, series('scss'));
    watch(srcFile.js, series('js'));
    watch(srcFile.img, series('image'));
});

// Default task (main taks that will run everything when typed in the command line)
// EXECUTE ALL with "gulp" or "gulp default" commands
task('default', done => {
    series('message', 'scss', 'js', 'image');
    done();
});



