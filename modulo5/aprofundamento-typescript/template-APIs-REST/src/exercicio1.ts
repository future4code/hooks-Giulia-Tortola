// a) Crie uma variável minhaString do tipo string
// e atribua um valor a ela. Tente atribuir um número a esta variável. 
// O que acontece?

let minhaString: string = "Minha String";

//minhaString= 5;

// Typescritp reclama que não é possivel trocar de tipo de variável!

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
//  Como fazer para que essa variável também aceite strings? 
//Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

let meuNumero: number | string = 5;
meuNumero= "Cinco";

// É possivel cria uma variável que aceite mais de um tipo incluindo o caractere "|"
// e atribuiindo dois tipo de variáveis em uma única variável 

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

type pessoa = {nome: string, idade: number, corFavorita: Cores} 

enum Cores{
    VERMELHO="Vermelho",
    LARANJA="Laranja",
    AMARELO="Amarelo",
    VERDE="Verde",
    AZUL="Azul",
    ANIL="Anil",
    VIOLETA="Violeta"
}
//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
//Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade corFavorita para que apenas
// seja possível escolher entre as cores do arco-íris.
// Utilize um enum para isso.

const Giulia:pessoa  = {
    nome:"Giulia",
    idade: 26,
    corFavorita: Cores.VERDE

}

const Rafa:pessoa  = {
    nome:"Rafael",
    idade: 31,
    corFavorita: Cores.AZUL
}

const Vic:pessoa  = {
    nome:"Victoria",
    idade: 26,
    corFavorita: Cores.VERMELHO
}



