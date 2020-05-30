/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

function calcular (op1, op2){
    console.log(`Soma: ${op1+op2}`)
    console.log(`Subtração: ${op1-op2}`)
    console.log(`Multiplicação: ${op1*op2}`)
    console.log(`Divisão: ${op1/op2}`)
}

calcular(2,3)

/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. 
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados.
*/

const triangulo = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulo(2,2,2))
console.log(triangulo(1,2,2))
console.log(triangulo(1,2,3))

/*
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

const elevado = (base, exporente) => Math.pow(base,exporente)

console.log(elevado(2,3))

/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
*/

const dividindo = (dividendo, divisor) => {
    console.log(`${dividendo}/${divisor} = ${dividendo/(divisor || 1)}`)
    console.log(`Resto = ${dividendo%(divisor || 1)}`)
}

dividindo(6,3)

/*
05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

const padraoReal = (valor) => `R$ ${valor.toFixed(2).toString().replace('.',',')}`

console.log(padraoReal(3.5))

/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function aplicacaoSimples(montanteInicial, taxaJuros, tempoAplicacao){
    return montanteInicial += (montanteInicial * ( taxaJuros/ 100) * tempoAplicacao)
}

function aplicacaoComposta(montanteInicial, taxaJuros, tempoAplicacao){

    rendimentoFinal = montanteInicial
    
    for(i=0; i< tempoAplicacao; i++){

        rendimentoFinal += (rendimentoFinal * ( taxaJuros/ 100))
    }

    return rendimentoFinal
}

const investimento = {montanteInicial: 1000, taxaJuros: 5, tempoAplicacao: 2}

console.log(aplicacaoSimples(1000,5,3))
console.log(aplicacaoComposta(1000,5,3).toFixed(2))

/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

const baskara = (a, b, c) => {
    delta = Math.pow(a,2) - 4 * a * c
    
    if ( delta < 0 )
        return 'Delta é negativo'
    
    r1 = (- b + Math.sqrt(delta)) / (2 * a)
    r2 = (- b - Math.sqrt(delta)) / (2 * a)

    return [Number(r1.toFixed(2)), Number(r2.toFixed(2))]
}

console.log(baskara(3,-5,12))
console.log(baskara(20,2,2))

/*
08) Pedro joga N jogos de basquete por temporada. Para saber como ele está está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota o novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

function resultadoJogos (jogos){

    indexPior = 0
    melhor = jogos[0]
    record = 0

    for (const key in jogos) {
       if (jogos[key] < jogos[indexPior]) {
        indexPior = key
       }

       if(jogos[key] > melhor){
        melhor = jogos[key]
        record++
       }
    }

    return [record, (Number(indexPior)+1)]
}

const jogadas = [10, 20, 20, 8, 25, 3, 0, 30, 1]
console.log(resultadoJogos(jogadas))

/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for maior
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

function getBoletim ()  {

    nota = this.nota

    if(nota < 38) {
        return `Aluno: ${this.nome} - Nota: ${nota} - Situação: Reprovado!`
    }

    notaArredondada = (nota % 5) >= 3 ? nota - (nota % 5) + 5 : nota
    
    resultado = notaArredondada >= 40 ? 'Aprovado!' : 'Reprovado!'

    return `Aluno: ${this.nome} - Nota: ${notaArredondada} - Situação: ${resultado}`

}

const aluno1 = {
    nome: 'Maria',
    nota: 38,
    getBoletim
}

const aluno2 = {
    nome: 'João',
    nota: 84,
    getBoletim
}

const aluno3 = {
    nome: 'José',
    nota: 37,
    getBoletim
}

const alunos = [aluno1, aluno2, aluno3]

alunos.forEach(element => {
    console.log(element.getBoletim())
});


/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
*/

//Falhou
//Number.prototype.multiploTres = () => (this % 3) == 0 ? true : false
//console.log(`Número ${num} ${num.multiploTres() ? 'é' : 'não é'} múltiplo de 3!`)

const multiploTres = (valor) => (valor % 3) == 0 ? true : false

let num  = 4
console.log(`Número ${num} ${multiploTres(num) ? 'é' : 'não é'} múltiplo de 3!`)
num = 6
console.log(`Número ${num} ${multiploTres(num) ? 'é' : 'não é'} múltiplo de 3!`)

/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando true ou false.
*/

const verifaSeBissexto = (ano) => (ano % 400) == 0 ? true : (ano % 100) == 0 ? false : (ano % 4) == 0 ? true : false

const anos = [1, 100, 200, 400, 1600, 2000, 2015]

for (i in anos) {
    console.log(`O ano ${anos[i]} ${verifaSeBissexto(anos[i]) ? 'é' : 'não é'} Bissexto!.`)
}

/*
12) Faça um algoritmo que calcule o fatorial de um número.
*/

const fatorial = (val) => {

    fat = 1

    for(i=1; i<= val; i++){
        fat*=i
    }

    return fat
}

console.log(fatorial(7))

/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

const diaUtil = function (dia) {

    diaAtual = (dia > 31 || dia === 0) ? -1 : dia > 7 ? dia % 7 : dia

    switch(diaAtual){
        case 0:
        case 1:
        case 7: return 'Fim de Semana!'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: return 'Dia útil' 
        default: return 'Dia inválido'
    }
}

