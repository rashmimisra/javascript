// if statement 
const isUserloggedin = true;

if(isUserloggedin){
    console.log("yes logged in");


}

//short hand notation

const balance=1000;

if(balance>500) console.log("test"); //implicit scope

if(balance < 500){
    console.log("less than");

} else if(balance <750){
    console.log("less than 750");

}