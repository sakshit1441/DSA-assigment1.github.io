// Q.4 In an array, Count Pairs with given sum.

function countPairsWithSum(arr, targetSum) {
    let count = 0;
    let complementMap = new Map();
  
    for (let i = 0; i < arr.length; i++) {
      let complement = targetSum - arr[i];
      if (complementMap.has(complement)) {
        count += complementMap.get(complement);
      }
  
      if (complementMap.has(arr[i])) {
        complementMap.set(arr[i], complementMap.get(arr[i]) + 1);
      } else {
        complementMap.set(arr[i], 1);
      }
    }
  
    return count;
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5, 6];
  const targetSum = 7;
  
  const pairCount = countPairsWithSum(arr, targetSum);
  
  console.log(`Number of pairs with sum ${targetSum}: ${pairCount}`);
  



  
  // Output :- 

  // Number of pairs with sum 7: 3
