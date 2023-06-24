// Q.6 Find the Kth largest and Kth smallest number in an array.

function findKthLargestAndSmallest(arr, k) {
    if (k <= 0 || k > arr.length) {
      return "Invalid input";
    }
  
    const sortedArray = arr.slice().sort((a, b) => a - b);
    const kthLargest = sortedArray[arr.length - k];
    const kthSmallest = sortedArray[k - 1];
  
    return {
      kthLargest,
      kthSmallest
    };
  }
  
  // Example usage:
  const arr = [7, 2, 9, 1, 5, 3, 8, 6, 4];
  const k = 3;
  
  const result = findKthLargestAndSmallest(arr, k);
  
  console.log(k+`th Largest: ${result.kthLargest}`);
  console.log(k+`th Smallest: ${result.kthSmallest}`);
  

  // Output

// 3th Largest: 7
// 3th Smallest: 3