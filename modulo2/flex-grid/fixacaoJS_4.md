```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let contagemArray = 0
    for (let i=0;i<arrayDeNumeros.length;i++){
   if (arrayDeNumeros[i] === numeroEscolhido){
  contagemArray++
   }}
   if (contagemArray > 0){
    return `O número ${numeroEscolhido} aparece ${contagemArray}x`    
   }else{return "Número não encontrado"}
   }
````