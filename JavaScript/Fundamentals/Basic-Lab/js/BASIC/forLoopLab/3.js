function letters (input) {
    let text = input.shift();
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        console.log (letter);
    }
    
}

letters (['ice cream'])