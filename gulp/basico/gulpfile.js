const gulp = require('gulp')
//const series = gulp.series

const {series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Antes 3')
    return cb()
}

function copiar(cb){

    //gulp.src('pastaA/**/*.txt') // Pega todos os arquivos .txt da pastaA
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB')) // Pipe aplica uma transformação: Exemplo reduzir, girar, aplicar filtros
    return cb()
}

const fim = cb => {
    console.log('Fim')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim)