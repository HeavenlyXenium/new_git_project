;"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let requestAboutMovie = function() {
	let i = 0, last = prompt("Последний просмотренный вами фильм:", "");

		while ( last === "" || String(last).length > 50 || String(+last) !== "NaN" || last == null) {
			alert("Некорректный ответ!");
			last = prompt("Последний просмотренный вами фильм:", "");
			if (++i == 2) {
				alert("Ошибка...");
				return false;
			}
		};

	let rating = prompt("Насколько оцените? (0-10)", "0");

		rating = rating < 0 ? 0 : rating > 10 ? 10 : typeof(+rating) == "string" ? prompt("Ошибка! Необходимо ввести число!") : rating;
		personalMovieDB.movies[last] = rating;
};

console.log(+personalMovieDB.count)

if (String(personalMovieDB.count) < 10) {
	alert("Ты мало смотришь!")
} else if (+personalMovieDB.count > 30) {
	alert("Ты киноман!")
} else if (String(+personalMovieDB.count) !== "NaN" && String(+personalMovieDB.count) !== "0") {
	alert("Ты среднячек!")
} else {
	alert("Ошибка проверки количества просмотренных фильмов...")
};

requestAboutMovie();
//requestAboutMovie();
//console.log(personalMovieDB.movies);