
    // let stars = document.getElementById("stars");
    // let moon = document.getElementById("moon");
    // let mountains_behind = document.getElementById("mountains_behind");
    // let text = document.getElementById("text");
    // let btn = document.getElementById("btn");
    // let mountains_front = document.getElementById("mountains_front");
    // let header = document.querySelector("h1");

    // window.addEventListener("scroll", function () {
    //   let value = window.scrollY;
    //   stars.style.left = value * 0.25 + "px";
    //   moon.style.top = value * 1.15 + "px";
    //   mountains_behind.style.top = value * 0.5 + "px";
    //   mountains_front.style.top = value * 0 + "px";
    //   text.style.marginRight = value * 3.15 + "px";
    //   text.style.marginTop = value * 1.5 + "px";
    //   btn.style.marginTop = value * 1.5 + "px";
    //   header.style.top = value * 0.5 + "px";
    // });

    
// // expense add
// let expenses = [];
// let totalAmount = 0;

// const categorySelect = document.getElementById('category-select');
// const amountInput = document.getElementById('amount-input');
// const dateInput = document.getElementById('date-input');
// const addBtn = document.getElementById('add-btn');
// const expensesTableBody = document.getElementById('expnese-table-body');
// const totalAmountCell = document.getElementById('total-amount');

// addBtn.addEventListener('click', function() {
//     const category = categorySelect.value;
//     const amount = Number(amountInput.value);
//     const date = dateInput.value;

//     if (category === '') {
//         alert('Please select a category');
//         return;
//     }
//     if (isNaN(amount) || amount <=0 ) {
//         alert('Please enter a valid amoun')
//         return;
//     }
//     if(date === '') {
//         alert('Please select a date')
//         return;
//     }
//     expenses.push({category, amount, date});

//     totalAmount += amount;
//     totalAmountCell.textContent = totalAmount;

//     const newRow = expensesTableBody.insertRow();

//     const categoryCell = newRow.insertCell();
//     const amountCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();
//     const deleteCell = newRow.insertCell();
//     const deleteBtn = document.createElement('button');

//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', function() {
//         expenses.splice(expenses.indexOf(expense), 1);

//         totalAmount -= expense.amount;
//         totalAmountCell.textContent = totalAmount;

//         expensesTableBody.removeChild(newRow);
//     });

//     const expense = expenses[expenses.length - 1];
//     categoryCell.textContent = expense.category;
//     amountCell.textContent = expense.amount;
//     dateCell.textContent = expense.date;
//     deleteCell.appendChild(deleteBtn);

// });

// for (const expense of expenses) {
//     totalAmount += expense.amount;
//     totalAmountCell.textContent = totalAmount;

//     const newRow = expensesTableBody.inserRow();
//     const categoryCell = newRow.insertCell();
//     const amountCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();
//     const deleteCell = newRow.insertCell();
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', function() {
//         expenses.splice(expenses.indexOf(expense), 1);

//         totalAmount -= expense.amount;
//         totalAmountCell.textContent = totalAmount;

//         expensesTableBody.removeChild(newRow);
//     });
//     categoryCell.textContent = expense.category;
//     amountCell.textContent = expense.amount;
//     dateCell.textContent = expense.date;
//     deleteCell.appendChild(deleteBtn);
// }

// //dark mode
// const sideMenu=document.querySelector("aside");
// const menuBtn=document.querySelector("#menu-btn");
// const closeBtn=document.querySelector("#close-btn");
// const themeToggler=document.querySelector(".theme-toggler");



// //show sidebar
// menuBtn.addEventListener('click',()=>{
//     sideMenu.style.display='block';
// })
// //close sidebar
// closeBtn.addEventListener('click',()=>{
//     sideMenu.style.display='none';
// })

// //change theme
// themeToggler.addEventListener('click',()=>{
//     document.body.classList.toggle('dark-theme-variables');
//     themeToggler.querySelector('span:nth-child(1)'.classList.toggle('active'));
//     themeToggler.querySelector('span:nth-child(2)'.classList.toggle('active'));


// })
//friends add
// var friends = [];
//     var selectedFriends = [];
//     var group_expenses = [];

//     function addFriend() {
//         var friendName = document.getElementById('friendName').value;
//         if (friendName && !friends.includes(friendName)) {
//             friends.push(friendName);
//             displayFriends();
//             updateFriendSelect();
//             document.getElementById('friendName').value = '';
//         }
//     }

//     function displayFriends() {
//         var friendList = document.getElementById('friendList');
//         friendList.innerHTML = '';
//         friends.forEach(function (friend) {
//             var friendElement = document.createElement('div');
//             friendElement.className = 'friend';
//             friendElement.textContent = friend;
//             friendList.appendChild(friendElement);
//         });
//     }

//     function updateFriendSelect() {
//         var friendSelect = document.getElementById('friendSelect');
//         friendSelect.innerHTML = '';
//         friends.forEach(function (friend) {
//             var option = document.createElement('option');
//             option.value = friend;
//             option.textContent = friend;
//             friendSelect.appendChild(option);
//         });
//     }

//     function addExpense() {
//         var selectedFriend = document.getElementById('friendSelect').value;
//         var expenseCategory = document.getElementById('expenseCategory').value;
//         var expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

//         if (!selectedFriend || !expenseCategory || isNaN(expenseAmount)) {
//             alert("Please select a friend, enter expense category, and provide a valid expense amount.");
//             return;
//         }

//         group_expenses.push({
//             friend: selectedFriend,
//             category: expenseCategory,
//             amount: expenseAmount
//         });

//         displaygroup_expenses();
//         document.getElementById('expenseCategory').value = '';
//         document.getElementById('expenseAmount').value = '';
//     }

//     function displaygroup_expenses() {
//         var group_expensesList = document.getElementById('group_expensesList');
//         group_expensesList.innerHTML = '';

//         group_expenses.forEach(function (expense) {
//             var expenseElement = document.createElement('div');
//             expenseElement.textContent = expense.friend + ': ' + expense.category + ' - $' + expense.amount;
//             group_expensesList.appendChild(expenseElement);
//         });
//     }
 
