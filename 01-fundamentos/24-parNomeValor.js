// par nome/valor
const saudacao = 'Opa' /* contexto léxico, em que local físico aquela variável foi definido, nesse caso no arquivo 25-parNomeValor.js */

function exec() {
    const saudacao = 'Falaaa' // nesse exemplo o contexto léxico é a função exec
    return saudacao;
}

// Objetos são grupo aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: '32',
    peso: 90,
    endereco: {
        logradouro: 'Rua Legal pakas',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente.nome, cliente.idade, cliente.peso, cliente.endereco.logradouro, cliente.endereco.numero)