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

// const logg = "Hello World!!!";
// console.log(logg.slice(6, 18));

// function myFn() {
//   //Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }
// myFn()

// function second() {
//     console.log(2);

// }
// second()

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прохожу курс Ивана Петреченко');
// }

// learnJS('JavaScript', done)

// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   color: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function() {
//     console.log('Test');
//   }
// };
// options.makeTest();

// console.log(Object.keys(options));
// console.log((Object.keys(options)).length);

// // console.log(options["color"]["bg"]);
// // delete options.color;
// // options.color = {
// //   border: "black",
// //   bg: "red",
// // };
// // console.log(options);
// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       counter++;
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     counter++;
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   }
//   console.log(counter);

// }

// массивы

// const arr = [1, 12, 3, 36, 10];
// arr.sort(compareNum);
// function compareNum(a, b) {
//   return a - b;
// }

// arr.pop()
// arr.push(11)
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри ${arr}`);

// })

// const str = prompt('', '');
// const products = str.split(', ');
// console.log(products);
// products.sort(compareNum);
// console.log(products.join("$ "));

// function copy(mainObj) {
//   let copyObj = {};
//   let key;
//   for (key in mainObj) {
//     copyObj[key] = mainObj[key];
//   }
//   return copyObj;
// }

const numbers = {
  a: 2,
  b: 4,
  c: {
    x: 1,
    y: 6,
  },
};

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers)
// console.log(numbers)

const add = {
  d: 17,
  v: 32,
};
console.log(Object.assign(numbers, add));

const newNum = Object.assign({}, add);
newNum.d = 20;
console.log(newNum);

let oldArray = ["a", "b", "c"];
let newArray = oldArray.slice();

newArray[2] = "YanG";
console.log(oldArray);
console.log(newArray);

const video = ["youtube", "ruutube"],
  blog = ["wordpress", "blogger"],
  internet = [...video, ...blog];
console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
}
let num = [1, 2, 6];
log(...num);

const oldA = ["a", "b", "c"];
const newA = [...oldA, "d"];
console.log(newA);

const obj = {
  a: 1,
  b: 2,
};
const newO = { ...obj, c: 7 };
console.log(newO);

let str = "some";
let myObj = new String(str);
console.log(typeof str);
console.log(typeof myObj);

let myArray = [1, 2, 3];
const myObj = myArray.join(";");
console.log(myObj);
myStr = "jhbhjnj, ddd, aaa";
newArray1 = myStr.split(" ");
console.log(newArray1);

const soldier = {
  health: 400,
  armor: 100,
  sayHi: function () {
    console.log("Hello!!!");
  },
};

const john = Object.create(soldier);
john = {
  health: 100
}


// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);


console.log(john);
console.log(john.armor);
john.sayHi();
