const objeto = {
    nomeDaPessoa = nome,
    generoDaPessoa = genero
}
function retornarBemVindes (objeto) {
 
    if objeto.generoDaPessoa === "masculino" {
        return `Bem vindo ${objeto.nomeDaPessoa}`
    }
    else if objeto.generoDaPessoa === "feminino" {
        return `Bem vinda ${objeto.nomeDaPessoa}`
    }
    else objeto.generoDaPessoa === "outro" {
        return `Desejamos boas vindas`
    }
}

retornarBemVindes("Giulia", "feminino")
