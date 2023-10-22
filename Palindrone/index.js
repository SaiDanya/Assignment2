document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const checkButton = document.getElementById("checkButton");
    const output = document.getElementById("output");

    checkButton.addEventListener("click", function () {
        const userInput = input.value;
        if (isPalindrome(userInput)) {
            output.textContent = "Output: It's a palindrome!";
        } else {
            output.textContent = "Output: It's not a palindrome.";
        }
    });

    function isPalindrome() {
        var a, b, no, temp = 0;  
        b = no;  
        while ( > 0)  
        {  
        a = no % 10;  
        no = parseInt( no / 10);  
        temptemp = temp*10 + a;  
        }  
        return temp===b;

    }
});
