/* Exercícios de interpretação de código
1. 
let array
console.log('a. ', array) // imprimirá não definido pois a array não foi definida

array = null
console.log('b. ', array)// "b. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // "c. 11"

let i = 0
console.log('d. ', array[i]) // "d. 3"

array[i+1] = 19
console.log('e. ', array) // inserirá um novo dado na array ao lado do item "0" "e. [3,19,4,5,6,7,8,9,10,11,12,13]"

const valor = array[i+6]
console.log('f. ', valor) // f. 6 (3+6) 
2. "SUBI NUM ÔNIBUS EM MIRROCOS, 27"

Exercício de escrita de código
1.
let nomeDoUsuario = prompt("Escreva seu nome")
let emailDoUsuario = prompt("escreva seu e-mail")

console.log("O e-mail "+emailDoUsuario+"foi cadastrado com sucesso.Seja bem-vindo(a) "+nomeDoUsuario)
2. a) 


let array = ["lasanha", "pizza","cookies", "brigadeiro", "sushi"]
let novacomida = prompt("Qual sua comida preferida?")
console.log (array)
console.log("Essas são minhas comidas favoritas:")
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
const novacomida = array.splice(1,1)
array.push(novacomida,2)
console.log(array)

3.
const listaDeTarefas = []
const tarefa1 = prompt("escreva uma tarefa")
const tarefa2 = prompt("escreva uma tarefa")
const tarefa3 = prompt("escreva uma tarefa")
listaDeTarefas.push(tarefa1,tarefa2,tarefa2)
console.log(listaDeTarefas)
const digiteUmaTarefa = prompt("Qual foi a tarefa realizada?")
listaDeTarefas.splice(Number(digiteUmaTarefa),1)
console.log(listaDeTarefas)
*/





