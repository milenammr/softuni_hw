function solve (n){
    function printStars (n){
        let star = '* ';
        let row = star.repeat(n);
        return row;
    }
        if (n == undefined){
            n = 5;
            for (let i = 0; i < n; i++){
                console.log(printStars(n));
            }
        } else {
            for (let i = 0; i < n; i++){
                console.log(printStars(n));
            }
        }
    }
solve (3);