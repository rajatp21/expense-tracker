$(document).ready(function() {
    // Handle form submission
    $("#expense-form").submit(function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Retrieve expense name and amount
      const expenseName = $("#expense-name").val();
      const expenseAmount = parseFloat($("#expense-amount").val());
  
      // Validate input
      if (expenseName === "" || isNaN(expenseAmount)) {
        alert("Please provide valid inputs.");
        return;
      }
  
      // Add expense to the list
      const expenseItem = `<li>${expenseName}: $${expenseAmount.toFixed(2)}</li>`;
      $("#expenses").append(expenseItem);
  
      // Update remaining budget
      const remainingBudget = parseFloat($("#remaining-budget").text());
      const newRemainingBudget = remainingBudget - expenseAmount;
      $("#remaining-budget").text(newRemainingBudget.toFixed(2));
  
      // Clear form inputs
      $("#expense-name").val("");
      $("#expense-amount").val("");
    });
  });
  