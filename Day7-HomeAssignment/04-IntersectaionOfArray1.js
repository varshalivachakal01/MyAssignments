/**
 * Function to find the intersection of two number arrays without duplicates.
 * @param arr1 - First array of numbers
 * @param arr2 - Second array of numbers
 * @returns Array containing common elements (no duplicates)
 */
function intersection1(arr1, arr2) {
    var result = [];
    // Iterate through each element in arr1
    for (var i = 0; i < arr1.length; i++) {
        var element = arr1[i];
        // Check if element exists in arr2 and is not already in result
        if (arr2.includes(element) && !result.includes(element)) {
            result.push(element);
        }
    }
    return result;
}
// ---------------- Example Calls ----------------
// Case 1: Typical case with some common elements
console.log("Case 1:", intersection1([1, 2, 3, 4], [3, 4, 5, 6]));
// Expected Output: [3, 4]
// Case 2: No common elements
console.log("Case 2:", intersection1([1, 2, 7], [3, 4, 5]));
// Expected Output: []
// Case 3: All elements common
console.log("Case 3:", intersection1([1, 2, 3], [1, 2, 3]));
// Expected Output: [1, 2, 3]
// Case 4: Arrays with duplicates
console.log("Case 4:", intersection1([1, 2, 2, 3, 4], [2, 2, 4, 4]));
// Expected Output: [2, 4]
// Case 5: Arrays with duplicates
console.log("Case 4:", intersection1([1, 2, 2,], [2, 2, 4, 4]));
// Expected Output: [2]
