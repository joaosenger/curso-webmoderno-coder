{ 
    { 
        { 
            var sera = 'Sera??' 
        }
    } 
}
console.log(sera) // a variável está visível no código todo

function teste() {
    var local = 123
}

teste()
//console.log(local) 
// nesse caso a variável é visível apenas dentro da função, por isso da erro


/* O professor destaca é não é uma boa prática criar variáveis no escopo global, 
pois uma outra pessoa pode criar uma variável com o mesmo nome e sobrescrever o dado. */ 