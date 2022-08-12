// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.

// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Como você faria, já com a extensão instalada,
// para transpilar(converter) esse arquivo typescript em um arquivo javascript?
// usando os scrips e utilizando o tsc


//c) E se este arquivo estivesse dentro de uma pasta chamada src. 
// O processo seria diferente? Se sim, descreva as diferenças.
// Sim, precisa descrever o caminho dos arquivos a serem transpilados;

// d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? 
// Caso conheça, explique como fazer.
// "ex4": "tsc && node ./build/exercicio4.js && ./build/exercicio5.js"