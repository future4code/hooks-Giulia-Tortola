// Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes.
// Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e
// 3. gênero do filme. Os gêneros da plataforma se limitam aqueles 
// encontrados no seguinte ENUM de gêneros: 


enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type movieInfo = {
    movieName:string,
    releaseYear: number,
    movieGenre: GENERO,
    imdb?: number
}

const returnInfoMovie = (movieName:string, releaseYear: number, movieGenre: GENERO, imdb?: number): movieInfo => {
    if (imdb){
        const movies: movieInfo = {
            movieName:movieName,
            releaseYear: releaseYear,
            movieGenre: movieGenre,
            imdb: imdb
        };
        return movies }
        else {
            const movies: movieInfo = {
                movieName:movieName,
                releaseYear: releaseYear,
                movieGenre: movieGenre,
            };
            return movies 
        }
    }


console.log(returnInfoMovie("Duna", 2021, GENERO.ACAO,74))
console.log(returnInfoMovie("Duna", 2021, GENERO.ACAO))