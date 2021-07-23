const numberOfFilm = +prompt("Сколько фильмов вы посмотрели?", '10');



personalMovieDB = {
	count: numberOfFilm,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

if (personalMovieDB.count <= 10) {
	alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
	alert('Вы классический зритель')
}else if (personalMovieDB.count >= 30) {
	alert('Вы киноман')
}else {
	alert('Произошла ошибка ')
}

for (let i = 0; i < 2; i++) {



	const a = prompt ('Последний из просмотренных фильмов?'),
			b = prompt ('На сколько его оцените?');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('Ошибка');
		i--;
	}
	

	
}

console.log(personalMovieDB);

