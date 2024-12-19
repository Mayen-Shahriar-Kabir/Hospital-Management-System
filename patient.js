document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const totalAmount = parseFloat(document.getElementById("totalAmount").value.replace('$', ''));
    const enteredAmount = parseFloat(document.getElementById("enterAmount").value);

    if (enteredAmount > totalAmount) {
        alert("Entered amount exceeds the total amount!");
    } else if (enteredAmount <= 0 || isNaN(enteredAmount)) {
        alert("Please enter a valid amount.");
    } else {
        alert(`Payment of $${enteredAmount} successful!`);
        document.getElementById("paymentForm").reset();
    }
});
