/*

Função é como um verbo, uma ação, ela executa um processo baseado nas sentenças de código. 
Função() {
    sentenças de código;
    sentenças de código;
}
As funções são usadas em outras partes do código, para que o código não precise ser repetido diversas vezes

*/

// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(10, 5)
imprimirSoma(10, 2, 3, 42, 52) // o js ignora os demais números, ao invés de dar erro, pois a função tem apenas dois parâmetros

// função com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3))