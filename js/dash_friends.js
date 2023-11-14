var friends = [];
    var selectedFriends = [];
    var group_expenses = [];

    function addFriend() {
        var friendName = document.getElementById('friendName').value;
        if (friendName && !friends.includes(friendName)) {
            friends.push(friendName);
            displayFriends();
            updateFriendSelect();
            document.getElementById('friendName').value = '';
        }
    }

    function displayFriends() {
        var friendList = document.getElementById('friendList');
        friendList.innerHTML = '';
        friends.forEach(function (friend) {
            var friendElement = document.createElement('div');
            friendElement.className = 'friend';
            friendElement.textContent = friend;
            friendList.appendChild(friendElement);
        });
    }

    function updateFriendSelect() {
        var friendSelect = document.getElementById('friendSelect');
        friendSelect.innerHTML = '';
        friends.forEach(function (friend) {
            var option = document.createElement('option');
            option.value = friend;
            option.textContent = friend;
            friendSelect.appendChild(option);
        });
    }

    function addExpense() {
        var selectedFriend = document.getElementById('friendSelect').value;
        var expenseCategory = document.getElementById('expenseCategory').value;
        var expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

        if (!selectedFriend || !expenseCategory || isNaN(expenseAmount)) {
            alert("Please select a friend, enter expense category, and provide a valid expense amount.");
            return;
        }

        group_expenses.push({
            friend: selectedFriend,
            category: expenseCategory,
            amount: expenseAmount
        });

        displaygroup_expenses();
        document.getElementById('expenseCategory').value = '';
        document.getElementById('expenseAmount').value = '';
    }

    function displaygroup_expenses() {
        var group_expensesList = document.getElementById('group_expensesList');
        group_expensesList.innerHTML = '';

        group_expenses.forEach(function (expense) {
            var expenseElement = document.createElement('div');
            expenseElement.textContent = expense.friend + ': ' + expense.category + ' - $' + expense.amount;
            group_expensesList.appendChild(expenseElement);
        });
    }