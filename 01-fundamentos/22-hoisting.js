/*
Hoisting significa içar, jogar pra cima em tradução livre
*/

console.log('a = ', a);
var a = 2
console.log('a = ', a)
// o professor orienta que não tem sentido nenhum usar o hoisting, é só uma curiosidade

console.log('b = ', b)
let b = 3
console.log('b = ', b)
// com let não é possível fazer hoisting