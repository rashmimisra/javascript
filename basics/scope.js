// let a=10
// const b=20
// var c=30

// console.log(a);
// console.log(b);
// console.log(c);

// if(true){
//     a=1000;
//     console.log("inner: ",a);
// }


//+++++++++++++++ nested scope+++++++++++


function one(){
    const username ="rashmi"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    // two()
    // console.log(website); // can't access the inside variables 
  
}  
one();   // two will not be called 

// parent can't access the child function's variables


if(true){
    const username="rashmi";
    if(username ==="rashmi"){
        const website ="youtube";
        console.log(username+website);
    }
    // console.log(website); can't access causeit's outside the scope
}
// console.log(username);  can't access cause its's outside the scope



// function addOne(num){
//     return num+1;
// }
// addOne(5)
// console.log(addOne(6));

// const addTwo =function(num){
//     return num+2

// }
// addTwo(6);

///++++++++++++++arrow function++++++++++++++++



// const user={
//     usrname:"rashmi",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.usrname}, welcome to website`);
//         console.log(this); // gives the current values
    
//     }
    

// }
// //this keyword refers to the current context
// console.log(this); //refers an empty object but in the console window the global object is window thus gives window
// user.welcomeMessage()
// user.usrname="sam"; // change in the context this will change the context accordingly
// user.welcomeMessage();

// and if we run the this function inside the this function then if gives some values


// function chai(){
//     let username='rashmi';
//     console.log(this .username); // only can be used inside the object

// }
// chai();

// const  chai= function(){
//     let username='rashmi';
//     console.log(this .username); // only can be used inside the object

// }
// chai();

// const chai =()=>{
//     let username='rashmi';
//     console.log(this .username);

// }
// chai();


// const addTwo =(num1,num2) => num1+num2; // implicit return
//   console.log(addTwo(3,4));

//   const object =()=>({username:"rashmi"}); // way to return an object implictly
//   console.log(object());



  //+++++++++++++ immediately invoked function (iife)++++++++++++++

  // to  connect the database as soon ass out application strats and not to let the variables of a subclasss function be effected by global variables

// global scope se pollution hoti hai kai baar to us global scope ke pollution ko hataane ke liye hum iife function ka use karte hai

 ( function chai (){   // names iffe
    console.log("db connected ");
                
  })();
  // iife dosen't know where to stop thus we use ;

  ((name)=>{     //unnamed iffe
     console.log(`db two connected name: ${name}`)
  })('rashmi'); 



  
