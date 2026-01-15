/*
function isOddOrEven( numberToEnter) {
    
    if (Number.isInteger(numberToEnter)===true){
  let c= numberToEnter/2

  
    console.log(c);
    console.log(typeof c);

    let d= Number.isInteger(c);
 console.log(d);
    console.log(typeof d);
if (d=== true){
console.log("the number", numberToEnter, "is even");
return "even"
} else {console.log("the number", numberToEnter, "is odd");
 return "odd"
}
    } else {

        return console.log("Enter the integer value", numberToEnter, "is not a integer");
        
    }
}
isOddOrEven(8)


*/
function isOddOrEven( numberToEnter) {
    
    if (Number.isInteger(numberToEnter)===true){
  let c= numberToEnter%2

  
    console.log(c);
    console.log(typeof c);

    //let d= Number.isInteger(c);
 //console.log(d);
   // console.log(typeof d);
if (c=== 0){
console.log("the number", numberToEnter, "is even");
return "even"
} else if (c===1) {console.log("the number", numberToEnter, "is odd");
 return "odd"
}
    } else {

        return console.log("Enter the integer value", numberToEnter, "is not a integer");
        
    }
}
isOddOrEven(99)
