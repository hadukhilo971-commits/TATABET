// Check user login status on load
window.onload = function() {
    let loggedInUser = localStorage.getItem('tataUser');
    let balanceElem = document.getElementById('userBalance');
    if (balanceElem) {
        if (loggedInUser) {
            balanceElem.innerText = "₹0.00";
        } else {
            balanceElem.innerText = "₹0.00";
        }
    }
};

// Handle Fake Login
function handleLogin(event) {
    event.preventDefault();
    let user = document.getElementById('loginUser').value;
    localStorage.setItem('tataUser', user);
    alert("Login successful!");
    window.location.href = "index.html";
}

// Handle Fake Register
function handleRegister(event) {
    event.preventDefault();
    let user = document.getElementById('regUser').value;
    localStorage.setItem('tataUser', user);
    alert("Account created successfully!");
    window.location.href = "index.html";
}

// Profile icon check
function checkAuth() {
    let loggedInUser = localStorage.getItem('tataUser');
    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        alert("Logged in user: " + loggedInUser + "\nBalance: ₹0.00");
    }
}

// Set quick deposit amount
function setAmount(amount) {
    const amountInput = document.getElementById('customAmount');
    if (amountInput) {
        amountInput.value = amount;
    }
}

// Deposit Submit Validation (₹300 to ₹50,000)
function submitDeposit() {
    const amount = Number(document.getElementById('customAmount').value);
    const utr = document.getElementById('utrInput').value;

    if (amount < 300 || amount > 50000) {
        alert("Deposit amount must be between ₹300 and ₹50,000!");
        return;
    }

    if (!utr || utr.length < 10) {
        alert("Please enter a valid 12-digit UTR number!");
        return;
    }

    alert("Deposit submitted successfully! Waiting for verification.");
    window.location.href = "index.html";
}

// Category filter dummy function
function filterCategory(cat) {
    alert("Showing " + cat.toUpperCase() + " games.");
}
