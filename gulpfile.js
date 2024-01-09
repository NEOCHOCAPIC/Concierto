const { src, dest} = require('gulp');
const sass = require("gulp-sass").require('sass');
//imagenes
const webp = require('gulp-webp');

function css(done){
    //identificar el archivo de entrada



    //compilarlo
    src('src/scss/app.scss').pipe( sass()).pipe(dest('build/css'));


    done();
}
exports.css = css;
function versionWebp(done){
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg}').pipe(webp(opciones)).pipe(dest('build/img'));
    done();
}
exports.versionWebp = parallel(versionWebp);