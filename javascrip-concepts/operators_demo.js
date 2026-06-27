//post increment operator - unary operator
function addition(a, b) {
    return a++;
    // a=a+1 a++
    // a+1=a ++a
}
console.log("After post increment value =" + addition(7));

//Addition Function
function addNumbers(a, b) {
    return a + b;
}
console.log("Sum of two numbers =" + addNumbers(7, 3));

//Subtraction Function
function subtractNumbers(a, b) {
    return a - b;
}
console.log(" difference of two numbers =" + subtractNumbers(7, 3));

// Multiplication Function
function mulltiplyNumbers(a, b) {
    return a * b;
}
console.log("product of two numbers =" + mulltiplyNumbers(7, 3));

//Division Function
function divideNumbers(a, b) {
    return a / b;
}
console.log(" quotient of two numbers =" + divideNumbers(7, 3));

//Modulus Function
function findRemainder(a, b) {
    return a % b;
}
console.log(" remainder when a is divided by b =" + findRemainder(7, 3));

//Comparison Operators
function isEqual(a, b) {
    return a == b;
}
console.log("true if both values are equal =" + isEqual(7, 7));
console.log("both values are equal =" + isEqual(7, 3));

//Check Greater Number
function isGreater(a, b) {
    return a > b;
}
console.log("true if a is greater than b =" + isGreater(7, 3));

// Check Smaller Number
function isSmaller(a, b) {
    return a < b;
}
console.log("true if a is smaller than b =" + isSmaller(5, 10));

//Positive or Negative
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
console.log("NumberCheck =" + checkNumber(-5));

// Voting Eligibility
function canVote(age) {
    return age >= 18;
}
console.log("Can Vote =" + canVote(20));