// // // const url = 'https://www.javascripttutorial.net/sample/promise/api.json';
// // // const btn = document.querySelector('#btnGet');
// // // const msg = document.querySelector('#message');

// // // btn.addEventListener('click', () => {
// // //   load(URL)
// // //     .then((response) => {
// // //       const result = JSON.parse(response);
// // //       msg.innerHTML = result.message;
// // //     })
// // //     .catch((error) => {
// // //       msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
// // //     });
// // // });

// // const book = {
// //   title: "The Great Adventure",
// //   author: "Jane Smith",
// //   year: 2018,
// //   pages: 320,
// //   available: true,
// // };

// // // Print title using dot notation
// // console.log(book.title);

// // // Print author using bracket notation
// // console.log(book["author"]);

// // // Add a new property called genre
// // book.genre = "Fiction";

// // // Change available to false (book has been borrowed)
// // book.available = false;

// // // Delete the year property
// // delete book.year;

// // // Print all the keys, then all the values
// // console.log(Object.keys(book));
// // console.log(Object.values(book));

// // // Loop through and print each property as key: value
// // for (let key in book) {
// //   console.log(key + ": " + book[key]);
// // }

// let a = 10;
// let b = a;
// b = 20;
// console.log("a=",a);
// console.log("b=",b);

// //prediction: a=10,b=20

// let name1 = "Alice";
// let name2 = name1;
// name2 = "Bob";
// console.log("name1 is",name1);
// console.log("name2 is",name2);

// //prediction: name1= Alice, name2=Bob

// //changing b did not affect a because they are primitive values
// //and primitive values are stored in a stack having their own memory
// //therefore changing the value of one variable won't affect the other
// //similar to name1 and name2

const scores = [72, 85, 90, 64, 58, 93, 77, 81];
//print the total number of scores in the array
console.log("total number of scores=", scores.length);

//calculate and print the average score
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}
let average = sum / scores.length;
console.log("Average score=", average);

//Find and print the highest and lowest scores
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
console.log("Highest=", highest);
console.log("Lowest=", lowest);

//creating an array called passed containing scores above 70
const passed = scores.filter((score) => score >= 70);
console.log("Passed:", passed);

//new array called  curved where each score has 5 bonus points added (but no score should go above 100).
const curved = scores.map((score) => Math.min(score + 5, 100));
console.log("Curved:", curved);