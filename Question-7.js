// Q.7 Move all the negative elements to one side of the array

function moveNegativeElements(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      if (arr[left] < 0 && arr[right] < 0) {
        left++;
      } else if (arr[left] >= 0 && arr[right] < 0) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      } else if (arr[left] >= 0 && arr[right] >= 0) {
        right--;
      } else {
        left++;
        right--;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const arr = [2, -5, -8, 9, -1, 3, -4, -2];
  const result = moveNegativeElements(arr);
  
  console.log("Array with negative elements moved to one side:");
  console.log(result);
  