function solve (arr){
    let pattern = /@#{1,}[A-Z][A-Za-z\d]{4,}[A-Z]@#{1,}/g;
    let digits = /[0-9]/g;
    let n = arr.shift();
    for (let i = 0; i < n; i++){
        let testPass = pattern.test(arr[i]);
        if (testPass){
            let num = arr[i].match(digits);
            if (num == null){
            console.log(`Product group: 00`);
            } else {
            console.log(`Product group: ${num.join('')}`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}
solve ([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ])

solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ])