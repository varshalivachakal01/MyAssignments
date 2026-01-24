
//Task 1: Function Declaration  
function userProfile(name) {
    console.log(`Hello, ${name}!`);
    
}
userProfile("Varshali")

//Task 1: Function Declaration  
const userName = process.argv.slice(2,3);
function userProfile1(userName) {
    console.log(`Hello, ${userName}!`);
    
}
userProfile1(userName)

//Task 2: Arrow Function 
let double=(numToDob)=> {
    let typeNumToDob = typeof numToDob
    console.log(typeNumToDob);

    if(typeNumToDob==="number"){
    
    let dobVal= `${numToDob}`*2
console.log("Double of",`${numToDob}`, "is" ,dobVal);
    return dobVal
    } else {
        console.log(`${numToDob}`, "is not a valid number to double" );
        
    }
}
double(5)


//Task 3: Anonymous Function  

setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
    
}, 2000);


//Task 4: Callback Function 
function getUserData(callback) {
    
setTimeout(() => {
    
   
    callback();
}, 3000);

}
getUserData(messageToLog)

function messageToLog() {
    console.log("Call Back Function");
}