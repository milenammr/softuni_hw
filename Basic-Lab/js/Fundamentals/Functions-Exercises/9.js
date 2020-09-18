function loadingBar(n){
    function printing(num){
        let char = '%';
        let result = char.repeat(num / 10);
        return result;
    }
    function printingDots(num){
        let number = 10 - (num / 10);
        let char = '.';
        let result = char.repeat(number);
        return result;
    }
    if (n < 100){
        console.log(`${n}% [${printing(n)}${printingDots(n)}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`${n}% [${printing(n)}${printingDots(n)}]`);
    }
}
loadingBar(10);