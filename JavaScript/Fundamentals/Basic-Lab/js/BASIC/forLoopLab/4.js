function sum (input) {
    let text = input.shift();
    let sum = 0;
    
    for (let ii = 0; ii < text.length; ii++) {
        let letter = text[ii];
        switch (letter) {
            case 'a':
                sum += 1;
                break;
            case 'e':
                sum += 2;
                break;
            case 'i':
                sum += 3;
                break;
            case 'o':
                sum += 4;
                break;
            case 'u':
                sum += 5;
                break;
                      
       } 
    }
    console.log (sum);

}

sum (['hello'])