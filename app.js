// const green = document.querySelector('.green');
// const red = document.querySelector('.red');
// const blue = document.querySelector('.blue');
// const yellow = document.querySelector('.yellow');
// const purple = document.querySelector('.purple');

// green.addEventListener('click', function () {
//   green.style.color = 'green';
// });
// if ((green.classList = 'green')) {
//   green.addEventListener('click', function () {
//     green.textContent = 'im green now';
//     green.style.backgroundColor = 'black';
//   });
// }

// red.addEventListener('click', function () {
//   red.style.color = 'red';
// });
// if ((red.classList = 'red')) {
//   red.addEventListener('click', function () {
//     red.textContent = 'im red now';
//     red.style.backgroundColor = 'black';
//   });
// }
// blue.addEventListener('click', function () {
//   blue.style.color = 'blue';
// });
// if ((blue.classList = 'blue')) {
//   blue.addEventListener('click', function () {
//     blue.textContent = 'im blue now';
//     blue.style.backgroundColor = 'black';
//   });
// }
// yellow.addEventListener('click', function () {
//   yellow.style.color = 'yellow';
// });

// if ((yellow.classList = 'yellow')) {
//   yellow.addEventListener('click', function () {
//     yellow.textContent = 'im yellow now';
//     yellow.style.backgroundColor = 'black';
//   });
// }

// purple.addEventListener('click', function () {
//   purple.style.color = 'purple';
//   purple.style.backgroundColor = 'black';
// });
// if ((purple.classList = 'purple')) {
//   purple.addEventListener('click', function () {
//     purple.textContent = 'im purple now';
//   });
// }
// purple.addEventListener('click', function () {
//   purple.classList.toggle('purple');
// });
// // const color = document.querySelector('.color');

// // color.addEventListener('click', function () {
// //   color.classList.toggle('blue');
// // });

// const h2 = document.querySelectorAll('.h2');
// console.log(h2);

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function () {
//   h2.forEach((h2) => {
//     h2.style.border = ' 5px solid yellow';
//     h2.style.background = '  green';
//   });
// });

// const tabA = document
//   .getElementById('tabA')
//   .addEventListener('click', tabANext);
// const tabB = document
//   .getElementById('tabB')
//   .addEventListener('click', tabBNext);
// const tabC = document
//   .getElementById('tabC')
//   .addEventListener('click', tabCNext);

// function tabANext() {
//   tabB.classList.add('hidden');
//   tabC.classList.add('hidden');
//   tabA.classList.toggle('hidden');
// }

// function tabBNext() {
//   tabB.classList.toggle('hidden');
//   tabC.classList.add('hidden');
//   tabA.classList.add('hidden');
// }

// function tabCNext() {
//   tabC.classList.toggle('hidden');
//   tabA.classList.add('hidden');
//   tabB.classList.add('hidden');
// }

//buttons
const tabA = document.getElementById('tabA');
const tabB = document.getElementById('tabB');
const tabC = document.getElementById('tabC');

// paragraphs
const parA = document.getElementById('parA');
const parB = document.getElementById('parB');
const parC = document.getElementById('parC');

tabA.addEventListener('click', showA);

tabB.addEventListener('click', showB);
tabC.addEventListener('click', showC);

function showA() {
  // parA.classList.toggle('hidden');
  parB.classList.add('hidden');
  parC.classList.add('hidden');
  if (parA.classList.contains('hidden')) {
    parA.classList.toggle('hidden');
  }
}

function showB() {
  parB.classList.toggle('hidden');
  parA.classList.add('hidden');
  parC.classList.add('hidden');
}
function showC() {
  parC.classList.toggle('hidden');
  parA.classList.add('hidden');
  parB.classList.add('hidden');
}

function add(num1, num2) {
  return num1 + num2;
}
add(35, 54);
add(100, 757);
add('taco ', 'cheese');

// console.log(add(10, 7));

// if (add(10, 32) > 30) {
//   console.log(' the value greater than 30');
// } else {
//   console.log('the value is less than 30');
// }

// give element ids
// put elements into variables
// add event listener to btn
const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  text.classList.add('taco');
});

// for (let taco = 0; taco <= 10; taco++) {
//   console.log(taco);
// }

for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log('FizzBuzz');
  else if (i % 3 == 0) console.log('Fizz');
  else if (i % 5 == 0) console.log('Buzz');
  else console.log(i);
}

// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// When it's done, improve it so that the number of turns is given by the user.

// let i;
// for (let i = 1; i <= 10; i++) {
//   console.log(`Turn number: ${i}`);
// }

// let i = parseInt(prompt("How many turns on the carousel?"));
let num = prompt('How many turns on the carousel?');
for (let i = 1; i <= num; i++) {
  console.log(`Turn ${num}`);
}

//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// let i;
// for (let i = 0; i <= 100; i++) {
//   i = prompt("Give me a number please");
//   if (i <= 100) {
//     alert("you did it");
//   }
// }

// let number = prompt('give me a number 50-100');

// while (number <= 50 || number >= 100) {
//   number = prompt('give me a number 50-100');
// }

// Write a program that asks the user for a number, then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
