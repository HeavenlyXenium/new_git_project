;"use strict";

let errorCount = 0;

const personalMovieDB = {
	count: 0,
	status: "Ещё не определён",
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		errorCount = 0;

		do {
			if (this.abortCounter()) return;
			personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "0");
		} while ( isNaN(personalMovieDB.count) || personalMovieDB.count == null );

			if (personalMovieDB.count < 10) {
			alert("Ты мало смотришь!")
			personalMovieDB.status = "Начинающий зритель";
		} else if (personalMovieDB.count > 30) {
			alert("Ты киноман!")
			personalMovieDB.status = "Киноман";
		} else {
			alert("Ты среднячек!")
			personalMovieDB.status = "Классический зритель";
		};
	},
	requestAboutMovie: function() {
		let last, rating;

		errorCount = 0;

		do {
			if (this.abortCounter()) return;
			last = prompt("Последний просмотренный вами фильм:", "");
		} while ( last === "" || String(last).length > 50 || String(+last) !== "NaN" || last == null);

		errorCount = 0;

		do {
			if (this.abortCounter()) return;
			rating = prompt(`Насколько оцените ${last}? (0-10)`, "0");
		} while ( isNaN(+rating) || rating == null || rating < 0 || rating > 10);

			personalMovieDB.movies[last] = rating;
	},
	requestAboutGenres: function() {
		for (let i = 3;i--;) { 						// количество заданных вопросов про жанр
			let answer, number = personalMovieDB.genres.length+1;
			errorCount = 0;

			do {
				if (this.abortCounter()) return;
				answer = prompt(`Какой ваш любимый жанр под номером ${number}?`, "");
			} while ( answer === "" || String(answer).length > 50 || String(+answer) !== "NaN" || answer == null);

			personalMovieDB.genres[personalMovieDB.genres.length] = answer;
		};

		personalMovieDB.genres.forEach(function(x, index){
			console.log(`Ваш любимый жанр номер ${index+1}: ${x}`);
		});
	},
	showMyDB: function() {
		!personalMovieDB.privat ? console.log(personalMovieDB) : console.log("Ошибка доступа!");
	},
	abortCounter: function() {
			if (errorCount++ > 0 && errorCount < 4) {					//
				alert("Ошибка ввода...")			//	Проверка ввода ошибочных
			} else if (errorCount >= 4) {						//	данных и отмена фунцкии
				alert("Не судьба...");				//	в случае 3-х неверных
				return true;									//	ответов
			}																//
	},
	toggleVisibleMyDB: function(){
		this.privat = !this.privat;
	}
};

personalMovieDB.start();
//personalMovieDB.requestAboutGenres();
//personalMovieDB.requestAboutMovie();
//personalMovieDB.showMyDB();
//console.log(personalMovieDB)