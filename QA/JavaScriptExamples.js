// enabless strict mode
"use strict"; 

console.log('hello world javascript v1');
window.alert("Welcome to Jurrasic park")
let carMake = "Honda";
let carModel = "S2000"
console.log("My fav car is", carMake + carModel);

let totalmoney = 4000;
let moneypaid = 2348;
let totallefttopay = totalmoney - moneypaid;
console.log("the total left to pay is =", totallefttopay);


const firstname = 'josh'; // This is a string
const lastname = 'willmott';
let age = 25; //This is a Number Literal
let futurecareer = undefined //means its not set
let selectedcolor = null //No value set
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(futurecareer);
console.log(selectedcolor);

let person ={
    name: 'josh',
age:25
};
person.name ='john';
console.log(person.name);

// Dot Notation
person.name = "Josh";
person.age = 25;

// Bracket Notation
person['name'] = 'Josh';
console.log(person.name);


//for loops // going over array
const arr = [2,4,6,8,10,12,14,16,18,20]
for (let i = 0; i < arr.length; i++) {
    console.log[arr(i)];
  }

// Enhanced For Loop of // through the keys in the index
for (let num of arr) {
  console.log(num);
  }
// Enhanced For Loop in // runs through the index
for (let num in arr) {
    console.log(num);
    }

//While loop //when a condition is met
  let puppies = 0;
  let notEnoughPups = true;
  
  while (notEnoughPups) {
    console.log("Another pup");
    puppies++;
  
    if (puppies > 238) {
      notEnoughPups = false;
    }
  }
  console.log("Oh so many puppies!");

  //Do while //run while condition met
  let x = 0;
  let canIRun = false;
  do {
    x++;
    console.log(x);
  } while (canIRun);

  //switch case
  let num = 5;
switch (num) {
  case 4:
    console.log(`Value is 4`);
    break;
  case 5:
    console.log(`Value is 5`);
    break;
  case 6:
    console.log(`Well...`);
  case 7:
  case 8:
  case 9:
  case 10:
    console.log(`Value is greater than 5`);
    break;
  default:
    console.log(`Sorry can't find the range you're looking for...`);
}
// Objects 
let person = {
  name:"josh",
  age: 25,
  
//Destructuring = Simplify the above object by extracing values from objects
const {name,age,job} =me;

//destructuring 2.0 = Simplify arrays like below

// Without destructuring
const myArr = [1,2,3,4,5];
console.log(myArr[0]); //1
console.log(myArr[1]); //2
console.log(myArr[2],myArr[3],myArr[4]); //3,4,5
// With destructuring
const myArray =  [1,2,3,4,5];
const [a,b,c,d,e] = myArray;
console.log(a); //1
console.log(b); //2
console.log(c,d,e); //3,4,5

//Nested Object Destructuring = we have extracted math and science
const student = {
  name: 'John Doe',
  age: 16,
  scores: {maths: 74,english: 63}
};
const { name, scores: {maths, science = 50} } = student;

//Nested Array Destructuring
const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];
// Use nested destructuring to assign red, green and blue
const [hex, [red, green, blue]] = color;
console.log(hex, red, green, blue);
//output: #FF00FF 255 0 255

console.log(`${name} scored ${maths} in Maths and ${science} in Science.`);
//output: John Doe scored 74 in Maths and 50 in Science.

//Spread Operator ... = allows us to focus on part of an array and assign the rest to rest. (We can also skip values for example a to c a,,c would skip B)
const myArray =  [1,2,3,4,5,6,7,8,9,];
const [a,b,...rest] = myArray;
console.log(a); //1
console.log(b); //2
console.log(rest); //3,4,5,6,7,8,9

//rest
const print = ({name, age, job, ...rest}) => {
console.log("REST: ", rest);
console.log(`name: ${name} Age: ${age}`);
}


  // can be acccessed by person.name or person.age
  // you can add data by typing person.job = softwaredev
}

// Array = index collection of values
let selecteddrink = ['tea', 'coke'];
console.log(selecteddrink[0]);

// can be accessed by typing selecteddrink [0]
// you can add data by typing selecteddrink [3] = milkshake


// JSON = working with external programs
//JSON.parse method takes a string and turns it into an object
let obj = JSON.parse('{"name":"Adrian"}');
console.log(obj.name); //returns Adrian
//JSON.stringify method turns JavaScript objects/arrays into string
let str = JSON.stringify({ name: "John" });

//Lambda = benefit shorter
const product = (a, b) => a * b; {
const print = arg => console.log(arg);
}

//Anonymous function = 
const name = function(args) {
  return;
}

//Function 
let x = Math(10, 2);
function Math (num1, num2) {
return num1-num2
}
console.log (x);

