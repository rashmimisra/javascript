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

// console.log(Array.isArray("Rashmi"));
// console.log(Array.from("rashmi"));
// console.log(Array.from({name:"rashmi"})) /// gives the empty array as it requires  either key or value by which array is to be formed 
  
// let score1=40;
// let score2=400;
// let score3=4000;
// let score4=40000;
// console.log(Array.of(score1,score2,score3,score4)); 





//+++++++++++++++++++++++++++++++++++++OBJECTS +++++++++++++++++++++++++++++++++++++++++++++++++++++

const symbol=Symbol("key1")
const userJS={
     name: "Rashmi",
     age:21,
     [symbol]:"key1",
     location:"kiet",
     email:"rashmi@gmail.com",
     isLoggedin: false,
     lastLoginDays:["mondays", "saturdays"]
}

console.log(userJS["name"]) // way to access the object
console.log(userJS["symbol"])


//to change value of an object
userJS.email="rashmi@yahoo.com"
//to freeze values 
// Object.freeze(userJS)    // the changes will not be made in the key given as it is freezed
userJS.email="rashmi@microsoft.com"
console.log(userJS);


///+++++++++++++++++++++functions +++++++++++++++++++++++++++++

userJS.greetings = function (){

    console.log(`hello world! ,${this.age}`)

}
console.log(userJS.greetings());


//+++++++++++++++++++++   object singleton or object constructor+++++++++


const tinderUser ={}
 tinderUser.id= "123abc"
 tinderUser.name="rashmi"
 tinderUser.isLoggedin= false

 console.log(tinderUser);


 const regularUser={
      email:"rashmi@gmail.com",
      fullname:{
         userFullName:{
            firstName:"rashmi",
            lastName:"mishra"
         }
      }
     
 }

 console.log(regularUser.fullname.userFullName.firstName)

 ///+++++++++++combining objects++++++++++++++++++

 const obj1={1:"a",2:"b"}
 const obj2={3:"c",4:"d"}

//  const obj3=Object.assign({},obj1,obj2); /// target={}
const obj3={...obj1,...obj2} // spread operator 
 console.log(obj3);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedin')) /// to serach weather that value exists or not

////+++++++++++++++++++++++  destructring of objects ++++++++++++++

const course ={
      courseName:"DSA",
      price:"999",
      courseInstructor:"programmingpathshala"
}


const {courseInstructor:inst}=course

console.log(inst);

//+++++++++++++++++++++++++++++++++=APi's+++++++++++++++++++++=