for (i=0; i < 33; i++) {
    console.log(`Dia ${i}:  ${diaUtil(i)}`)
}

/*
14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

const vendeFruta = function (fruta) {

    switch(fruta){
        case 'maçã': return 'Não vendemos esta fruta aqui!'
        case 'kiwi': return 'Estamos com escassez de kiwis!'
        case 'melancia': return 'Aqui está, são 3 reais o quilo!'
        default: return 'Fruta inválida!'
    }
}

frutas = ['maçã', 'kiwi', 'melancia', 'jaca']

for (i in frutas) {
    console.log(`${frutas[i]}:  ${vendeFruta(frutas[i])} `)
}

/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

const vendeCarros = function (carro) {

    switch(carro){
        case 'hatch': return 'Compra efetuada com sucesso!'
        case 'sedans':
        case 'motocicletas': 
        case 'caminhonetes': return 'Tem certeza que não prefere este modelo?'
        default: return 'Não trabalhamos com este tipo de automóvel aqui!'
    }
}

carros = ['hatch', 'sedans', 'motocicletas', 'caminhonetes','tratores']

for (i in carros) {
    console.log(`${carros[i]}:  ${vendeCarros(carros[i])} `)
}

/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. 
Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

const calculadora = function (op1=0, op2=0, tipo) {

    switch(tipo){
        case '+': return op1 + op2
        case '-': return op1 - op2
        case '*': return op1 * op2
        case '/': return op1 / op2
        default: return 'Operação inválida!'
    }
}

console.log(calculadora(1,2,'+'))
console.log(calculadora(1,2,'-'))
console.log(calculadora(1,2,'*'))
console.log(calculadora(1,2,'/'))

/*

17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A      10%
B      15%
C      20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const calcularNovoSalario = function (plano, salario = 0) {

    switch(plano){
        case 'A': return `R$ ${(salario * 1.1).toFixed(2)}`
        case 'B': return `R$ ${(salario * 1.15).toFixed(2)}`
        case 'C': return `R$ ${(salario * 1.2).toFixed(2)}`
        default: return 'Plano inválido!'
    }
}

const salario = 1000.00
planos = ['A','B','C','D']

for (i in planos) {
    console.log(`${planos[i]}:  ${calcularNovoSalario(planos[i], salario)} `)
}

/*
18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

const escreverNumero = function (numero) {

    switch(numero){
        case 0: return 'Zero'
        case 1: return 'Um'
        case 2: return 'Dois'
        case 3: return 'Três'
        case 4: return 'Quatro'
        case 5: return 'Cinco'
        case 6: return 'Seis'
        case 7: return 'Sete'
        case 8: return 'Oito'
        case 9: return 'Nove'
        case 10: return 'Dez'
        default: return 'Número fora do intervalo.'
    }
}

for (i=0; i < 12; i++) {
    console.log(`${i}:  ${escreverNumero(i)}`)
}

/*
19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const totalPedido = function (item, quantidade = 0) {

    switch(item){
        case 100: return `${quantidade} x Cachorro Quente - Total R$ ${(quantidade * 3.00).toFixed(2)}`
        case 200: return `${quantidade} x Hamburguer - Total R$ ${(quantidade * 4.00).toFixed(2)}`
        case 300: return `${quantidade} x Cheeseburguer - Total R$ ${(quantidade * 5.50).toFixed(2)}`
        case 400: return `${quantidade} x Bauru - Total R$ ${(quantidade * 7.50).toFixed(2)}`
        case 500: return `${quantidade} x Refrigerante - Total R$ ${(quantidade * 3.50).toFixed(2)}`
        case 600: return `${quantidade} x Suco - Total R$ ${(quantidade * 2.80).toFixed(2)}`
        default: return 'Produto não existente.'
    }
}

const itens = [100, 200, 300, 400, 500, 600, 700]
const qtdes = [1, 2, 3, 4, 5, 6, 7]

for (i in itens) {
    console.log(`Produto: ${itens[i]} - ${totalPedido(itens[i], qtdes[i])} `)
}

/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function contarCedulas(valorInicial = 0){

    total_100 = 0
    total_50 = 0
    total_10 = 0
    total_5 = 0
    total_1 = 0
    restante = 0

    if(valorInicial >= 100){
        total_100 = (valorInicial - (valorInicial % 100)) / 100.0
        restante = valorInicial % 100
    } else{
        restante = valorInicial
    }

    if(restante >= 50){
        total_50 = (restante - (restante % 50)) / 50.0
        restante = restante % 50
    }

    if(restante >= 10){
        total_10 = (restante - (restante % 10)) / 10.0
        restante = restante % 10
    }

    if(restante >= 5){
        total_5 = (restante - (restante % 5)) / 5.0
        restante = restante % 5
    }

    total_1 = restante

    return (`Valor Total: R$ ${valorInicial.toFixed(2)}\n`).concat
           (total_100 ? `${total_100} x R$ 100,00\n` : '').concat
           (total_50 ? `${total_50} x R$ 50,00\n` : '').concat 
           (total_10 ? `${total_10} x R$ 10,00\n` : '').concat 
           (total_5 ? `${total_5} x R$ 5,00\n` : '').concat 
           (total_1 ? `${total_1} x R$ 1,00\n` : '')
}

console.log(contarCedulas(18))

/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/
