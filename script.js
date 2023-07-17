// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the expense form, expense list, and budget section elements
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");
  const budgetSection = document.getElementById("budgets");

  // Initialize an empty array to store expenses
  let expenses = [];

  // Add event listener to the expense form
  expenseForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get the form inputs
    const categoryInput = document.getElementById("category");
    const amountInput = document.getElementById("amount");
    const descriptionInput = document.getElementById("description");

    // Create a new expense object
    const newExpense = {
      category: categoryInput.value,
      amount: amountInput.value,
      description: descriptionInput.value
    };

    // Add the new expense to the expenses array
    expenses.push(newExpense);

    // Reset the form inputs
    categoryInput.value = "";
    amountInput.value = "";
    descriptionInput.value = "";

    // Render the updated expense list
    renderExpenseList();
  });

  // Function to render the expense list
  function renderExpenseList() {
    // Clear the existing expense list
    expenseList.innerHTML = "";

    // Iterate through the expenses array and create expense items
    expenses.forEach(function(expense, index) {
      // Create a new expense item element
      const newExpenseItem = document.createElement("li");
      newExpenseItem.innerHTML = `
        <div class="expense-item">
          <span class="category">${expense.category}</span>
          <span class="amount">$${expense.amount}</span>
          <span class="description">${expense.description}</span>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;

      // Add event listeners to the edit and delete buttons
      const editBtn = newExpenseItem.querySelector(".edit-btn");
      const deleteBtn = newExpenseItem.querySelector(".delete-btn");
      editBtn.addEventListener("click", function() {
        handleEditExpense(index);
      });
      deleteBtn.addEventListener("click", function() {
        handleDeleteExpense(index);
      });

      // Append the new expense item to the expense list
      expenseList.appendChild(newExpenseItem);
    });
  }

  // Function to handle editing an expense
  function handleEditExpense(index) {
    const expenseToEdit = expenses[index];
    // Perform the desired action for editing an expense
    console.log("Edit button clicked");
    console.log("Expense to edit:", expenseToEdit);
    // Add your code for editing the expense here
    // For example, you can show a modal or form to edit the expense details
    const updatedCategory = prompt("Enter the updated category:", expenseToEdit.category);
    const updatedAmount = prompt("Enter the updated amount:", expenseToEdit.amount);
    const updatedDescription = prompt("Enter the updated description:", expenseToEdit.description);

    // Update the expense properties
    expenseToEdit.category = updatedCategory;
    expenseToEdit.amount = updatedAmount;
    expenseToEdit.description = updatedDescription;

    // After editing the expense, render the updated expense list
    renderExpenseList();
  }

  // Function to handle deleting an expense
  function handleDeleteExpense(index) {
    const expenseToDelete = expenses[index];
    // Perform the desired action for deleting an expense
    console.log("Delete button clicked");
    console.log("Expense to delete:", expenseToDelete);
    // Add your code for deleting the expense here

    // Remove the expense from the expenses array
    expenses.splice(index, 1);

    // Render the updated expense list
    renderExpenseList();
  }

  // Render the initial expense list
  renderExpenseList();
});
