/* é o vetor, estrutura unidimensional, linear. Os dados são acessador através de seu índice */

const valores = [1.2, 2.5, 3.6, 4.4];
console.log(valores[0], valores[3]);
console.log(valores[500]) // esse indice não existe, porém o js é maneiro e não da erro

valores[4] = 12.2; // add valores no array
console.log(valores)
console.log(valores.length) // tamanho do array

valores.push({id: 3}, false, null, 'teste') // add itens no array
console.log(valores)

console.log(valores.pop()) // retira do array o ultimo valor e o exibe

delete valores[0] // outra maneira de excluir um item de um array

console.log(valores)

console.log(typeof valores) // array é um objeto