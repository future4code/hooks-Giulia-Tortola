1 - A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à entrada da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 

Abaixo, há o exemplo de uso da função de *hash* a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
 O rounds está relacionado a quantidade de vezes que a encriptação vai rodar, 12, para não gerar lentidão no processo de encriptação.

2 - Na aula anterior, implementamos os endpoints de signup e login sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: no cadastro, antes de salvar o usuário no banco, temos que criptografar a senha, para que, no banco, não fique a senha em si. Já, no login, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de Hash para isso. 
a) O cadastro pois ele se passa antes da senha ser salva no bd.
d) Não pois o endpoint trabalha com o token gerado.