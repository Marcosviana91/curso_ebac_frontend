const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));//importação composta
const sourcemaps = require("gulp-sourcemaps");
const JSmin = require("gulp-uglify");
const ofuscar = require("gulp-obfuscate");
const imageMin = require("gulp-imagemin");

function comprimeImg() {
    return gulp
        .src("./source/images/*")
        .pipe(imageMin(""))
        .pipe(gulp.dest("./build/images"));
}

function comprimeJavaScript() {
    return gulp
        .src("./source/scripts/*.js")
        .pipe(JSmin())
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
exports.default = function(){
    gulp.watch("./source/styles/*.scss", {ignoreInitial:false}, gulp.series(compilaSass))
    gulp.watch("./source/scripts/*.js", {ignoreInitial:false}, gulp.series(comprimeJavaScript))
    gulp.watch("./source/images/*", {ignoreInitial:false}, gulp.series(comprimeImg))
}