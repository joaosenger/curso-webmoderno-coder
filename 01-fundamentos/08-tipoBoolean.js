let isAtivo = false // tipo false
console.log(isAtivo)

isAtivo = true // tipo true
console.log(isAtivo)

isAtivo = 1 // representa true
console.log(!!isAtivo) // se imprimirmos apenas isAtivo, irá imprimir '1', 
// como queremos o valor booleano, imprimimos utilizando a negação da negação !! .

isAtivo = 0 // representa false
console.log(!!isAtivo)

// Tipos verdadeiros
console.log(!!3) // numeros inteiros
console.log(!!-1) // positivos e negativos 
console.log(!!' ') // string com qlqr conteúdo, até espaço vazio
console.log(!! 'Joao') // texto tb
console.log(!![]) // array até mesmo vazio tb é
console.log(!!{}) // objeto vazio tb é
console.log(!!Infinity) // tipo infinito tb é true

console.log("----------------")
// Tipos falsos
console.log(!!0) 
console.log(!!'') // string vazia, mt utilizada para verificar se algo está preenchido
console.log(!!null) // nulo
console.log(!!NaN) // not a number
console.log(!!undefined) // indefinido

console.log('Para finalizar')
// caso todos as expressões sejam falsas, basta uma ser verdadeira para o resultado ser verdadeiro
console.log(!!('' || null || undefined || 0 || 'epa'))

let nome = '' // se colocar algo ele exibe o nome
console.log(nome || 'Desconhecido')