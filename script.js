"use strict"

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
let requestAboutMovie = function() {
	let last = prompt("Последний просмотренный вами фильм:", ""),
		rating = prompt("Насколько оцените? (0-10)", "0");
		rating = rating < 0 ? 0 : rating > 10 ? 10 : typeof(+rating) == "string" ? prompt("Ошибка! Необходимо ввести число!") : rating;
		personalMovieDB.movies[last] = rating;
};

requestAboutMovie();
requestAboutMovie();
console.log(personalMovieDB.movies);