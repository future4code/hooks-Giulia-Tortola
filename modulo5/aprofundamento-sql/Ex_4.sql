-- Dito isto, desenvolva uma query que adicione uma propriedade chamada “description” a tabela de projetos, sem apagar a tabela inteira. Confirme o sucesso da operação.

ALTER TABLE Company_projects ADD description VARCHAR(255);

-- Desenvolva uma query que atualize o campo “description” de cada projeto existente no banco de dados. Tome como referência as seguintes descrições:

UPDATE Company_projects SET description="Projeto de sistema em nuvem da Labenu." WHERE id = "001";
UPDATE Company_projects SET description="Projeto de sistema de gerenciamento de músicas da Labenu." WHERE id = "002";
UPDATE Company_projects SET description="Projeto de rede de comunicação da Labenu." WHERE id = "003";

DESCRIBE Company_projects;

SELECT * FROM Company_projects;