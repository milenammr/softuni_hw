function login(input){
    let username = input.shift();
    let word = input.shift();
    let pass = '';
    let counter = 0;
    while (username != pass){
        for (let i = word.length; i >= 0; i--){
            let char;
            char = word.charAt(i);
            pass += char;
        }    
        if (username === pass){
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (counter == 3){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
            counter++;
        }
        pass = '';
        word = input.shift();
    }

}
login(['Acer','login','go','let me in','recA'])