const {series, parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb){
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // Remove comentários
            presets: ["env"] //Pega última versão do JavaScript e converte para versões mais antigas
        }))
        .pipe(uglify()) // Mimifica o código

        //Primeiro parâmetro é um nome para o evento. Segunda parte é uma função a ser executada casa o evento ocorra. 
        .on('error', err => console.log(err)) // "ON" é utilizado para tratar eventos que ocorreram até determinado ponto do processamento das tarefas.

        .pipe(concat('codigo.min.js')) // Concatena o código processado pelo Babel. O Parâmetro é o nome do arquivo que vai ser gerado.
        .pipe(gulp.dest('build')) // Diretório destino onde vai ser gerado o arquivo
    
    //return cb() // Pode usar o return direto na chamada das tarefas
}

function fim(cb) { // Aqui a função está sendo apenas definida
    console.log('Fim!')
    return cb() // Aqui vai fazer a função ser executada uma vez por isos é uma FUNÇÃO CALLBACK
}

exports.default = parallel(transformacaoJS, fim)

/*Pra gerar o arquivo digitar "gulp" no terminal*/