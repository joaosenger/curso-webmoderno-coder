console.log(Math.ceil(6.1)) // arredonda pra baixo, o ponto liga Math ao ceil, isso é a notação ponto, o ponto é o que indica a "ligação"
const obj1 = {}
obj1.nome = 'Joao'
// obj1['nome'] = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)