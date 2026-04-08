const readline = require('readline');

// Create the interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculate = () => {
  console.log("\n--- Node.js Simple Calculator ---");
  
  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      rl.question('Enter operation (+, -, *, /): ', (op) => {
        
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let result;

        if (isNaN(n1) || isNaN(n2)) {
          console.log("Error: Please enter valid numbers!");
        } else {
          switch (op) {
            case '+': result = n1 + n2; break;
            case '-': result = n1 - n2; break;
            case '*': result = n1 * n2; break;
            case '/': 
              result = n2 !== 0 ? n1 / n2 : "Error: Cannot divide by zero";
              break;
            default:
              result = "Invalid Operation!";
          }
          console.log(`\nResult: ${n1} ${op} ${n2} = ${result}`);
        }

        // Ask if the user wants to go again or exit
        rl.question('\nCalculate again? (y/n): ', (choice) => {
          if (choice.toLowerCase() === 'y') {
            calculate();
          } else {
            console.log("Goodbye!");
            rl.close();
          }
        });
      });
    });
  });
};

calculate();
