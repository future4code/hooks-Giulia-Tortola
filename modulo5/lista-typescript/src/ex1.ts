// Crie um função que receba uma string com o nome e outra string com uma data de nascimento 
// (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no
// seguinte formato:  "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const returnPresentation = (name: string, birthDate: string) => {
    const dateSplit = birthDate.split("/");
    return `Olá me chamo ${name}, nasci no dia ${dateSplit[0]} do mês ${dateSplit[1]} do ano de ${dateSplit[2]}`
}

console.log(returnPresentation("Giulia", "14/06/1996"))