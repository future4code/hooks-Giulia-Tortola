/* a) Desenvolva uma query que exiba a lista completa de usuários criados anteriormente, com todos os seus dados. */
SELECT * FROM Company_employees;
/*b)Desenvolva uma query que nos retorne apenas as informações de id e nome dos usuários da tabela. Além disso, a coluna de id´s deve ser exibida com o texto “identifier”. */
SELECT id as "identifier", name FROM Company_employees;
/*c) Desenvolva uma query que nos retorne apenas as informações do usuário “Laura”. A busca deve ser feita pelo id.*/
SELECT * FROM Company_employees WHERE id ="003";
/*d) Desenvolva uma query que nos retorne todos os usuários que tenham a letra “a” no seu nome.*/
SELECT * FROM Company_employees WHERE name like "%a%";
/*e) Desenvolva uma query que nos retorne todos os usuários que não tenham a letra “r” no seu nome, mas que tenham a letra “u” no seu e-mail.*/
SELECT * FROM Company_employees WHERE name NOT LIKE  "%r%" AND email LIKE "%u%";