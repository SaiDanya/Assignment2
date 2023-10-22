document.addEventListener("DOMContentLoaded", function () {
    const inputString = document.getElementById("inputString");
    const reverseButton = document.getElementById("reverseButton");
    const output = document.getElementById("output");

    reverseButton.addEventListener("click", function () {
        const userInput = inputString.value;
        const reversedString = reverseString(userInput);
        output.textContent = `Output: ${reversedString}`;
    });

    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) { 
             newString += str[i];
        }
        return newString;
    }
});
