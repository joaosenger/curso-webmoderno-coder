const peso1 = 1.0
const peso2 = Number('2.0') // outra maneira de declarar um number

console.log(peso1, peso2)

// verifica se a variável é do tipo inteiro
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) //.toFixed é utilizado para limitar o numero de casas decimais exibidas

// exibe o valor no formato string
console.log(media.toString())

// exibe em binário a variável media
console.log(media.toString(2))

console.log(typeof media)

console.log(" ")
console.log(" ")

/* Alguns cuidados com Number */

console.log(7 / 0) // vai retornar o tipo infinity
console.log("10" / 2) // a divisão não faz sentido no mundo da string, por isso o js converte para inteiro, para ter sentido
console.log('3' + 2) // a soma, diferentemente da divisão, tem sentido no mundo da string, por isso o js não converte, ele concatena
console.log('32' - 2) // seguindo a mesma ideia, como a subtração não tem sentido como string, ele converte pra inteiro e faz o calculo
console.log("Show" * 2) // algumas linguagens exibiriam Show Show, o js retorna NaN
console.log(0.1 + 0.7) // o js prefere ser impreciso ao invés de lento, seguindo um padrão do IEEE
//com numero literal da erro console.log(10.toString())
