
let count;

while (true) {
    let input = prompt("Enter the number of times to print the message:");

    count = Number(input);

    if (count >= 1 && count!=0) {
        break; 
    } else {
        alert("Please enter a valid positive integer");
    }
}

let message = prompt("Enter the message:");


console.log("Printing message " + count + " times:");

for (let i = 1; i <= count; i++) {
    console.log(i + ". " + message);
}
