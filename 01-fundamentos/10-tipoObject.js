// objeto não é json! 

// o par de chaves cria um objeto
// o objeto é uma coleção de pares chave: "valor"
const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.98
prod1['Desconto Legal'] = 0.48

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}

console.log(prod2)