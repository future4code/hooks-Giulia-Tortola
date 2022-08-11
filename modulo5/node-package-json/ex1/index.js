let recebeNome = String(process.argv[2])
let recebeIdade = Number(process.argv[3])
let emSeteAnos =  recebeIdade + 7

const frase = `Olá, ${recebeNome}! Você tem ${recebeIdade} anos. Em sete anos você terá ${emSeteAnos}`

console.log(frase)