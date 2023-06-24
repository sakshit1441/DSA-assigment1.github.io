// Q.8 Reverse a string using a stack data structure.

function reverseString(str) {
    const stack = [];
    let reversedString = "";
  
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
  
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
  const str = "Hello, World!";
  const reversed = reverseString(str);
  
  console.log("Reversed String:");
  console.log(reversed);




// Output :- 

// Reversed String:
// !dlroW ,olleH
