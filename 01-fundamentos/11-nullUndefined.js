/*
Conceito de atribuição por valor e atribuição por referência

Atribuição por valor = os dados PRIMITIVOS são atribuidos por valor, significa que é criada uma cópia e acontece uma nova alocação na memória para aquela referência.
Dados do tipo primitivo:
* string
* number
* boolean
* null
* undefined
* symbol

Atribuição por referência = significa que apontam para o mesmo endereço de memória, o novo objeto será apenas uma referência ao caminho do objeto original na memória (como um atalho que se cria no desktop)
São considerados objetos:
* array
* funções
* {}

*/


// Conceito do 

let valor // não inicializada
console.log(valor)
/*
Essa variável não tem absolutamente nada atribuida a ela, ela nunca foi inicializada, então o valor dela por padrão e Undefined.
*/

valor = null // ausência de valor, a variável agora foi inicializada, mas não aponta pra nenhum endereço de 
console.log(valor)