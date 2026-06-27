let brands =["HP" ,"Dell","Lenovo","Apple","Asus","Acer"];

// to print the collection of brands
console.log(brands);

// to print Apple on console
console.log(brands[3]);

// /using foreach
console.log("printing brands using forEach:");
brands.forEach(b =>console.log(b));


// insert 

brands.push("Microsoft","Samsung");
console.log("new brand list:" +brands);

// to print total no of brand
console.log("total brands = "+brands.length)

// pop
brands.pop();
console.log("after pop :" +brands);

// shift
brands.shift();
console.log("after shift:" +brands);
