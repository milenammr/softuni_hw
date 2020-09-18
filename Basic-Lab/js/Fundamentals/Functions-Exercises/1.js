function smallestOfThreeNum(a, b, c){
    let minNum = (a, b, c) => {
        let min = a < b ? a : b;
        let result = min < c ? min : c; 
        return result;
    }
    console.log(minNum(a, b, c));
}
smallestOfThreeNum(-9, 50, 3);