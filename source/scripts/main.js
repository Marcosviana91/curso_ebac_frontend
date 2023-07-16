const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));//importação composta
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const ofuscar = require("gulp-obfuscate");

function comprimeJavaScript() {
    return gulp
        .src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(ofuscar())
        .pipe(gulp.dest("./build/scripts"));
}

function compilaSass() {
    return gulp
            .src("./source/styles/main.scss")
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: "compressed",
            }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest("./build/styles"));
}


// exports.default = gulp.series();
exports.sass = compilaSass;
exports.watch = function(){
    gulp.watch("./source/styles/*.scss", {ignoreInitial:false}, gulp.series(compilaSass))
}
exports.minifyJS = comprimeJavaScript;