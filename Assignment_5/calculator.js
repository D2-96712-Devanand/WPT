function calculate(operation) {

    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let resField = document.getElementById("result");

    if (n1 == "" || n2 == "") {
        alert("Please enter both numbers");
        return;
    }

    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);
    let result = 0;

    switch (operation) 
    {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                resField.value = "Error";
                return;
            }
            result = num1 / num2;
            break;
    }

    resField.value = result;
}
