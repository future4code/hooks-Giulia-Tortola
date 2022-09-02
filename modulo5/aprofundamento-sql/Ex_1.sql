-- Desenvolva uma query que crie uma tabela de projetos para a empresa. 

CREATE TABLE Company_projects (
id VARCHAR(55) NOT NULL PRIMARY KEY,
name VARCHAR(35) NOT NULL,
title VARCHAR(35) NOT NULL,
date DATE NOT NULL);

SELECT * FROM Company_projects;

