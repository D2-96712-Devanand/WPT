function getPositiveNumber(label) {
    let value
    while (true) {
        let input = prompt(`Enter ${label} positive number:`);

        value = Number(input);

        if ( value >=1 && value!=null) {
            return value; 
        } else {
            alert("Please enter valid positive number");
        }
    }
}


let num1 = getPositiveNumber("first");
let num2 = getPositiveNumber("second");
let num3 = getPositiveNumber("third");

let largest = Math.max(num1, num2, num3);

alert("The largest number is: " + largest);
