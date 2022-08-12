//a) Quais são as entradas e saídas dessa função?
// Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// Entrada: Array de números;
// Saída: Três números, todos tipos "number";


function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior: number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// Números e arrays de números;
// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas.
// Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: () => {maior: number, menor:number, media:number}
} 


