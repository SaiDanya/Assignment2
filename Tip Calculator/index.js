document.addEventListener("DOMContentLoaded", function () {
    const subtotalInput = document.getElementById("subtotal");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const calculateButton = document.getElementById("calculateButton");
    const totalOutput = document.getElementById("total");

    calculateButton.addEventListener("click", function () {
        const subtotal = parseFloat(subtotalInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);
        
        if (!isNaN(subtotal) && !isNaN(tipPercentage)) {
            const totalAmount = calculateTotalAmount(subtotal, tipPercentage);
            totalOutput.textContent = `Total Amount (including tip): $${totalAmount.toFixed(2)}`;
        } else {
            totalOutput.textContent = "Invalid input. Please enter numbers.";
        }
    });

    function calculateTotalAmount(subtotal, tipPercentage) {
        const tipAmount = (subtotal * tipPercentage) / 100;
        return subtotal + tipAmount;
    }
});
