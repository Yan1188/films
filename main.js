// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// if (personalMovieDB.count != "") {
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// } else {
//   console.log("error");
//   j--;
// }

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?, ''");
//   const b = prompt("На сколько оцените его?");

//   if (a !== "" && b !== "" && a !== null && b !== null && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     // console.log("done!");
//   } else {
//     // console.log("Eror");
//     i--; //возвращаем цикл на одно повторение назад такой командой
//     break;
//   }
// }

// let i = 0;
// while (i < 2) {
//     i++
//     const a = prompt("Один из последних просмотренных фильмов?, ''");
//     const b = prompt("На сколько оцените его?");
    
//     if (a !== "" && b !== "" && a !== null && b !== null && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       // console.log("done!");
//     } else {
//       // console.log("Eror");
//       i--; //возвращаем цикл на одно повторение назад такой командой
//     }
//   }

// console.log(personalMovieDB);

// const myFn = function(a, b) {
//     let c = a * b ;
//     return c
// }

// myFn(2, 3)

// function myFn2(a, b) {
//     let c = a + b;
//     return c;
// }
// myFn2(2, 3)

// a = 2;
// b = 1;

//  (a, b)=>{
//    return a - b
// }

// function ret() {
//     let num = 50;
//     return num
// }
// const another = ret();
// console.log(another);


// const logger = (a, b) => a + b;

// logger(1, 2);

// const usdCurr = 90;
// const evrCurr = 110;
// const discount = 0.9;

// function convert(amount, curr) {
//     return(curr * amount)
// }

// function promoution(result) {
//     console.log(result * discount)
// }
// const res = convert(100, usdCurr)
// promoution(res)

// function test () {
//     for(i=0; i < 5; i++){
//         console.log(i);
//         if (i===4) return;
//     }
//     console.log('Done');
    
// };
// test()


// function doNothing() {}
// console.log(doNothing() === undefined);

// const str = 'Text';
// console.log(str.replase(e, d));
// console.log(str.replase());

const logg = "Hello World!!!";
console.log(logg.slice(6, 18));


