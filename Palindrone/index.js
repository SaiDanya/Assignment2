document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("numberInput");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");

    checkButton.addEventListener("click", function () {
        const inputText = numberInput.value;
        if (isPalindrome(inputText)) {
            result.textContent = "It's a palindrome!";
        } else {
            result.textContent = "It's not a palindrome.";
        }
    });

    function isPalindrome(str) {
        str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
        return str === str.split('').reverse().join('');
    }
});
