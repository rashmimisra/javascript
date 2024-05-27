// const coding=["js","ruby","java","python"];

// // const values=coding.forEach((item)=>{   // dosen't return values
// // console.log(item);


// });

const mynums=[1,2,3,4,5,6,7,8,9,10];

// const newnums=mynums.filter((num)=> num>4)
// console.log(newnums);
//  const mynums=[1,2,3,4,5,6,7,8,9,10];

//  const newnums=mynums.map((num)=> num+10);
//  console.log(newnums);

//  const newnums = mynums  //  chainning method 
//  .map((num)=> num*10)
//  .map((num)=> num+1 )
//  console.log(newnums);




 // reduce function 


// const total=mynums.reduce(function(acc,currval){
//     return acc+currval;
// },0)  // 0 is the strating point of the accumulator

// console.log(total);

const total=mynums.reduce((acc,currval)=>{
    console.log(`acc:${acc} and current value: ${currval}`);
    return acc+currval;
},0)  // 0 is the strating value of the accumulator

console.log(total);