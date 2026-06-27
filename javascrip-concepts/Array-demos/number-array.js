let num_arr =[10,20,30,40,50,60,70,80,90,10];

// print the arrayb in reverse order
console.log("array in reverse order:" +num_arr.reverse());

// print the array in sorted manner
console.log("array in sorted order:" +num_arr.sort());

// to insert new element in an array 
num_arr.push(77);
console.log("after insert 77 in an array the new array is:" +num_arr);

// pop element(remove the element from last)
num_arr.pop();
num_arr.pop();
console.log("remove the top most element and new array is : " +num_arr)

// shift() used to remove the first element
num_arr.shift();
console.log("after shift the new array is: "+num_arr)


let a=[1,2,3];
let b=[4,5,6];
// to combine two array
console.log("combine a + b array:" +a.concat(b));

// matrix
let matrix =
[
    [1,1,1],
    [2,2,2],
    [3,3,3]
]
console.log("matrix printing using for loop:")
for(let i=0; i<matrix.length;i++){
    for(let j=0;j<matrix.length;j++){
        console.log(matrix[i][j]);
    }
}