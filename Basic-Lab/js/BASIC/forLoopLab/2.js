function letters () {
    for (let letter = 'a'.charCodeAt(); letter <= 'z'.charCodeAt(); letter++) {
        console.log (String.fromCharCode(letter));
    }
}
letters()