// create a variable in javascript by using var let and const keyword

// var keyword -- redeclartion and reassignment allowed
var age =90;
console.log( "Age is "+ age);
console.log("Data type of age = "+typeof(age));
// redeclaring age
var age = 34;
console.log("Age after redeclaring is = "+age);
//re assignment
age = 67;
console.log("Age after reassignment = "+age);

//let keyword : redeclaration not allowed but ressignment allowed
let city = "Nagpur";
let rollno = 23;

console.log("City = "+city);
console.log(typeof(city));
console.log(rollno);
console.log(typeof(rollno));

// //redeclaration using let is not allowed
// let city = "Delhi";
// console.log(city);

//reassignment
city = "Pune";
console.log("After reassignment of city : "+city);

// const keyword : 
const pi = 3.14;

// //redeclare of const is not allowed
// const pi = 4.13;
// console.log(pi);

// //reassignment of const is also not allowed
// pi = 4.565;
// console.log(pi);