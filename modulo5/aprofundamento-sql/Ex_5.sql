-- Desenvolva uma query que exiba todos as informações dos projetos registrados, em ordem decrescente de prazo de vencimento. Ou seja, o primeiro item deve ser o que possui o prazo mais distante e o último item possui o prazo mais próximo da data atual.

SELECT * FROM Company_projects ORDER BY dueDate DESC;

-- Desenvolva uma query que exiba o nome e prazo de vencimento dos projetos próximos de sua data final de entrega. Mostre apenas os 2 mais próximos de encerrarem.

SELECT * FROM Company_projects ORDER BY dueDate ASC LIMIT 2 ;