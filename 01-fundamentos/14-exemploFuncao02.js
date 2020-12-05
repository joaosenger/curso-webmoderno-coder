// armazenando uma função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implicito
const subtracao = (a, b) => a - b
/* quando não utilizamos as { } significa que teremos apenas uma sentença de código, 
o resultado dessa sentença de código será o return */

console.log(subtracao(5, 2))