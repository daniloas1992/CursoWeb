const {series, parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS(){
    return gulp.src('src/sass/index.scss') // O index já vai pegar os demais arquivos que estão sendo importados
    .pipe(sass().on('error', sass.logError)) // Converte o SASS para CSS, gera log de erro caso ocorra
    .pipe(uglifycss({"uglyComments":true}))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function copiarHTML(){

    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))

}

exports.default = parallel(transformacaoCSS, copiarHTML)