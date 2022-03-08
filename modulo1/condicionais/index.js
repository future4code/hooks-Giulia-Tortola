/* Exercícios de interpretação de código
1. 
a) O código solicita um número ao usuário e compara o resto da divisão por dois,
com 0, que diz se o número é par ou impar. Caso seja par o console imprime "Passou no teste"
caso contrário "Não Passou no teste"
b) Para números pares
c) Para números ímpares

2.
a) Para mostrar o preço da fruta que o usuário escolher
b) O preço da Maçã é R$2,25
c) O preço da Pêra é R$5,5 5,0
3. 
a) Pede ao usuário um número, e armazena como uma variável "numero
b) Serão duas mensagens "Esse número passou no teste"
Caso fosse -10, não apresentaria nada
c) A mensagem está dentro do escopo local e depois é chamada no global,
apresentará o erro de mensagem não definida-10

Exercícios de escrita de código
*/

// 1. 

const idadeUsuario = Number(prompt("Qual sua idade?"))

if (idadeUsuario >= 18) {
    console.log ("Você pode dirigir")
} else {
    console.log ("Você não pode dirigir")
}

// 2. 
const qualTurno = prompt("Você estuda em qual turno? Responda apenas 'M' para matutino, 'V' para vespertino ou 'N' para noturno")

if (qualTurno === "M") {
    console.log("Bom dia")
} else if (qualTurno === "V") {
    console.log ("Boa tarde")
} else {
    console.log("Boa noite")
    }
// 3. 
//const qualTurno = prompt("Você estuda em qual turno? Responda apenas 'M' para matutino, 'V' para vespertino ou 'N' para noturno")

switch (qualTurno){
    case 'M':
        console.log("Bom dia")
        break
    case 'V':
        console.log("Boa Tarde")
        break
    case 'N':
        console.log("Boa noite")
        break
}

//4. 
function vamosAssistir() {
    let precoIngresso = Number(prompt("Qual o valor do Ingresso?"))
    let generoFilme = prompt("Qual genero do filme?")

    if (precoIngresso < 15, generoFilme === "Fantasia"){
        console.log ("Bom filme!")
    } else {
        console.log ("Escolha outro filme :(")
    }
}
vamosAssistir()