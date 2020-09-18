function specialNumber(n){
    for (let i = 1; i <= n; i++){
        let num = i;
        let lastDigit = (num % 10);
        let firstDigit = parseInt(num / 10);
        let boolean = firstDigit + lastDigit;
        switch (boolean){
            case 5:
            case 7:
            case 11:
                boolean = 'True';
            break;
            default:
                boolean = 'False';
        }
        //boolean = boolean.toString().includes('5') ? 'True' : 'False';
        console.log(`${i} -> ${boolean}`);
    }
}
specialNumber(15)