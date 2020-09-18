function solve(letter){
    letter = letter.charCodeAt();
    if (letter > 93){
        console.log('lower-case');
    } else {
        console.log('upper-case');
    }
}
solve('f')