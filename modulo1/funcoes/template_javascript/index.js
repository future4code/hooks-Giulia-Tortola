/* 
1. 
    a) Vai retornar duas linhas no console
uma com o número 10 (2*5) e outra com o número 50 (10*5).
    b)Não apareceria nada, pois não a haveria comando para imprimir no console
2.
    a) A função deixa as letras minúsculas e retorna um booleano dizendo se tem ou não a palavra cenoura na string
e imprime no console.
    b)i. true
    ii. true
    iii. false*/
//Exercícios de escrita de código
//1 a)
function imprimirMensagem(){
    console.log("Eu sou Giulia, tenho 25 anos, moro em Floripa e sou estudante da Labenu")
}
imprimirMensagem()
//b) 
function imprimirMensagemParametros(nome, idade, cidade, profissao){
    console.log (`Eu sou ${nome}. tenho ${idade}, moro em ${cidade} e sou ${profissao}`)
}
imprimirMensagemParametros("Giulia", 25, "Floripa","estudante")
 //2   
function recebeDoisNumeros(num1, num2){
        const soma = num1+num2
        console.log(soma)
    }
 recebeDoisNumeros(2,5)

function numeroMaiorOuMenor(num1,num2) {
    const maiorQueOutro = num1 >= num2
    console.log (maiorQueOutro)
}
numeroMaiorOuMenor(2,9)

function parOuNão (num1){
    const restoPar = num1 % 2
    const testePar = restoPar === 0
    console.log (testePar)
}
parOuNão(3)

function recebeUmaString(string){
    const tamanhoString = string.length
    const stringMaiuscula = string.toUpperCase()
    console.log(tamanhoString, stringMaiuscula)
}
recebeUmaString("Ai meu pai amado")

//3 
function numerosInseridos(num1,num2){
    console.log(`Números inseridos: ${num1} e ${num2}`)
}
function somar(num1,num2){
    const soma = num1 + num2
    console.log(`Soma: ${soma}`)
}
function subtracao(num1,num2){
    const subtrair = num1 - num2
    console.log(`Diferença ${subtrair}`)
}
function multiplicar(num1,num2){
    const multiplicacao = num1*num2
    console.log (`Multiplicação: ${multiplicacao}`)
}
function dividir(num1,num2){
    const divisao = num1/num2
    console.log(`Divisão: ${divisao}`)
}

numerosInseridos(30,3)
somar(30,3)
subtracao(30,3)
multiplicar(30,3)
dividir(30,3)