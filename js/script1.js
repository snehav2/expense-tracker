let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expnese-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <=0 ) {
        alert('Please enter a valid amoun')
        return;
    }
    if(date === '') {
        alert('Please select a date')
        return;
    }
    expenses.push({category, amount, date});

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.inserRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}
function displayExpensesByCategory(expenses) {
    var expensesByCategory = {};

    // Populate the dictionary
    expenses.forEach(function (expense) {
        var category = expense.category;
        var amount = expense.amount;

        if (expensesByCategory[category]) {
            expensesByCategory[category] += amount;
        } else {
            expensesByCategory[category] = amount;
        }
    });

    // Display expenses by category
    var expensesContainer = document.getElementById('expenses');
    for (var category in expensesByCategory) {
        if (expensesByCategory.hasOwnProperty(category)) {
            var totalAmount = expensesByCategory[category];
            var categoryElement = document.createElement('div');
            categoryElement.className = 'category';
            categoryElement.textContent = category + ': $' + totalAmount;
            expensesContainer.appendChild(categoryElement);
        }
    }
}

// Call the function with your expenses data
displayExpensesByCategory(expenses);
function calculateCategoryTotal(category) {
    return expenses.filter(expense => expense.category === category)
        .reduce((total, expense) => total + expense.amount, 0);
}

function updateCategorySelect(categories) {
    categorySelect.innerHTML = '<option value="" selected disabled>Select category</option>';

    for (const category of categories) {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    }
}
