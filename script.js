// Set amount quick buttons on deposit page
function setAmount(amount) {
    const amountInput = document.getElementById('customAmount');
    if (amountInput) {
        amountInput.value = amount;
    }
}

// Deposit validation
function submitDeposit() {
    const amount = document.getElementById('customAmount').value;
    const utr = document.getElementById('utrInput').value;

    if (amount < 300) {
        alert("Minimum deposit amount is ₹300!");
        return;
    }

    if (!utr || utr.length < 10) {
        alert("Please enter a valid 12-digit UTR / Transaction ID!");
        return;
    }

    alert("Deposit request submitted successfully! Your account will be updated after verification.");
    window.location.href = "index.html";
}
