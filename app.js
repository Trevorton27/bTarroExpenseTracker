document.body.addEventListener("click", btnActions);

let expenseDate;
let expenseDescription;
let expenseLocation;
let expenseAmount;

function btnActions(e) {
  let btnTarget = e.target.id;

  btnTarget == "submit-expense"
    ? addExpense()
    : btnTarget == "trash"
    ? removeExpense(e)
    : null;
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
                        <td><img id="trash" src="images/new_trash.svg" /></td>`;
  document.getElementById("tracker-body").appendChild(newExpense);
}

function resetUserInput() {
  let userInput = document.querySelectorAll(".btn");
  let eachBtn;
  for (eachBtn = 0; eachBtn < userInput.length - 1; eachBtn++) {
    userInput[eachBtn].value = "";
  }
}

function removeExpense(e) {
  let targetExpense = e.target.id;
  document.getElementById(targetExpense).parentNode.parentNode.remove();
}
