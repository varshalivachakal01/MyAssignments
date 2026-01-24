function reverseStr(strtoRev){
  let RevStr=""
for (let i = strtoRev.length-1; i >=0; i--) {
    let d=strtoRev.charAt(i);
    RevStr=RevStr.concat(d)
    
    
}
 console.log("Reversed String is",RevStr);

function checkPalindrome(reverseStr){

if (strtoRev===RevStr){

console.log("The string to reverse",strtoRev, "is Palindrome");
return true
}else  {
console.log("The string to reverse",strtoRev, "is not Palindrome");
return false
}

}

checkPalindrome(reverseStr)


}
reverseStr("level")

