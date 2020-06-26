
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

// var, let, const
// for most part you don't want to use var

let age;      //use const unless you know you gonna reassign it.
age = 78;

const score = 10;

console.log(age);
console.log(score);


// Datatypes in javascript
// Strings, Numbers, Boolean, null, undefined, Symbol

const name = 'Bernie';
const age2 = 80;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;                   // undefined as well

console.log(typeof name);
console.log(typeof age2);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


// Concatenation

console.log('My name is ' + name +' and I am ' + age);

// Template String
// Here we use backticsk `` and dollar $

const hello = (`My name is ${name} and I am ${age}`);

console.log(hello);


const s = 'Hello World';

console.log(s.length)

console.log(s.toUpperCase());

console.log(s.toLowerCase());

console.log(s.substring(0,5).toUpperCase());

console.log(s.split(''));


const t = 'technology, computers, it, code, machine'

console.log(t.split(','));


// Arrays - variables that hold multiple values

/* multi
line
comment*/

const numbers = new Array(1,2,3,4,5);

const fruits = ['apples', 'pears', 'mango', 'oranges', 20, false];

console.log(numbers);

console.log(fruits);

fruits[3] = 'grapes';

fruits.push('mangoes');         //push method to add

fruits.unshift('strawberries');  // Add in the undefined

fruits.pop();                    // To take last element off

console.log(Array.isArray('hello'));     // check if its an array

console.log(fruits.indexOf('mango'));

console.log(fruits);


console.log(fruits);

console.log(fruits[1]);


// Object literals

const person = {
  firstName: 'John',
  lastName: 'Cena',
  age: 35,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);

console.log(person.address.city);


// Creating variables (pulling the out of person object)


const {firstName, lastName, address: {city}} = person;

console.log(firstName);

console.log(city);

person.email = 'cenajohn@gmail.com';    // Adding email to person Object

console.log(person);


// Arrays of objects

const todos = [
  {
    id:1,
    text : 'Take out thrash',
    isCompleted: true
  },
  {
    id:2,
    text : 'Meeting with boss',
    isCompleted: true
  },
  {
    id:3,
    text : 'Dentist appt',
    isCompleted: false
  }
];


console.log(todos[1].text);


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// For loop

for (let i = 0; i <= 10; i++) {
  console.log(`For loop number : ${i}`);
}


// while loops

let i = 0;
while(i<=10){
  console.log(`while loop number: ${i}`)
  i++;
}


// For on // TODO:

for (let i= 0; i < todos.length; i++) {
  console.log(todos[i].text);
}


// Alternate for loop

for(let todo of todos) {
  console.log(todo.id)
}


// Alternate: High order array method
// forEach, map, filter

todos.forEach(function(todo){
console.log(todo.text);
});


// map

const todoid = todos.map(function(todo) {
  return todo.id;
})


// filter

/* const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});

console.log(todoCompleted);  */


// Array of the text only for which isCompleted == true.

const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo){
  return todo.text;
})

console.log(todoCompleted);



// Conditional statements

const a = 4;

if (a === 10) {                        // === is when it exactly matches also in datatype
  console.log('a is 10');
} else if(a>10){
  console.log('a is greater than 10')
} else {
  console.log('a is NOT 10');
}



const b = 4;
const c = 11;

if (b > 5 || c > 10) {                      // the pipe singn || stands for OR and && stands for AND.
  console.log('b is more than 5 or c is more than 10');
}


const d = 7
const e = 12

if (d > 5 && e > 10) {                      // && stands for AND
  console.log('d is greater than 5 and e is greater than 10');
}



// Ternary operator

const f = 10;

const color = f > 10 ? 'red' : 'blue';

console.log(color);



// Switches

const g = 9;

const color2 = g > 10 ? 'red':'blue';

switch (color2) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}



// Funcitons

function addNums(num1, num2) {
  return num1 + num2;
}

console.log(addNums(5, 4));


// Alternative

const addNums2 = (num1, num2) => console.log(num1 + num2);

addNums2(5, 5);



// Object Oriented Programming


// Constructor function

function Person2(firstName2, lastName2, dob) {
this.firstName2 = firstName2;
this.lastName2 = lastName2;
this.dob = new Date(dob);
this.getBirthYear = function(){
  return this.dob.getFullYear();
}
this.getFullName = function(){
  return  `${this.firstName2} ${this.lastName2}`;
}
}

// Instantiate objects

const person1 = new Person2('Elon', 'Musk', '5-7-1980');
const person2 = new Person2('Mary', 'Melone', '3-4-1970');

console.log(person1.getBirthYear());

console.log(person1.getFullName());

console.log(person2.firstName2);
console.log(person2.dob);





// With Prototype Alternate

function Person2b(firstName2b, lastName2b, dob2) {
this.firstName2b = firstName2b;
this.lastName2b = lastName2b;
this.dob2 = new Date(dob2);
}

/* this.getBirthYear = function(){
  return this.dob.getFullYear();
} */
/*this.getFullName = function(){
  return  `${this.firstName2} ${this.lastName2}`;
}*/

Person2b.prototype.getBirthYear = function() {
  return this.dob2.getFullYear();
}

Person2b.prototype.getFullName = function() {
  return  `${this.firstName2b} ${this.lastName2b}`;
}



// Instantiate objects

const person1b = new Person2b('Eloni', 'Muski', '8-7-1980');
const person2b = new Person2b('Marya', 'Meloneya', '9-4-1970');


console.log(person2b.getFullName());
console.log(person1b);




// OOP  using class : making it look fancier but its the same as above methods for loop

class Employee {
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}


// Instantiate objects

const person1d = new Employee('Donald', 'Trump', '4-3-1970');
const person2d = new Employee('Tim', 'cook', '2-2-1972');

console.log(person2d.getFullName());
console.log(person1d);
