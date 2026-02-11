const nums = [2,4,5,2,1,2];
const k = 2


function CountOccourance(arr, cnt){
let count=0
for (let i = 0; i < nums.length; i++) {    
    if (k === nums[i])    
        {
      count=count+1                    
    }   
}
//console.log("Number of occurrences of", k, "is",count);
return count
}

console.log(`Number of occurrences of ${k}:`, CountOccourance(nums, k));
//console.log(CountOccourance(nums, k));
