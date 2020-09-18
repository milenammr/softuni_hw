function perfectNumber(n){
    function perfectDivider(a, b){
        let num = a % b == 0 ? true : false;
        return num;            
    }
    let sum = 0;
    for(let i = 1; i < n; i++){
        let divisor = perfectDivider(n, i);
        if (divisor){
            sum += i;
        }
    }
    if (sum == n){
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(1236498)