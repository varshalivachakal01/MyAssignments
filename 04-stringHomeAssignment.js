/*
//Example 1: 
let str="Hello World"
let splitStr=str.split(" ")
console.log(splitStr);
let splitStrLen=splitStr.length
console.log(splitStrLen);
let lastWrdLen=splitStr[splitStrLen-1].length
console.log(lastWrdLen);

//Example 2: 
let strg = "   fly me   to   the moon  " 
let strgTrim=strg.trim()
console.log(strgTrim);
let splitStrg=strgTrim.split(" ")
console.log(splitStrg);
let splitStrgLen=splitStrg.length
console.log(splitStrgLen);
let lastWrdLeng=splitStrg[splitStrgLen-1].length
console.log(lastWrdLeng);

*/
//Example 3:  

function  isAnagram(strg1, strg2) {
 let strgrl1=strg1.replaceAll(" ", "").toLowerCase()
  let strgrl2=strg2.replaceAll(" ", "").toLowerCase()
     console.log("String 1 after removing space and ignoring case is",strgrl1);
     console.log("String 2 after removing space and ignoring case is",strgrl2);
  let strg1Sorted=strgrl1.split("").sort().join("");
  let  strg2Sorted=strgrl2.split("").sort().join("");
     console.log("Sorted string 1 is",strg1Sorted);
     console.log("Sorted string 2 is",strg2Sorted);
        if (strg1Sorted===strg2Sorted){
console.log(strg1,"and",strg2,"are anagrams");
return true
        }else{
            console.log(strg1,"and",strg2,"are not anagrams");
            return false
        }


    }
 isAnagram('Dormitory', 'Dirty room')