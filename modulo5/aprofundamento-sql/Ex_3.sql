-- Partindo desta situação, desenvolva uma query que possibilite a remoção dos dados de title (e também a coluna inteira), sem apagar a tabela inteira. Confirme o sucesso da operação.
-- a) 
ALTER TABLE Company_projects DROP COLUMN title;

-- b) Desenvolva uma query que altere o nome da propriedade “date” para “dueDate"

ALTER TABLE Company_projects CHANGE date dueDate DATE NOT NULL;

-- c) Desta forma, desenvolva uma query que adicione a restrição de name único para cada usuário na tabela de projetos, sem apagar a tabela inteira

ALTER TABLE Company_projects MODIFY name VARCHAR(35) NOT NULL UNIQUE;

DESCRIBE Company_projects;

SELECT * FROM Company_projects;



