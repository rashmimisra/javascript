// arrays

// array is a collection of heterogenous data
// and it is an object  , and is resizeable
// array make the shallow copies 
// means when the changes are made in copied array then the changes will be reflected in original array


// array methods 
 const myArray=[1,2,3,4,5]

// myArray.push(6)
// myArray.pop() // removes the last element of array
// console.log(myArray);
// console.log(typeof(myArray));

// myArray.unshift(9) // inserts the element at the starting of the array
// myArray.shift() // used to remove the elemeent from the starting 
// console.log(myArray);


// console.log(myArray.includes(3)); // checks weather the element exists or not and gives the result in boolean type

// const newArray= myArray.join()
// console.log(myArray);
// console.log(typeof(newArray));
// console.log(newArray);


//+++++++++++++++++++++++++++++++++++++++++ slice and splice++++++++++++++++++

console.log("original array:", myArray);
const newSlice=myArray.slice(1,3);
console.log("slice",newSlice);
const newsplice= myArray.splice(1,3);
console.log("array after splice :", myArray);
console.log("Splice:", newsplice);











