//a) Copie o código acima para um arquivo .ts depois:

// - crie um *type* para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.
type post = {autor: string, texto: string}

const posts: post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]


  // Quais são as entradas e saídas dessa função?
  // Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.
  // Entrada: array de oibejtos/post e uma string nome do autor
  // Saída:array de objeto post


  function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor == autorInformado
      }
    )
  }