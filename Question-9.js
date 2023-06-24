// Q.9 Evaluate a postfix expression using stack.

function evaluatePostfixExpression(expression) {
    const stack = [];
  
    for (let i = 0; i < expression.length; i++) {
      const token = expression[i];
  
      if (!isNaN(token)) {
        stack.push(parseFloat(token));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        switch (token) {
          case "+":
            stack.push(operand1 + operand2);
            break;
          case "-":
            stack.push(operand1 - operand2);
            break;
          case "*":
            stack.push(operand1 * operand2);
            break;
          case "/":
            stack.push(operand1 / operand2);
            break;
        }
      }
    }
  
    return stack.pop();
  }
  
  const expression = "783*+9-";
  const result = evaluatePostfixExpression(expression);
  
  console.log("Result of postfix expression evaluation:");
  console.log(result);



// Output :-

// Result of postfix expression evaluation:
// 5
  