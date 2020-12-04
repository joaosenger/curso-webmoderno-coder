/* é uma cadeia de caracteres.
No Js pode ser definida de 3 formas:
1 - "aspas duplas"
2- 'aspas simples'
3 - `simbolo crase`
*/

const escola = "Cod3r"

console.log(escola.charAt(4)) // exibe a letra no indice 4
console.log(escola.charAt(5)) // o js nao da erro ao invés de uma linguagem vacilona que trava por tudo
console.log(escola.charCodeAt(3)) // retorna o valor do indice 3 relativo a tabela unicode
console.log(escola.indexOf('3')) // retorna o indice do caractere 3
console.log(escola.substring(1)) // imprime a partir do indice 1
console.log(escola.substring(0, 3)) // vai a partir do indice 0 e exibe 3 digitos
console.log('Escola '.concat(escola).concat('!')) // maneira de concatenar
console.log('Escola ' + escola + '!') // maneira mais simples de concatenar
console.log(escola.replace(3, 'e')) // substitui um caraceter a partir do indice
console.log('Ana,Maria,Braga'.split(',')) /* separa os elementos em um array, 
delimitando a vírgula ' , ' como separador para os elementos do array */
