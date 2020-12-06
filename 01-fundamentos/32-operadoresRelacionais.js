/* o resultado sempre será verdadeiro ou falso, nunca um meio termo */

console.log('01)', '1' == 1) // compara somente o valor
// um = é atribuição, == é comparação de valor

console.log('02)', '2' === 2) // aqui compara o valor e o tipo, === é comparação de valor e tipo

console.log('03)', '3' != 3) // eles não são diferentes, pois tem o mesmo valor, embora não do mesmo tipo

console.log('04)', '4' !== 4) // verdadeiro, eles são diferentes em tipo

console.log('05)', 3 < 2) // false, 3 não é maior que 2
console.log('06)', 3 > 2) // true, 3 é maior que 2
console.log('07)', 3 <= 2) // false, 3 não é menor nem igual a 2
console.log('08)', 3 >= 2) // true, 3 é maior que 2

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // false são endereços de memória diferentes
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // verdadeiro, embora em endereços diferentes, possuem o mesmo valor, nesse caso um valor number
console.log('12', undefined == null)
console.log('13', undefined === null)

/* o professor destaca que é melhor utilizar o operador estritamente igual (teste valor e tipo), é uma boa prática */