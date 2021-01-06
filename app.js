document.getElementById("submit-expense").addEventListener("click", addExpense);

let expenseDate;
let expenseDescription;
let expenseLocation;
let expenseAmount;

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
                        <td class=money>$ ${expenseAmount} </td>`;
  document.getElementById("tracker-body").appendChild(newExpense);
}

function resetUserInput() {
  document.getElementById("expense-date").value = "";
  document.getElementById("expense-description").value = "";
  document.getElementById("expense-location").value = "";
  document.getElementById("expense-amount").value = "";
}

// TODO

// Delete function
