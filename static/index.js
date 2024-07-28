function checkPalindrome(){
    const string = document.getElementById("entry").value;

    if(string === ""){
        return;
    }

    const flip = string.split('').reverse().join('');
    
    if (string === flip){
        validPalindrome();
    }else{
        invalidPalindrome();
    }
}

function validPalindrome(){
    document.getElementById("result").style.backgroundColor = "lightgreen";

    document.getElementById("result-text").innerHTML = `Yes! It is a palindrome.`;   
}

function invalidPalindrome(){
    document.getElementById("result").style.backgroundColor = "lightcoral";

    document.getElementById("result-text").innerHTML = `Nope! It is not a palindrome.`;
}