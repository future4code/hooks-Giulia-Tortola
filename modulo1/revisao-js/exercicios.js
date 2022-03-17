// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let quantidadeElementos = array.length
   return quantidadeElementos
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let arrayInvertido = array.reverse(array)
  return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const compararNumeros = (a,b) => {
        return a - b // não entendi exatamente como funciona essa função, e o que ela faz
    }
  let arrayOrdenado = array.sort(compararNumeros)
  return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPares = []
  for(i = 0; i<array.length;i++) {
    if(array[i] % 2 ===0){
      arrayPares.push(array[i])
    }
  }return arrayPares
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayPares = []
  let arrayElevado =[]
  for(i = 0; i<array.length;i++) {
    if(array[i] % 2 ===0){
      arrayPares.push(array[i])
      arrayElevado.push(array[i]*array[i])
    }
  }return arrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for(let i=0; i< array.length; i++){
    if(array[i] > maiorNumero){
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero 
  let menorNumero
  let maiorDivisivelPorMenor
  if (num1>num2){
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }
  let diference = maiorNumero - menorNumero
  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0 
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diference
  }
  

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
   for (let i = 0 ; numerosPares.length <n; i+=2){
     numerosPares.push(i);
   } return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}