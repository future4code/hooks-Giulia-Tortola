/* 1. 
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Análise: 

Imprimirá no console "10" 
E depos imprimirá "10, 5"
No primeiro console a variável é 10, e na segunda a vairiável b assumiu um novo valor,
e o comando pediu que apresentasse a variável a e b, sendo o "novo" valor de b
*/

/* 2. 
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) 

Análise: 
Primeiramente, o c não foi apresentado como variável, será apresentado erro,
pois o comando pede para imprimir três variáveis "a, b e c".

Errei, c foi apresentado sem problemas, pois está igualado a uma variável definida anteriormente. 
Console imprimiu "10,10,10" sendo a=c e b=c todos os valores são iguais a 10
*/

/* 3. 
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) 

O programa no instante que abre, pergunta sobre quantas horas trabalha por dia solicitando uma resposta,
Depois da primeira respondida, o programa pergunta a quantidade de horas, e depois de respondida
apresenta o alerta pegando os dados coletados nas perguntas anteriores, dividindo e imprime na tela 
"Você recebe $X por hora"

Colocaria os nomes das variáveis de forma mais completa
horasDeTrabalhoPorDia
recebePorDiaDeTrabalho
*/
let nome = ""
let idade = 

console.log (typeof nome)// imprimiu no console string pois coloquei as aspas
console.log (typeof idade) // imprimiu no console "undefined" pois não há declaração de nenhum tipo ou dado ainda

let nomeDoUsuario = prompt ("Qual seu nome?")
let idadeDoUsuario = prompt ("Qual sua idade?")
let voceTemPet = prompt ("Você tem algum pet?")
let voceMoraNoBrasil = prompt ("Você mora no Brasil?")
let gostaDeSeries = prompt ("Você gosta de Séries?")

console.log (typeof nomeDoUsuario) // imprimiu novamente uma string
console.log (typeof idadeDoUsuario) // e imprimiu "undefined", continuou igual a antes de ter a declaração de um valor

let a = 10
let b = 25

c = b // transfere a coca do copo B para copo C
b = a // suco do copo A para copo B 
a = c  // coca do copo C para o A

console.log ("O novo valor de a é", a)
console.log ("O novo valor de b é", b)
console.log ("Olá " + nomeDoUsuario + ", você tem " + idadeDoUsuario + " anos") // imprimiu corretamente a frase, mas nao consegui usando vírgulas
console.log ("Você tem algum pet? - ", voceTemPet)
console.log ("Você mora no Brasil? - ", voceMoraNoBrasil)
console.log ("Você gosta de Séries? - ", gostaDeSeries)
