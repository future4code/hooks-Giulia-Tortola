/* Exercícios de interpretação de código
1. A função de Array map, imprimirá no console todos os objetos juntamente com a indicação da "posição"/index
2. Será impresso um novo array composto apenas dos nome do array original
3. Imprimirá apenas os outros dois objetos que não tem "Chijo"*/


/*Exercícios de Escrita de Código*/


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// 1.a)
 const apenasNomes = pets.map((item) => {
    return item.nome
 })
 
 console.log(apenasNomes)
//1.b)
 const apenasSalsicha = pets.filter((pets) => {
    return pets.raca === "Salsicha"
 })

 console.log(apenasSalsicha)
//1.c)
const apenasPoddle = pets.filter ((pets) => pets.raca === "Poodle")

const promoPoddles = apenasPoddle.map((pet) => {
   let aviso = (`Você ganhou 10% de desconto para o tosar o/a ${pet.nome}`)
   return aviso
})
console.log(promoPoddles)
//dados
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//2.a) Crie um novo array que contenha apenas o nome de cada item

const nomesProdutos = produtos.map((item) => {
   return item.nome
})
console.log(nomesProdutos)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const descontoProdutos = produtos.map((item) => {
    return{nome: item.nome, preco: ((item.preco)*0.95).toFixed(2)} 
})
console.log (descontoProdutos)
//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidas =  produtos.filter((item) => {
   if (item.categoria === "Bebidas")
   return item
})
console.log (bebidas)
// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const produtosYpe = produtos.filter(item =>item.nome.includes("Ypê"))
console.log (produtosYpe)
//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const anuncioYpe = produtosYpe.map((produtosYpe) => {
   let anuncio = (`Compre ${produtosYpe.nome} por ${produtosYpe.preco}`)
   return anuncio
})
console.log(anuncioYpe)