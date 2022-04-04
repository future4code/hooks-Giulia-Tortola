// Exercício de Interpretação de código
/* 1. O for imprimirá a soma da condição iniciando do zero até o 5
 e continuará até o i/condição seja 5 e retornará a soma. Resultado 10
 2. a) O for percorrerá o array e retornará os maiores de 18. 
 Ou seja, retornará em lista (não array) 19, 21,23,25,25 e 30.
    b) Poderia ser colocado um Indexof()
3. 4 linhas,a primeira apenas com "*", segunda com dois asterisco, até a 4ª com 4 asteriscos

//Exercício de Escrita de Código
/*1.*/

let nomeDosPets = []

const perguntaQuantosPets = Number(prompt("Quantos bichinhos/pets você tem?"))

let quantidadeDePets = 0

function retornarNomesDosPets (){ 
    if (perguntaQuantosPets === 0){
    console.log ("Que pena! Você pode adotar um!")
} else {
    while (quantidadeDePets < perguntaQuantosPets){
          quantidadeDePets++
          nomeDosPets.push(prompt("Qual o nome do Seu pet?"))
      
    }
    console.log(`1. ${nomeDosPets}`)
}
}
retornarNomesDosPets()
/* 2. */

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

 function imprimirCadaValor (array) {
    for (i = 0; i < array.length; i++){
        console.log (`2. a) ${array[i]}`)
    }
}
imprimirCadaValor(arrayOriginal)


let arrayDivididoPorDez = []

function dividirPorDez (array) {
    for ( let i = 0; i < array.length;i++) {  
        console.log (`2.b) ${array[i]/10}`) 
    }
    
}
dividirPorDez(arrayOriginal) // depois de digitar errado o "LENGTH" 30x deu certo!

function imprimirPares (array) {
   let arrayPares = []
    for ( arrayPares of array) {
        if (arrayPares % 2 === 0) {
            console.log(`2. c) ${arrayPares}`)
        }
    }
}
imprimirPares(arrayOriginal)

function listarElementosIndex (array) {
       for ( i=0 ;i < array.length; i++ ) {
           let num = array[i]
           let index = i
        console.log (`2. d) O elemento do índex ${index} é ${num}`)
    }
}
listarElementosIndex(arrayOriginal)

function mostrarMaiorMenor(array) {
    let valorMaior = array [0];
    let valorMenor = array[0];

    for( i=0; i <array.legth; i++) {
        if (array[i] > valorMaior) {
            valorMaior = array[i]
        } else if (array[i] < valorMenor){
            valorMenor = array[i];
        }
    }
    console.log (`2.e) Maior número: ${valorMaior}| Menor número: ${valorMenor}`)
}
mostrarMaiorMenor(arrayOriginal)