/* Tabela verdade

V e V = V
V e F = F
F e V = F
F e F = F
O resultado só será verdadeiro se todos os operandos forem verdadeiros

V ou V = V
V ou F = V
F ou V = V
F ou F = F
Basta que um seja verdadeiro para que o resultado seja verdadeiro

V xor V = F
V xor F = V
F xor V = V
F xor F = F
No ou...ou é necessário que os dois sejam diferentes para ser verdadeiro.

!V = F
!F = V
Negação lógica

*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))