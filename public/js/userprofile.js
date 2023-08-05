function addField(plusElement) {

    let displayButton = document.querySelector("incomes");


    // Stopping the function if the input field has no value.
    if (plusElement.previousElementSibling.value.trim() === "") {
        return false;
    }

    // creating the div container.
    let div = document.createElement("div");
    div.setAttribute("class", "form-group");

    //create the label income name element
    let labelIncome = document.createElement("label");
    labelIncome.innerHTML = "Income Name:";
    labelIncome.setAttribute("for", "source-name");

    // Creating the input income name element.
    let incomeName = document.createElement("input");
    incomeName.setAttribute("type", "text");
    incomeName.setAttribute("name", "source-name");

    //create the label income amount element
    let labelAmount = document.createElement("label");
    labelAmount.innerHTML = "Income Amount:";
    labelAmount.setAttribute("for", "source-amount");

    // Creating the input income amount element.
    let field = document.createElement("input");
    field.setAttribute("type", "text");
    field.setAttribute("name", "source-name");


    // Creating the plus span element.
    let plus = document.createElement("span");
    plus.setAttribute("onclick", "addField(this)");
    let plusText = document.createTextNode("+");
    plus.appendChild(plusText);

    // Creating the minus span element.
    let minus = document.createElement("span");
    minus.setAttribute("onclick", "removeField(this)");
    let minusText = document.createTextNode("-");
    minus.appendChild(minusText);

    // Adding the elements to the DOM.
    form.insertBefore(div, displayButton);
    div.appendChild(labelIncome);
    div.appendChild(incomeName);
    div.appendChild(labelAmount)
    div.appendChild(field);
    div.appendChild(plus);
    div.appendChild(minus);

    // Un hiding the minus sign.
    plusElement.nextElementSibling.style.display = "block"; // the minus sign
    // Hiding the plus sign.
    plusElement.style.display = "none"; // the plus sign
}

function removeField(minusElement) {
    minusElement.parentElement.remove();
}

let form = document.forms[0];
form.addEventListener("submit", fetchTextNotes);
function fetchTextNotes(event) {
    // prevent the form to communicate with the server.
    event.preventDefault();

    // Fetch the values from the input fields.
    let data = new FormData(form);

    // Storing the values inside an array so we can handle them.
    // we don't want empty values.
    let notes = [];
    data.forEach(function (value) {
        if (value !== "") {
            notes.push(value);
        }
    });

    // Output the values on the screen.
    let out = "";
    for (let note of notes) {
        out += `
            <p>${note} <span onclick="markAsDone(this)">Mark as done</span></p>
        `;
    }
    document.querySelector(".notes").innerHTML = out;

    // Delete all input elements except the last one.
    let inputFields = document.querySelectorAll(".field");
    inputFields.forEach(function (element, index) {
        if (index == inputFields.length - 1) {
            element.children[0].value = "";
        } else {
            element.remove();
        }
    });
}

// function markAsDone(element) {
//     element.classList.add("mark");
//     element.innerHTML = "&check;";
// }
function addFieldE(plusElement) {

    let displayExpenses = document.querySelector("expenses");
    // Stopping the function if the input field has no value.
    if (plusElement.previousElementSibling.value.trim() === "") {
        return false;
    }

    // creating the div container.
    let div2 = document.createElement("div");
    div2.setAttribute("class", "form-group");

    //create the label expense name element
    let labelExpense = document.createElement("label");
    labelExpense.innerHTML = "Expense Name:";
    labelExpense.setAttribute("for", "source-name");

    // Creating the input expense amount element.
    let expenseName = document.createElement("input");
    expenseName.setAttribute("type", "text");
    expenseName.setAttribute("name", "source-amount");

    //create the label expense name element
    let expenseAmount = document.createElement("label");
    expenseAmount.innerHTML = "Expense Amount:";
    expenseAmount.setAttribute("for", "source-amount");

    // Creating the input expense amount element.
    let amount = document.createElement("input");
    amount.setAttribute("type", "text");
    amount.setAttribute("name", "source-amount");

    // Creating the plus span element.
    let plus = document.createElement("span");
    plus.setAttribute("onclick", "addFieldE(this)");
    let plusText = document.createTextNode("+");
    plus.appendChild(plusText);

    // Creating the minus span element.
    let minus = document.createElement("span");
    minus.setAttribute("onclick", "removeFieldE(this)");
    let minusText = document.createTextNode("-");
    minus.appendChild(minusText);


    form1.insertBefore(div2, displayExpenses)
    div2.appendChild(labelExpense);
    div2.appendChild(expenseName);
    div2.appendChild(expenseAmount)
    div2.appendChild(amount);
    div2.appendChild(plus);
    div2.appendChild(minus);

}

let form1 = document.forms[1];
form1.addEventListener("submit", fetchTextNotes);
function fetchTextNotes(event) {
    // prevent the form to communicate with the server.
    event.preventDefault();

    // Fetch the values from the input fields.
    let data = new FormData(form);

    // Storing the values inside an array so we can handle them.
    // we don't want empty values.
    let notes = [];
    data.forEach(function (value) {
        if (value !== "") {
            notes.push(value);
        }
    });

    // Output the values on the screen.
    let out = "";
    for (let note of notes) {
        out += `
            <p>${note} <span onclick="markAsDone(this)">Mark as done</span></p>
        `;
    }
    document.querySelector(".notes").innerHTML = out;

    // Delete all input elements except the last one.
    let inputFields = document.querySelectorAll(".field");
    inputFields.forEach(function (element, index) {
        if (index == inputFields.length - 1) {
            element.children[0].value = "";
        } else {
            element.remove();
        }
    });
}