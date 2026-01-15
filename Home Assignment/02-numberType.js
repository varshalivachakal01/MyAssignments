/*
function numberType(numberToCheck) 
{
let c= typeof numberToCheck 
console.log(c);  
if(c===`number`)
{    
if (numberToCheck>0)
{
console.log(numberToCheck, "is a positive number");
return "Positive Number"
} 
else if (numberToCheck<0)
{
console.log(numberToCheck, "is a negative number");
return "Negative Number"
} 
else if (numberToCheck===0)
{
console.log(numberToCheck, "is a zero");
return "Zero"
}

} 

else 
{
    console.log(numberToCheck, "is not a number");
    return "not a number"
    node
}


}

numberType(0.00)
*/

function numberType(numberToCheck) 
{
//let c= typeof numberToCheck 
//console.log(c); 

switch (Math.sign(numberToCheck)) {
    case 1:
       console.log(numberToCheck, "is positive number");
        return "Positive Number"
        break;
    case -1:
       console.log(numberToCheck, "is negative number");
        return "Negative Number"
        break;
    case 0:
       console.log(numberToCheck, "is a zero");
        return "Zero"
        break;    
    default:
       console.log(numberToCheck, "is not a number");
        return "Not a number"
        break;
}

}

numberType(0)


