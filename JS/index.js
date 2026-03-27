console.log("My name is Hudah");
// Variables
// Declaring variables uses the var, let or const keywords
// var is the function scoped and re-declared and updated
var name="Hudah";
console.log(name);
name="Nankya Hudah"
console.log(name)
let age = 23
console.log(age);
age = 18
console.log("my age has changed because am just a girl", age);

const country= "Uganda"
console.log(country)

// DATA TYPES
// 1.string
let greeting = "Hello , how are you"
console.log(greeting)
console.log(typeof greeting);

// 2.Number
let x= 10
console.log(typeof x)
// Incase i put a number in quotes, then it becomes a string 
let y="10"
console.log(typeof y);
let mark = 85
if (mark>=70){
    console.log("U have passed")
}else{
    console.log("U have failed the exam")
}
// comparison operators
// 1. Equal to(==)
// 2.Not equal to (!=)
// 3. strictly equal to (===), just compares the variable and the data type
// 4. strictly not equal to(!===)
// 5.Greater than(>)
// 6.less than(<)
// 7.Greater than or equal to (>=)
// 8.Less than or equal to (<=)

// Arrays (lists of anything), it starts counting from 0, they r represented by square brackets and items are independent.
["Harrier", "Benz","Toyota"]
[1,2,3,4]
// ["Hudah",23, "Uganda",true , null, (name="mine")]

let cars = ["Harrier", "Benz","Toyota"]
console.log(cars)
// to call or pull out an object in an array, use the example below
console.log(cars[1])
let mixedArray = ["Hudah", 23,"Uganda", true, null, undefined, { name:"mine"}];
console.log(mixedArray);
console.log(mixedArray[6])
// objects , it it represented by curly brackets and they describe the same thing.
// {} empty object

let person = {
    name: "John",
    age: 30,
    country: "Uganda",
    isStudent: false,
    hobbies: ["praying", "eating"],
    Address :{
        street :123,
        city: "Kampala",
        Country : "America",
        State : "Cape town",

    }
}
console.log(person);
console.log(person["name"]) // acess the name property
console.log(person. hobbies)
console.log( person.hobbies[1]) // acessing the second hobby

// grading  using if condition
// let score  = 75

// if (score >= 80) {
//     console.log (" Grade: A - Excellent")
// }else if ( score >= 75) {
//     console.log ( "Grade: B+ - VeryGood")
// } else if (score >= 70 ) console.log (Grade:c)

// assignment 1. Grading mathh sores.( An array called scores containing objects with each object having a name and score properties)
// Loops help us to look yhrough an array and return a specific item
// let scores= [
   // { name: " martin", score: 70} ; TO RECTIFY
// { name: "Annet", score: 85 };
// { name: "Justine", score: 63 };
// { name: " Samuel", score: 75 };

// scores.forEach(student => {
//     let grade;
// if (student.scores >=90) {
//     grade = "A"
// } else if ( student.scores >= 80) { grade = " B"} else if
// (student.scores >= 70) { grade = "C"}
// }
// console.log( student.name + " " + student.scores + " " + grade)


//concatenation
let myname = "Hudah";
let subject ="Javascript";
let marks = 89;
let grade = "D1";
console.log(myname)

//using + operator
let result1= myname + " " + subject + " " + marks + " " + grade 
console.log(result1
)
//FUNCTIONS
//Functions are reusable blocks of code that perform specific task, they can take parametres and return values.
// Function declaration , we use the " functioin" key word
//Function, function name ( ) { code to be executed
// or
function functioinName (parameter) {
    //code to be executed
    return parameter;// returning the parameter
}
// or
function funcWithParameters( parameter1, parameter2, parameter3) { // code to be executed
    return parameter1 + parameter2 + parameter3; // returning the sum of parameters
}
// working example of a function
function returnSomeValue() {
    let value = " This is my first function in JavaScript"
    console.log(value)
}
returnSomeValue(); // this is how you call  a function to execute the code inside it

function retunParameter


(parameter){
    return parameter
}
console.log( retunParameter(" this is my 2nd function"))
const result = retunParameter( " hello this is my 2nd function");
console.log(result)

function addNumbers( x, y) { 
    return x+y;
}
const sum = addNumbers(4, 5)
console.log(sum)












