/* Exercícios de Interprtação de código
1. a) 
Matheus Nachtergaele
Virginia Cavendish
Globo 14h

2. a) Object cachorro
Nome: Juca
Idade: 3
Raca: SDR 
Object gato
Nome: Juba
Idade: 3
Raca: SDR 
Object tartaruga
Nome: Jubo
Idade: 3
Raca: SDR 

b) "Puxa"/retorna as propriedades do objeto para criar um novo
3. a) O console retornará 
{Nome: Caio,Idade: 23,Backrender: false} , false
{Nome: Caio, Idade: 23, Backrender: false}, undefinied
b) O console retornou apenas a informação vinculada a 
chave vinculada ao objeto, pois é um dos paramentros da função, 
ou seja a foi solicitado que imprimisse no console, apenas
a informação se o Caio é ou não Backrender, que é false. 
E a altura do Caio, porém essa não é uma chave do objeto, e também 
não foi especificada.
*/

//Excercícios de escrita de código
//1.

function fraseApresentacao (pessoa) {
    return console.log ((`Meu nome é ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`))
}
const pessoa = {
    nome: "Giulia",
    apelidos: ["Giulinha", "Giubs", "Giu"]
}
fraseApresentacao(pessoa)

const pessoaNovoApelido = {
    ... pessoa,
    apelidos: ["Geminha", "Mana", "Grossinha"]
}
fraseApresentacao(pessoaNovoApelido) 
//2.
const objeto1 = {
    nome: "Giulia",
    idade: 25,
    profissao: "Engenheira"
   }
const objeto2 = {
    nome: "Nathália",
    idade: 25,
    profissao: "Administradora"
}
function umaFuncao (objetoX,objetoY) {
    let arrayX = [objetoX.nome, objetoX.nome.length, objetoX.idade, objetoX.profissao, objetoX.profissao.length]
    let arrayY = [objetoY.nome, objetoY.nome.length, objetoY.idade, objetoY.profissao, objetoY.profissao.length]
    return console.log(arrayX) + console.log (arrayY)
}
umaFuncao(objeto1, objeto2)
// parei aqui, pois não consegui acessar os dados do objeto na function

//3. 

const carrinho =[]

const fruta1 = {
    nome: "Maçã",
    disponibilidade: true
}

const fruta2 = {
    nome: "Limão",
    disponibilidade: true
}

const fruta3 = {
    nome: "Abacaxi",
    disponibilidade: true
}
function funcaoFruta (objetoA,objetoB,objetoC) {
   carrinho.push(objetoA,objetoB,objetoC)    
    return console.log(carrinho)
}
funcaoFruta(fruta1, fruta2, fruta3)
