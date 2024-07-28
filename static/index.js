function checkPalindrome(){
    const string = document.getElementById("entry").value;
    const flip = string.split('').reverse().join('');
    
    if (string === flip){
        validPalindrome();
    }else{
        invalidPalindrome();
    }
}

function validPalindrome(){
    document.getElementById("result").style.backgroundColor = "lightgreen";

    const word = document.getElementById("entry").value;
    document.getElementById("result-text").innerHTML = `Yes! ${word} is a palindrome.`;
    
}

function invalidPalindrome(){
    document.getElementById("result").style.backgroundColor = "lightcoral";

    const word = document.getElementById("entry").value;
    document.getElementById("result-text").innerHTML = `Nope! ${word} is not a palindrome.`;
}