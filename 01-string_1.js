let strToRev="" 
let revStrg=""
function revStr(strToRev) {
  
   if (typeof strToRev==="string"){
   strToRev= strToRev.toLowerCase()
     revStrg=""
    let splitchar=strToRev.split("")
    console.log(splitchar);

    for (let i = strToRev.length-1; i>=0; i--) {

       
        revStrg=revStrg.concat(splitchar[i])
       
        
    }
     console.log("The revesed string is",revStrg);  
     return revStrg;
    }
    else {console.log("Enter the string")}
   
}

//revStr("madam")

function strToCheckPalindrome(strToRev, callback) {
    strToRev=strToRev.toLowerCase()
    if (typeof strToRev==="string"){
    callback("Level");
    if (strToRev===revStrg){
        console.log("The string",strToRev,"is palindrome");
       return true
    }else {
       console.log("The string",strToRev,"is not palindrome");
       return false
    }
    }
    
    else {console.log("Enter the string")}
}
strToCheckPalindrome("Level", revStr)
