function findPalindrome(arr){
    let equal = (a, b) => a == b;
    let num2 = '';
    for (let num of arr){
        let str = num.toString();
        for (let i = str.length - 1; i >= 0; i--){
            num2 += str[i];
        }     
        let result = equal(num, num2) ? true : false; 
        console.log(result);
        num2 = '';
    }
}
findPalindrome([32,2,232,1010]);