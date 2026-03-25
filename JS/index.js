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




















