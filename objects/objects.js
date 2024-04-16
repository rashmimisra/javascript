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
