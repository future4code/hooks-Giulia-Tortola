/* Exercícios de interpretação de código
1. A função de Array map, imprimirá no console todos os objetos juntamente com a indicação da "posição"/index
2. Será impresso um novo array composto apenas dos nome do array original
3. Imprimirá apenas os outros dois objetos que não tem "Chijo"*/


/*Exercícios de Escrita de Código

*/
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const apenasNomes = pets.map((item, index, array) => {
    return item.nome
 })
 
 console.log(apenasNomes)

 const apenasSalsicha = pets.filter((pets, index, array) => {
    return pets.raca === "Salsicha"
 })

 console.log(apenasSalsicha)

 const apenasPoddle = pets.filter ((pets,index,array)) => {
     return pets.raca === "Poodle"
 } // acabou a luz!