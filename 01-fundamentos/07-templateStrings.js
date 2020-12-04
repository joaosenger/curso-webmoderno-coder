const nome = 'João'
const concatenaNome = 'Olá ' + nome + '!'
console.log(concatenaNome)

// exemplo de template string
const nomeTemplate = ` 
    Olá ${nome}, tudo ?!
    Esse é um exemplo de uso
    das Templates Strings! `
console.log(nomeTemplate)

// expressões
console.log(`1 + 1 = ${1 + 1}`); 

// template strings também funcionam com funções
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado!')}`)