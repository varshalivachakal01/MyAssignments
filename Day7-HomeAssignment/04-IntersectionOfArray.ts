function intersection(arr1:number[], arr2:number[]) {
    let result:number[]=[]
    for (let i = 0; i < arr1.length; i++) {
       if (arr2.includes(arr1[i]) && !result.includes(arr1[i])){
        result.push(arr1[i])
       }
        
    }

return result;
}

// Case 1: Typical case with some common elements
console.log("Case 1:", intersection([1, 2, 3, 4], [3, 4, 5, 6])); 
// Expected Output: [3, 4]

// Case 2: No common elements
console.log("Case 2:", intersection([1, 2, 7], [3, 4, 5])); 
// Expected Output: []

// Case 3: All elements common
console.log("Case 3:", intersection([1, 2, 3], [1, 2, 3])); 
// Expected Output: [1, 2, 3]

// Case 4: Arrays with duplicates
console.log("Case 4:", intersection([1, 2, 2, 3, 4], [2, 2, 4, 4])); 
// Expected Output: [2, 4]

// Case 5: Arrays with duplicates
console.log("Case 4:", intersection([1, 2, 2,], [2, 2, 4, 4])); 
// Expected Output: [2]