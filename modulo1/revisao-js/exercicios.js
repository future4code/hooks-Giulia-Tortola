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
  if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
    return "Equilátero"
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
    return "Escaleno"
 }else  {
    return "Isósceles"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let array2Maior2Menor = [];
  const arrayOrdenado = array.sort((a,b) => {
    if (a>b) return 1;
    if (a<b) return -1;

    return 0
  })
  array2Maior2Menor.push(arrayOrdenado[arrayOrdenado.length -2 ])
  array2Maior2Menor.push(arrayOrdenado[1])
  return array2Maior2Menor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
pessoa.nome = "ANÔNIMO"
return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const altura = 1.5;
  const idadeMinima = 14;
  const idadeMaxima = 60;

  let pessoasNãoAutorizadas = pessoas.filter((item)=>{
    return item.altura > altura && item.idade > idadeMinima && item.idade <= idadeMaxima
  })
   return pessoasNãoAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const altura = 1.5;
  const idadeMinima = 14;
  const idadeMaxima = 60;

  let pessoasNãoAutorizadas = pessoas.filter((item)=>{
    return item.altura < altura || item.idade <= idadeMinima || item.idade > idadeMaxima
  })
   return pessoasNãoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let soma = 0;
  let novoSaldo = 0;
  for (let i = 0; i < contas.length; i++) {
      for (let somaCompras = 0; somaCompras < contas[i].compras.length; somaCompras++) {
      soma += contas[i].compras[somaCompras]; 
      novoSaldo = contas[i].saldoTotal - soma;
      contas[i].saldoTotal = novoSaldo
      soma = 0;
    }
    contas[i].compras=[]
  }
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const arrayOrdenadoAlfabeticamente = consultas.sort((a,b)=>{
    return a.nome.localeCompare(b.nome);
  })
  return arrayOrdenadoAlfabeticamente
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}