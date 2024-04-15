// Dates

let myDate = new Date();
// console.log(myDate.toString( ));
// console.log(myDate.toLocaleString()) ;
// console.log(myDate.toJSON());
// console.log(typeof myDate);
let myCreatedDate = new Date(2024, 1,23)
console.log(myCreatedDate.toDateString());


//+++++++++++++++time stamps+++++++++++++++++++++++++++++++++++//


// time stamps are  basically used for polls and votes  and can be furthur used 

// let myTimeStamp =Date.now()  // gives the time in milliseconds

// // console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime()); /// basically used to get time in milliseconds and by the the dates can be compared easily


// // to get the date in seconds

// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate.getMonth()+1)


newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(newDate)


