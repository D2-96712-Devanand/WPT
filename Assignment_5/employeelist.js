let employeeArray = [];

function addName() {
    const nameInput = document.getElementById("empName");
    const name = nameInput.value.trim();

    if (employeeArray.length >= 6) {
        alert("You have already entered 6 names");
        nameInput.value = ""; 
        return;
    }

    if (name !== "") { 
        employeeArray.push(name);
        nameInput.value = "";
        nameInput.focus();     
    } else {
        alert("Please enter a valid name.");
    }
}

function displaySorted() {
    const listContainer = document.getElementById("sortedList");
    
    listContainer.innerHTML = "";

    employeeArray.sort();

    employeeArray.forEach(function(name) {
        let li = document.createElement("li");
        li.textContent = name;
        listContainer.appendChild(li);
    });
}
