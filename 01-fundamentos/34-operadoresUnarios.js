let num1 = 1
let num2 = 2

num1++ // forma pós fixada, significas n1 = n1 + 1
console.log(num1)
--num1 // forma pré fixada, subtrai 1, têm preferencia ante a forma pós fixada
console.log(num1)
// num1-- // tem o mesmo efeito, só muda a precedência
console.log(num1)
/* para entender a questão da precedência, é a mesma ideia da matemática, 
onde a multiplicação tem precedência sobre a soma, por exemplo, é a mesma ideia,
o operador pré fixado tem preferência sobre o pós fixadao */

console.log(++num1 === num2--) // vai ser true pois foi comparado antes do incremento negativo
console.log(num1 === num2) // agora é falso, pois já foi alterado o valor de num2