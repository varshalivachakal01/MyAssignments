
//Example 1&2: 


function lastwrdlen(str) {
  let strTrim=str.trim()
console.log(strTrim);
let splitStr=str.split(" ")
console.log(splitStr);
let splitStrLen=splitStr.length
console.log(splitStrLen);

for (let i = splitStr.length - 1; i > 0; i--) {
        if (splitStr[i] !== "") {
            console.log(splitStr[i])
console.log(splitStr[i].length)
            return splitStr[i].length;
        }
    }  
}

lastwrdlen("   fly me   to   the moon  ")



//Example 3:  

function isAnagram(strg1, strg2) {
 

let strgrl1=strg1.replaceAll(" ", "").toLowerCase()
let strgrl2=strg2.replaceAll(" ", "").toLowerCase()
console.log("String 1 after removing space and ignoring case is",strgrl1);
console.log("String 2 after removing space and ignoring case is",strgrl2);
let arr1 = strgrl1.split('');
let arr2 = strgrl2.split('');
console.log("Splited string 1 is",arr1);
console.log("Splited string 2 is",arr2);
    for (let i = 0; i < arr1.length - 1; i++) {
        for (let j = 0; j < arr1.length - i - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];

                console.log("arr1[j] is",arr1[j] );
                console.log("arr1[j + 1] is",arr1[j + 1]);
                
                
            }
            if (arr2[j] > arr2[j + 1]) {
                [arr2[j], arr2[j + 1]] = [arr2[j + 1], arr2[j]];

                 console.log("arr2[j]",arr2[j] );
                console.log("arr2[j + 1]",arr2[j + 1]);
            }
        }
    }


    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("arr1[i] is", arr1[i]);
             console.log("arr2[i] is", arr2[i]);
             console.log(strg1,"and",strg2,"are not Anagram");
             
            return false;
        
        }
    }

  console.log(strg1,"and",strg2,"are Anagram");
    return true;
}

isAnagram('listen', 'silent') 