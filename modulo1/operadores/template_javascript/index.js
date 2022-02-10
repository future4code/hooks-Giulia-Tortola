/* Exercício de interpretação de código
 1. 

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 
console.log ("a.", resultado) // o console retornará "a. false"

resultado = bool2 && bool2 && bool3
console.log( "b.", resultado) // o console mostrará "b. false"

resultado = !resultado && (bool1 || bool2) 
console.log ("c.", resultado) // o console mostrará "c. false"

console.log ("d.", typeof resultado) // o consolee mostrará "boolean" 

 2. 

let primeiroNumero = prompt ("Digite um número!")
let segundoNumero = prompt("Digite outro número!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // o console sempre imprimirá a soma das duas strings inseridas através do comando prompt. 

Para ajustar é preciso converter as variáveis para number, usando a função parseInt

3.
Ficaria:

let primeiroNumero =  prompt ("Digite um número")
let segundoNumero = prompt ("digite outo número")

let numero1 = parseInt (primeiroNumero)
let numero2 = parseInt (segundoNumero)

const soma = numero1 + numero2

console.log(soma)

/* Exercício escrita de código
1. 
let idadeUsuario = prompt("Qual sua idade?") // idade do usuário
let idadeMelhorAmigo = prompt ("Qual a idade do seu melhor amigo?")

let numero1 = parseInt (idadeUsuario)
let numero2 = parseInt (idadeMelhorAmigo)

let resultado = numero1 > numero2
let diferncaIdade =  numero1 - numero2

console.log ("Sua idade é maior que a do seu melhor amigo", resultado)
console.log ("A diferença nas idades é:", diferncaIdade)

2. 
let numeroPar = prompt("Insira um número par!")

let numero2 = parseInt (numeroPar)

let resto = numero2 % 2

console.log ("O resto da divisão é:", resto) // o resto da dividisão é sempre zero pois são números pares

3. 
let idadeDoUsuarioEmMeses = numero1*12
let idadeDoUsuarioEmDias = idadeDoUsuarioEmMeses*365
let idadeDoUsuarioEmHoras = idadeDoUsuarioEmDias*24


let idadeUsuario = prompt("Qual sua idade?")
console.log ("A idade do Usuário em meses é:",idadeDoUsuarioEmMeses, "meses")
console.log("A idade do Usuário em dias é:",idadeDoUsuarioEmDias, "dias")
console.log ("A idade do Usuário em horas é:", idadeDoUsuarioEmHoras, "horas")

4. 
let primeiroNumero = prompt("Escreva um número!")
let segundoNumero = prompt ("Escreva outro número!")

let number1 = parseInt (primeiroNumero)
let number2 = parseInt (segundoNumero) 

let numeroMaior = number1 > number2
let numerosIguais =  number1 === number2 
let umDivisivelPorDois = number1 % number2
let doisDivisivelPorUm = number2 % number1

let divisivelPordois = umDivisivelPorDois !== 0 
let divisivelPorUm = doisDivisivelPorUm !== 0 

console.log ("O primeiro número é maior que o segundo?", numeroMaior)
console.log ("O primeiro número é igual ao segundo?", numerosIguais)
console.log ("O primeiro é divisivel pelo segundo?", divisivelPordois)
console.log ("O segundo número é divisível pelo primeiro?", divisivelPorUm)