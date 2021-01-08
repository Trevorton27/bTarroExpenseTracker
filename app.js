let expenseDate;
let expenseDescription;
let expenseLocation;
let expenseAmount;

function initializeApp() {
  document
    .getElementById("submit-expense")
    .addEventListener("click", addExpense);
  document
    .getElementById("sample")
    .addEventListener("click", (e) => e.target.parentNode.parentNode.remove());
}

function addExpense() {
  getUserInput();
  createExpense();
  resetUserInput();
}

function getUserInput() {
  expenseDate = document.getElementById("expense-date").value;
  expenseDescription = document.getElementById("expense-description").value;
  expenseLocation = document.getElementById("expense-location").value;
  expenseAmount = document.getElementById("expense-amount").value;
}

function createExpense() {
  let newExpense = document.createElement("tr");
  newExpense.innerHTML = `<td> ${expenseDate} </td> 
                        <td> ${expenseDescription} </td> 
                        <td> ${expenseLocation} </td> 
                        <td class=money>$ ${expenseAmount} </td>
                        <td><img class="trash" src="images/new_trash.svg" /></td>`;

  newExpense.addEventListener("click", () => newExpense.remove());

  document.getElementById("tracker-body").appendChild(newExpense);
}

function resetUserInput() {
  let userInput = document.querySelectorAll(".btn");
  let eachBtn;
  for (eachBtn = 0; eachBtn < userInput.length - 1; eachBtn++) {
    userInput[eachBtn].value = "";
  }
}

initializeApp();
