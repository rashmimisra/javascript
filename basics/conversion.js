let score = 33;
console.log(typeof score ) ;
let score1 = "33";
console.log (typeof (score1));
let score2 = "33abc";
console.log (typeof (score2));
console.log (score2);
let score3 = " 33abc";
let valueInnumber = Number( score3);
console.log( typeof ( valueInnumber));
console.log(valueInnumber); // the conversion of 33abc is done but 33abc can't be considered as a number thus nan which is not a  number 
// similarly the variable can be converted into string using String and in bollean using Boolean()
let r = "rashmi " ;
let bool = Boolean( r);
console.log ( bool)
// if r= "" || undefined || null ;  => bollean value false 

/********************************************************operations ****************************************************/
console.log ( +true) // output 1 but true+ is an error 
console.log("1"+ 2) // treateed as string and output will be 12
console.log( 1+ "2 ") // will also be treated as string and the output will be 12
console.log("1" + 2 + 2)// will also be trated as string and the output will be 122 since 1 is string thus after that everything will be treated as string 
console.log( 1+ 2 + "2") // here the output will be 32 as the string  is written at last thus the previous values will be treated as string and the normal operations will be performed.

/********************************conversions **********************************/
console.log(null > 0);
console.log(null == 0)
console.log (null >= 0)// here the output is true because null is converted into 0 then compared while in the above ones the the null is not converted best thing is to avoid these type of conversions
