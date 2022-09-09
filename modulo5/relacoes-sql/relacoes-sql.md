### Exercício 1
#### a) É o campo que vincula duas tabelas. Sendo uma coluna correspondente a outra de chave primária; 

#### b) 
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    movie_name VARCHAR(255) NOT NULL,
   	rating FLOAT NOT NULL
);
```
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("001", "Emocionante!!",7,"001"),("003","Emocionante!!", 5,"001");
```
```
INSERT INTO Movie (id, movie_name, rating) 
VALUES ( "001", "Avatar", 10),
( "002", "It", 7);
```
### c)
##### Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hooks-xxxxx-giulia-tor`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
##### Não é possível alterar ou adicionar uma linha "filha". A foreign key não foi encontrada. E não pode realizar a inserção! 


### d) 
```
ALTER TABLE Movie DROP COLUMN rating;
```
### e)
#### Deu certo! Era para dar?
```
DELETE FROM Rating WHERE movie_id = "001";
```

### Exercício 2
#### a) A Tabela de Elenco de filme é vincula o ID do Filme com os atores que participaram dos filmes também através do ID
```
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    actor_name VARCHAR(255) NOT NULL);
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
INSERT INTO Actor (id, actor_name) 
VALUES ( "001", "Zoe Saldana"),
( "002", "Vin Diesel"),
( "003", "Edie Falco"),
( "004", "Finn Wlfhard"),
( "005", "Bill Skarkgard"),
( "006", "Sophia Lillis");
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES
("001","001"),
("001","002"),
("001","003"),
("002","004"),
("002","005"),
("002","006");
```
```
DELETE FROM Actor WHERE id = "001";
```
### Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hooks-4313341-giulia-tortola`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
### Não é possível alterar ou remover uma linha "filha": requisitor da foreing key falham!


### Exercício 3
### a)  Trazer todas as informações da Tabela Movie, juntando com a tabela Rating e vinculando os dados de nota com a ID do Filme
``` 
SELECT * FROM Movie 
JOIN Rating ON Movie.id = Rating.movie_id;
```
### b) Retornar apenas a ID do filme com sua nota vinculada na tabela Rating e o id;
```
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```
