// var life = 100; // This is my life bar Number

// life = life - 10;
// life = life - 10;

// var name1= 'Dev Ed'; // This is the name displayed in the game STRING

// var checkout = true;

// var box;

// var box1 = null;

// // --------------------------

// const life2 = 100;

// let life3 = 100;
// life3 = life3 - 58;

// console.log(life3)




// console.log(life);


// ------------------------------------------------



// const name1 = "Dev Ed";

// function toUpper(){
//     console.log('Party Time')
//     console.log('Party Time')
//     console.log('Party Time')
//     console.log('Party Time')
//     console.log(name1)
// }

// toUpper();

// function adder(num1, num2){
//     console.log(num1 + num2)

// }

// adder(5, 10);


// const name1 = "Dev Ed";
// const youtuber = 'Traversy Media'

//------------------------1---------------------------
// function toUpper(text){
//     const upperCased = text.toUpperCase();
//     console.log(upperCased)

// }

// toUpper(name1);
// toUpper(youtuber)

//-----------------------2-----------------------------
// const toUpper = function(){
//     asdasd
// }

//-----------------------3----------------------------
// const toUpper2 = () => {
//     asdasd
// }

//---------------------------------concatination----------------------------------

// const myAge = 24;

// const yourAge = 21;

// console.log(myAge + yourAge);


// console.log("Hello my name is " + "Ed");

// console.log('Hello it\'s me');

// const namee = "Edwin";

// const age = 24;

// // // console.log(`Hello it's me and my name is ${namee}`);
// // console.log("Hello it's me  " + namee + " and my age is " + age + " and I am getting old");

// // console.log(`Hello it's me ${namee} and my age is ${age}`)

// const combined = namee + age;
// console.log(combined)

// -------------------------if else statememts----------------------------------------------------


// const age = 18;

// if(age === 18){
//     console.log("You are good to go!");
// }else if(age <= 15){
//     console.log("Wow you are really young... Whay are you even here");
// }else{
//     console.log("You are not old enough!")
// }

// const dice1 = 6;
// const dice2 = 3;

// if(dice1 === 6 && dice2 === 6){
//     console.log("You rolled a double")
// }else{
//     console.log("Your didn't")
// }
// if(dice1 === 6 || dice2 === 6){
//     console.log("You rolled a double")
// }else{
//     console.log("Your didn't")
// }


//-------------------Arrays---------------------------

// const schedule = ['Wake up', 'Eat', 'Film a video', 'Watch things on netflix']; // how to create array

// console.log(schedule) // print whole array
// console.log(schedule[0]) // print one item by index 

// schedule.push('Hey a new thing got added') // add item in the end

// console.log(schedule)
// schedule.pop();  // remove item from end 
// console.log(schedule)
// schedule.shift() // remove item from begginig
// console.log(schedule)
// schedule.unshift('Hey beggining') // add item in the beggining
// console.log(schedule)
// console.log(schedule.indexOf('Eat'));  // find a idexof item 
// const film = schedule.indexOf('Film a video') // save indexof item in the variable 
// console.log(film)



// -----------------------Objects and Keyword This-------------------------------------
// // creating object
// const user = {
//     name: 'Edwin', // properties
//     age: 24,
//     married: false,
//     purchases: ['phone', 'car', 'laptop'],

//     sayName: function(){
//         console.log(this.name); // keyword this here will show only name 
//     }
// };

// // console.log(user.purchases); // how to get access to specific properties
// // function apples(){
// //     console.log('apple');
// // }
// // // This

// // // window.apples();
// // apples();
// // console.log(this); // keyword this shows everything in the window

// user.sayName();

// function sayMyAge(){
//     console.log(`My age is ${this}`); // this here means objects window but wont show
// }
// sayMyAge();


// -----------------------For loop and while loop ----------------------------------

// const names = ['Ed', 'John', 'Maria', 'Eliza', 'Burrito', 'Harry', 'Potter'];


// // simple for loop sintex

// // for(i of names){
// //     console.log(i)
// // }

// // for(i of names){
// //     console.log(i) // will print every iteration 
// //     if(i === 'Maria'){
// //         console.log('Maria is in my list!')
// //         break; // when iteration meet 'Maria' it will stop
// //     }
// // }

// // while loop

// let loading = 0;

// while(loading < 100){
//     console.log('Website is still loading');

//     loading++;
// }


// -----------------------Manipulation javascript ---------------------------

// const text = document.querySelector('h1');
// const changeColor = document.querySelector('.changeColor');


// // text.style.color = 'white';
// // text.style.backgroundColor = 'red';

// // text.classList.add('change');

// // text.classList.remove('change');

// // changeColor.addEventListener('click', function(){
// //     text.classList.add('change');
// // }) // callback function will execited


// changeColor.addEventListener('click', function(){
//     text.classList.toggle('change');
// }) // callback function will execited


// // const userList = document.querySelectorAll(".name-list li");
// const userList = document.querySelector(".name-list");
// const listInput = document.querySelector(".list-input");
// const addListBtn = document.querySelector(".addListBtn");

// // for(user of userList){
// //     user.addEventListener('click', function(){
// //         // console.log(this); 
// //         this.style.color = 'red';
// //     });
// // }


// // console.log(listInput.value);

// addListBtn.addEventListener('click', function(){
// // Create an li out of thin air
// const newLi = document.createElement('LI');
// const liContent = document.createTextNode(listInput.value);
// // Add the input value inside that new li
// newLi.appendChild(liContent);
// // Attaching the li to the user list
// userList.appendChild(newLi);

// });

