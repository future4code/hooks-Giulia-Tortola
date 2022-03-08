/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log ("Boas vindos ao jogo de Blackjack!")
    
    let jogo = confirm("Quer inicar uma nova Rodada?")

    if (jogo) {
       let carta1Usuaria = comprarCarta()
       let carta2usuaria = comprarCarta()
       let carta1CPU = comprarCarta()
       let carta2CPU = comprarCarta()

       let pontuacaoUser = carta1Usuaria.valor + carta2usuaria.valor
       let pontuacaoCPU = carta1CPU.valor + carta2CPU.valor
       console.log (`A cartas do usuário são ${carta1Usuaria.texto} e ${carta2usuaria.texto} e sua pontuação é ${pontuacaoUser}`)

       console.log (`A cartas do usuário são ${carta1CPU.texto} e ${carta2CPU.texto} e sua pontuação é ${pontuacaoCPU}`)
    if (pontuacaoUser > pontuacaoCPU) {
      console.log ("O usuário ganhou!")
      
   } else if (pontuacaoUser < pontuacaoCPU) {
      console.log ("O computador ganhou!")
   } else if (pontuacaoUser === pontuacaoCPU) {
    console.log("Empate")
 } else {
       console.log("O jogo acabou!")
    }
   }