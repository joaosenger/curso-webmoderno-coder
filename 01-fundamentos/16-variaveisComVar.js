var numero = 1 
{
    var numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)
// retornou 2 pois var foi sobrescrita, para var só existe escopo dentro de uma função