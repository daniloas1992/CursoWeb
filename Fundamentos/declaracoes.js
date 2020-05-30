var nomes = "Maria, José, Luana".split(',')
console.log(nomes)
console.log(typeof nomes)

let nome = "Maria"
let segundoNome = nome
segundoNome = "João"
console.log(nome)

function somar(a = 0, b = 0){
    return a + b
}

console.log(somar(1))