// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number(prompt("Escreva a altura de um retângulo"))
let largura = Number(prompt ("Escreve a largura de um retângulo"))
let areaRetangulo = altura*largura
console.log (areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aq
let anoAtual = Number(prompt("Em que ano estamos?"))
let anoNascimento = Number(prompt("Em que ano você nasceu?"))
let idade = anoAtual-anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso,altura) {
    // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Qual seu nome?")
  let idade = prompt("Quantos anos você tem?")
  let email = prompt("Escreva seu e-mail!")
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log("Meu nome é "+nome+", tenho "+idade+" anos, e o meu email é "+email+".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
cor1 = prompt("Escreva sua cor favorita")
cor2 = prompt("Escreva outra cor favorita")
cor3 = prompt("Escreva uma terceira cor favorita")
meuArray= [cor1, cor2, cor3]
console.log (meuArray)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula() {
  // implemente sua lógica aqui
let frase = prompt("Escreva uma frase com letras minusculas")
return frase.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo() {
  // implemente sua lógica aqui
let custo = Number(prompt("custo do espetáculo"))
let valorIngresso = Number(prompt("Valor ingresso?"))
return minimoIngressos = custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho() {
  // implemente sua lógica aqui
const string1 = prompt("escreva algo")
const string2 = prompt ("escreva outra coisa")
let comprimento1 = string1.length 
let comprimento2 = string2.length
return comprimento1 === comprimento2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return primeiroItem = array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let last = array[array.length-1]
return last
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let padrao1 = string1.toLowerCase
let padrao2 = string2.toLowerCase
return padrao1 == padrao2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}