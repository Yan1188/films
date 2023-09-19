"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == null ||
      personalMovieDB.count == "" ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.counts = +prompt(
        "Сколько фильмов вы уже посмотрели?",
        ""
      );
    }
  },

  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },

  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?, ''").trim();
      const b = prompt("На сколько оцените его?");

      if (a !== "" && b !== "" && a !== null && b !== null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        // console.log("done!");
      } else {
        console.log("Eror");
        i--; //возвращаем цикл на одно повторение назад такой командой
      }
    }
  },

  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    } else {
      return;
    }
  },
  toggleVisibleMyDB: () => {
    // personalMovieDB.privat.toggle;

    if (personalMovieDB.privat) {
      return (personalMovieDB.privat = false);
    } else {
      return (personalMovieDB.privat = true);
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      const numberGenre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (numberGenre == "" || numberGenre == null) {
        console.log("Вы ввели не правильные данные");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = numberGenre;
      }

      // for (let i = 1; i < 2; i++) {
      //   // let numberGenre = prompt(`Ваш любимый жанр под номером ${i}`);
      //   let numberGenres = prompt(`Напишите ваши любимые жанры через запятую`).toLowerCase();

      //   if (numberGenres == "" || numberGenres == null) {
      //     console.log("Вы ввели не правильные данные");
      //     i--;
      //   } else {
      //     personalMovieDB.genres = numberGenres.split(", ");
      //     personalMovieDB.genres.sort();
      //   }
      // }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
