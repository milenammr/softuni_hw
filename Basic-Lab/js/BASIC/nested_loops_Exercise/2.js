function num (input){
    let n1 = +input.shift();
    let n2 = +input.shift();
    let even = 0;
    let odd = 0;
    let all = '';
    for (let i = n1; i <= n2; i++){
        let currentNum = i + '';
        for (let z = 0; z < currentNum.length; z++){
            let b = +currentNum.charAt(z);
            
            if (z % 2 == 0){
                even += b;
            } else {
                odd += b;
            }
            
        }
        
        if (even == odd){
            all += currentNum + ' ';
        }
        even = 0;
        odd = 0;
    }
    console.log(all);
}
num ([
    '100000', '100050'
])