//function expression $ is string concatination shorter code by using it as you dont need so many " its one big string
const welcome = function(name,age,gender){
        return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
    }
    welcome("Josh" ,25,"Male");

//Arrow function = removes the function keyword
PowerUp = (n1,n2) => Math.pow(n1,n2);
console.log(PowerUp(2,3));

//CALLBACKS = Function within a function  function passed into another function as an argument

  // Creates an alert(pop-up box) which says Your Number is and appends the value of the variable `number`
  const sum = (number) => {
    alert(`Your number is ${number+10}`);
  }
  
  const processUserInput = (callback) =>  {
  
    // A simple user input box appears on the browser that take a value and assigns it to `name`
    let x = prompt("Please enter a number", "0");
    let number = parseInt(x); // convert x to num
  
    // Then pass the variable `number` to the callback function as parameter
    callback(number);
  }
  //Call the function `processUserInput()` and then pass `greeting` as a parameter.
  processUserInput(sum);

//Promises = takes in two callbacks
const promisesPromises = new Promise((resolve, reject) => {
  const rand = Math.random();
  if (rand > 0.5) {
  resolve("yay");
  }else {}
  reject("Mission failed");
});
const onSuccess = res => console.log("Success:", res);
const onFailure = err => console.error("Failure:", err);
promisesPromises.then(onSuccess).catch(onFailure);
//A promise can be in one of three states:
//Fulfilled - promise succeeded = .then
// Rejected - promise failed = .catch
// promisesPromises.then((res) => console.log("Success:", res)).catch(err => "Failure:", err);


// Higher order function = any function that accepts or returns another function

let grades = [
  {name: 'John', grade: 8, sex: 'M'},
  {name: 'Sarah', grade: 12, sex: 'F'},
  {name: 'Bob', grade: 16, sex: 'M'},
  {name: 'Johnny', grade: 2, sex: 'M'},
  {name: 'Cyrus', grade: 4, sex: 'M'},
  {name: 'Paula', grade: 18, sex: 'F'},
  {name: 'Jeff', grade: 5, sex: 'M'},
  {name: 'Jennifer', grade: 13, sex: 'F'},
  {name: 'Courtney', grade: 15, sex: 'F'},
  {name: 'Jane', grade: 9, sex: 'F'}
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc,curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let highestGrade = maxGrade(grades);
let lowestGrade = minGrade(grades);
let highestBoysGrade = maxGrade(getBoys(grades));
let lowestBoysGrade = minGrade(getBoys(grades));
let highestGirlsGrade = maxGrade(getGirls(grades));
let lowestGirlsGrade = minGrade(getGirls(grades));

//Streams for each
const isEven nums.forEach(num => console.log(num));

// streams filter // === means strict equality
const nums = [1,2,3,4,5,6,7,8,9]
const print = num => console.log(num);
const even = num => num % 2 === 0;
nums.filter(isEven).forEach(print);

// Streams Reduce = going through array
const sum = (accumulator, next) => {
console.log("ACC:", accumulator);
console.log("NEXT:", next);
const result = accumulator + next;
console.log("RES:", result);
return result;
}
console.log("SUM:", nums.reduce(sum));

//streams map =
const square = num => Math.pow(num, 2);
nums.map(square).forEach(print);

//DOM Manipulation

createElement(tag); //creates an element
const heading = document.createElement(h1);

queryselector(selector); // finds first element that matches
document.querySelector("body") //this returns the body tag


appendchild(element); //add things to other things
body.appendchild(heading)
heading.innerText = "Hello"

//Event Handling = write functions that trigger when events happens
//onClick
//onLoad
//onInput
//onSubmit

// would put in HTML Doc // <button onclick="alert('hello');">CLICK ME</button


//Event listener
milesInput.addEventListener("submit or click", function(milestoKm) {
});

//http
//Async Code
//Fetch
//Axios

//JSON CRUD METHODS
//create = .post
//Read = .get request
//update (x2 methods) =  .put = replace and .patch = partial update
//delete = .delete

//event.preventDefault(); disables page refreshing
//form.reset(); // resets the form
//form.name.focus(); puts the cursor in the nmae field


//Status Code = tells us if the page worked e.g. Error 404
//1xx = Info
//2xx = Good all is working
//3xx = Redirect
//4xx = asked for something that does not excist
//5xx = Internal Server Error


//axios
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js" integrity="sha512-u9akINsQsAkG9xjc1cnGF4zw5TFDwkxuc9vUp5dltDWYCSmyd0meygbvgXrlc/z7/o4a19Fb5V0OUE58J7dcyw=="
  crossorigin="anonymous" referrerpolicy="no-referrer"></script>

//bootstrap
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
