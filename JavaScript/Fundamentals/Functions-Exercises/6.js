function passwordValid(pass){
    let passLength = pass.length >= 6 && pass.length <= 10 ? true : false;
    if (passLength == false){
        console.log("Password must be between 6 and 10 characters");
    }
    let digits = digit => digit.charCodeAt() >= 48 && digit.charCodeAt() <= 57 ? true : false;
    let counter = 0;
    let validChar;
    let invalidChar = 0;
    let lettersAndDigits = letters => (letters.charCodeAt() >= 65 && letters.charCodeAt() <= 90) || (letters.charCodeAt() >= 97 && letters.charCodeAt() <= 122) || (letters.charCodeAt() >= 48 && letters.charCodeAt() <= 57) ? true : false;
    for (let char of pass){
        validChar = lettersAndDigits(char);
        if (validChar == false){           
            invalidChar++;
        }
        if(digits(char) == true){
        counter++;
        }    
    }
    if (invalidChar > 0){
        console.log("Password must consist only of letters and digits");
    }
    if (counter < 2){
        console.log("Password must have at least 2 digits");
    } else if (passLength && invalidChar == 0){
        console.log("Password is valid");
    }
}

passwordValid('Pa$s$s');