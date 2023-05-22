const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

// //0
// const first = { name: 'John' };
// const second = { age: '12' };
// const addboth = { ...first, ...second, job: 'teacher' };
// console.log(addboth);

// //1
// const cars1 = ["Saab", "Volvo", "BMW"];
// const cars2 = ["Fiat", "Toyota"];
// const combined = [...cars1, 'number2', ...cars2];
// let text = "";
// for (let x of cars1) {
//   text = "<br>" + x + "<br>";
//   console.log(text);
// }
// console.log(combined);
// //2
// const squere = number => number * number;
// console.log(squere(5));
// //3
// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: false },
//   { id: 3, isActive: false }
// ];
// const notActiveJobs = jobs.filter(job => !job.isActive);
// console.log(notActiveJobs);
// //4
// const colors = ["red", "green", "yellow"];
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);
// //5
// const address = {
//   city: 'Tel-aviv',
//   state: 'Israel',
//   street: 'Chai'
// }
// const { city, state, street } = address;
// console.log(state, city);

// //6
// // function sum(a, b) {
// //   return a + b;
// // }
// const summary = (a, b) => a + b;
// console.log(summary(3, 7));

// //7

// // function isEmpty(number) {
// //   return number >= 0;
// // }
// const isEmpty = number => number >= 0;
// console.log(isEmpty(-5));

// //8

// // document.addEventListener('click', function () {
// //   console.log('click')
// // })
// // document.addEventListener('click', () => console.log('click'));

// //test---test
// // 9
// // count characters in each word and return array
// const fruits = ["Fig", "Orange", "Apple", "Mango", "Banana"];
// let users = fruits.map(fruit => fruit.length);
// console.log(users);

// // 10
// // Return the sum of all even זוגי numbers squared in array 
// let numStr = [1, 2, 3, 4, 5];
// const squareEvenNumbers = arr => arr
//   .filter(num => num % 2 === 0)
//   .reduce((total, num) => total + num ** 2, 0);
// console.log(squareEvenNumbers(numStr));

// // 11
// const getAllWords = (str => str.join(' '));                                        // Checks for empty string                                        
// let output = getAllWords(['Radagast', 'the', 'Brown']);
// console.log(output); // --> ['Radagast', 'the', 'Brown']

// //12
// // sort numbers of given array from low to hight
// let sortLow = [0, 1, 2, 3, 10, 20, 30];
// sortLow.sort(function (a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   return 0;
// });

// console.log(sortLow);

// //12
// // sort numbers of given array from high to low

// let sortHigh = [0, 1, 2, 3, 10, 20, 30];
// sortHigh.sort(function (a, b) {
//   if (a < b) return 1;
//   if (a > b) return -1;
//   return 0;
// });

// console.log(sortHigh);

// // 13
// // Find the highest value:
// const numberHigh = [40, 80, 1, 5, 25, 10];
// numberHigh.sort((a, b) => a - b);
// let highest = numberHigh[numberHigh.length - 1];
// console.log(highest);
// console.log(Math.max(...numberHigh));

// // 14
// // Find the lowest value:
// const numberLow = [40, 80, 2, 5, 25, 10];
// console.log(Math.min(...numberLow));

// // 15
// // Answer number 2: Code which counts a character occurrence in a repeated string
// var S = "abcd";
// var N = 10;
// var C = "a";

// function char_count(letter) {
//   var letter_Count = 0;
//   var String = S.repeat(10).substring(0, N);
//   console.log(String);
//   for (var position = 0; position < String.length; position++) {
//     if (String.charAt(position) == letter) {
//       letter_Count += 1;
//     }
//   }
//   return letter_Count;
// }

// console.log(`Result:` + `${char_count(C)}` + ` occurrences`);

// // 16 - checks if all array condition
// const grades = [80, 85, 90, 95, 100];
// const checker = grades.every(grade => grade >= 80);
// console.log("16: " + checker);

// // 17 - checks if at least one of the array condition
// const myGrade = [80, 85, 90, 95, 100];
// const checkerSome = myGrade.some(grade => grade >= 90);
// console.log("17: " + checkerSome);

// //18
// const people = [
//   { name: 'David', color: 'black' },
//   { name: 'John', color: 'white' },
//   { name: 'Bob', color: 'pink' },
//   { name: 'Bob', color: 'black' },
//   { name: 'John', color: 'green' }
// ];
// const finder = people.find(person => person.name === 'John');
// console.log(finder);


// // 19 checks if includes a number
// const myNum = [80, 86, 90, 95, 100];
// const resulte = myNum.includes(86);
// console.log(resulte);