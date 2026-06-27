let fruits =["apple" ,"banana","kiwi","orange","guava","strawberry"];

// to print the collection of fruits
console.log(fruits);

// to print orange on console
console.log(fruits[3]);

// using foreach
console.log("printing fruits using forEach:");
fruits.forEach(f =>console.log(f));

// insert (addmore fruits in an existing array)
fruits.push("watermelon","cherry","papaya","pinapple");
console.log("new fruits list:" +fruits);

// to print total no of fruits
console.log("total fruits = "+fruits.length)

// list out the fruits whose name start with a C
let c_fruits = fruits.find(f => f.startsWith("c"));
console.log(c_fruits);

// list out the fruits which contains 'pp'
let pp_fruits = fruits.filter(f =>f.includes("pp"));
console.log("fruits includes 'pp':" +pp_fruits);

// list out the fruits which includes "erry"
let erry_fruits = fruits.filter(f => f.includes("erry"));
console.log("fruits includes erry:" +erry_fruits);

// list out fruits which ends with 'a'
let a_fruits = fruits.filter(f =>f.endsWith('a'));
console.log("fruits ends with a: "+a_fruits);

// print only first 3 fruits
let first3fruits = fruits.slice(0,3);
console.log(first3fruits);