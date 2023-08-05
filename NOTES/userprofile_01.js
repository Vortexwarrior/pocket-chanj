function addfieldIncome(plusElement) {

    let displayButton = document.querySelector("form button");

    // Stopping the function if the input field has no value.
    if (plusElement.previousElementSibling.value.trim() === "") {
        return false;
    }

    // Creating the div container.
    let div = document.createElement("div");
    div.setAttribute("class", "field");

    // Creating the LABEL INCOME NAME  element 
    let labelIncome = document.createElement("label");
    labelIncome.innerHTML = "Income Name: ";
    labelIncome.setAttribute("for", "source-name");

    // Creating the INPUT INCOME NAME  element.
    let incomeName = document.createElement("input");
    incomeName.setAttribute("type", "text");
    incomeName.setAttribute("name", "source-name");

    //Create the LABEL INCOME AMOUNT element
    let labelAmount = document.createElement("label");
    labelAmount.innerHTML = "Income Amount: ";
    labelAmount.setAttribute("for", "source-amount");

    // Creating the INPUT INCOME AMOUNT element
    let field = document.createElement("input");
    field.setAttribute("type","text");
    field.setAttribute("name","source-name");

    // TODO --------- Created the DIV container ----------
    let div2 = document.createElement("div");
    div.setAttribute("class", "income-input");

    // Create the LABEL EXPENSE NAME element 
    let labelExpense = document.createElement("label");
    labelExpense.innerHTML = "Expense Name: ";
    labelExpense.setAttribute("for", "source-name");

    // Creating the INPUT EXPENSE AMOUNT element
    let expenseName = document.createElement("input");
    expenseName.setAttribute("type", "text");
    expenseName.setAttribute("name", "source-amount");

    // Create the LABEL EXPENSE NAME element
    let expenseAmount = document.createElement("label");
    expenseAmount.innerHTML = "Expense Amount: ";
    expenseAmount.setAttribute("for", "source-amount");

    // Create the INPUT EXPENSE AMOUNT element
    let amount = document.createElement("input");
    amount.setAttribute("type", "text");
    amount.setAttribute("name", "source-amount");

    // Creating the PLUS SPAN element.
    let plus = document.createElement("span");
    plus.setAttribute("onclick", "addField(this)");
    let plusText = document.createTextNode("+");
    plus.appendChild(plusText);

    // Creating the MINUS SPAN element.
    let minus = document.createElement("span");
    minus.setAttribute("onclick", "removeField(this)");
    let minusText = document.createTextNode("-");
    minus.appendChild(minusText);

    // Adding the elements to the DOM.
    form.insertBefore(div, displayButton);
    div.appendChild(labelIncome);
    div.appendChild(incomeName);
    div.appendChild(labelAmount);
    div.appendChild(field);
    div.appendChild(labelExpense);
    div.appendChild(expenseName);
    div.appendChild(labelExpense);
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

function markAsDone(element) {
    element.classList.add("mark");
    element.innerHTML = "&check;";
}