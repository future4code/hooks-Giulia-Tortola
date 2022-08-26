//Crie uma função que receba um parâmetro qualquer e
// que imprima no console o tipo da variável. 

const returnAny = (parameter: any) => {
    return typeof(parameter)}

console.log(returnAny("Giulia"))
console.log(returnAny(26))
console.log(returnAny([1,2,3]))
console.log(returnAny({nome: "Giulia"}))