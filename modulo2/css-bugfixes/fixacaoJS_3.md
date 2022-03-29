```
function calculaNota(ex, p1, p2) {
  let pesoUm = ex*1 
  let pesoDois = p1*2
  let pesoTres = p2*3
  let notaFinal = ((pesoUm+pesoDois+pesoTres)/6)
  if (notaFinal >= 9){
    return "A"
  }else if(notaFinal <9 && notaFinal >= 7.5){
    return "B"
  }else if(notaFinal <7 && notaFinal >= 6){
    return "C"
  } else {
    return "D"
  }
}
```