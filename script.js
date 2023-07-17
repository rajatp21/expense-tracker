// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the expense form and expense list elements
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");

  // Add event listener to the expense form
  expenseForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get the form inputs
    const categoryInput = document.getElementById("category");
    const amountInput = document.getElementById("amount");
    const descriptionInput = document.getElementById("description");

    // Create a new expense item element
    const newExpenseItem = document.createElement("li");
    newExpenseItem.innerHTML = `
      <div class="expense-item">
        <span class="category">${categoryInput.value}</span>
        <span class="amount">$${amountInput.value}</span>
        <span class="description">${descriptionInput.value}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Append the new expense item to the expense list
    expenseList.appendChild(newExpenseItem);

    // Reset the form inputs
    categoryInput.value = "";
    amountInput.value = "";
    descriptionInput.value = "";
  });

  // Add event listener to the expense list
  expenseList.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-btn")) {
      // Handle edit button click
      const expenseItem = e.target.closest(".expense-item");
      const category = expenseItem.querySelector(".category").textContent;
      const amount = expenseItem.querySelector(".amount").textContent;
      const description = expenseItem.querySelector(".description").textContent;

      // Perform the desired action for editing an expense
      console.log("Edit button clicked");
      console.log("Category:", category);
      console.log("Amount:", amount);
      console.log("Description:", description);
    } else if (e.target.classList.contains("delete-btn")) {
      // Handle delete button click
      const expenseItem = e.target.closest("li");

      // Perform the desired action for deleting an expense
      console.log("Delete button clicked");
      console.log("Expense item:", expenseItem);

      // Remove the expense item from the DOM
      expenseItem.remove();
    }
  });
});
