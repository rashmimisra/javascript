// arrays

// array is a collection of heterrogeenous data
// and it is an object  ,, and is resizeable
// array make the shallow copies 
// means when tthe changes are made in copied array then the changes will be reflected in original array


// array methods 
//  const myArray=[1,2,3,4,5]
//  const newArray=["rashmi ", "mishra", "neeti ","raghav"]

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

// console.log("original array:", myArray);
// const newSlice=myArray.slice(1,3);
// console.log("slice",newSlice);
// const newsplice= myArray.splice(1,3);
// console.log("array after splice :", myArray);
// console.log("Splice:", newsplice);


// merging of array (concatenation and spread)

// const combinedArray =newArray.concat(myArray);
// console.log(combinedArray);


// const newCombined=[...myArray,...newArray];
// console.log(newCombined);



//++++++++++++++++++++++++flat is used to extract the data from array with in a array    written in the form flay(give the depth upto which you want it to be sorted )+++++++++++++++++++++++++++++++++++++++++++++++++


// const anotherArray=[1,2,3,[4,5,6],7,[8,9,10,[5,6]]];
// const realAnother= anotherArray.flat(Infinity)
// console.log(realAnother);


//++++++++++++++++++++++++= conversion of array means any data retrived to be written in the form of array  ++++++++++++++++++

console.log(Array.isArray("Rashmi"));
console.log(Array.from("rashmi"));
console.log(Array.from({name:"rashmi"})) /// gives the empty array as it requires  either key or value by which array is to be formed 
  
let score1=40;
let score2=400;
let score3=4000;
let score4=40000;
console.log(Array.of(score1,score2,score3,score4)); 
















