// Addition
let add=(a,b) => a+b;
console.log(add(50,43));

// subtraction
let sub=(a,b) => a-b;
console.log(sub(50,35));

// multiplication
let multi=(a,b) => a*b;
console.log(multi(20,40));

// division
let div=(a,b) => a/b;
console.log(div(10,50));

// modulus
let mod=(a,b) => a%b;
console.log(mod(10,3));

// check equality
let isEqual=(a,b) => a==b;
console.log(isEqual(40,45));
console.log(isEqual(55,55));

// grater number
let isGreater = (a, b) => a > b;
console.log(isGreater(60, 50)); 

//smaller number 
let isSmaller = (a, b) => a < b;
console.log(isSmaller(8, 5));   
console.log(isSmaller(67, 100)); 

// Voting Eligibility
let canVote = (age) => age >= 18;
console.log(canVote(19)); 
console.log(canVote(14)); 
console.log(canVote(18));