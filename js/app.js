const numberOfFilm = prompt("Сколько фильмов вы посмотрели?", '10');

personalMovieDB = {
	count: numberOfFilm,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

const a = prompt ('Последний из просмотренных фильмов?'),
		b = prompt ('На сколько его оцените?'),
	 	c = prompt ('Последний из просмотренных фильмов?'),
	 	d = prompt ('На сколько его оцените?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);

