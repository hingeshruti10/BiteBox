const Person = {
    name : "Shruti",
    email : "shruti@gmail.com",
    city : "Nagpur",
    mobno : 123456789,
    technology : "Javascript",
    gender : "female",
    employeed : true,
    isAdmin : false,
    dob : "10-Apr-2006" 
}
console.log(Person); //printing complete object
console.log(Person.city); //first way to access the object's property by using . operator
console.log(Person["dob"]); //another way to access the property using []
