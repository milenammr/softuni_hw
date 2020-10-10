function solve() {
    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let result = document.getElementById('result');
    let buttons = document.querySelectorAll('.keys > button');
    let clearButton = document.getElementsByClassName('clear')[0];
    clearButton.addEventListener('click', clear);
    function clear(){
        expressionOutput.innerHTML = '';
        resultOutput.innerHTML = '';
    }
    for (let button of buttons){
        button.addEventListener('click', calc);
    }
    function calc(e){ 
        let value = e.target.getAttribute('value');
        
        if (expressionOutput.innerHTML == ''){
            if(value !== '='){
                expressionOutput.innerHTML = value;
            } 
        } else {
            if(value !== '='){
                if (value == '+' || value == '-' || value == '*' || value == '/'){
                    expressionOutput.innerHTML += ` ${value} `;
                } else {
                    expressionOutput.innerHTML += value;
                }
            } else {
                sum();
            }
        }
    function sum(){
        let expression = expressionOutput.innerHTML;
        let pattern = /[\+\-*\/]/g;
        let operands = expression.split(pattern);
        let operator = expression.match(pattern);
        let sum = 0;
        if (operands[1] == ' '){
            resultOutput.innerHTML = NaN;
        } else {

            switch (operator[0]){
                case '+': sum = Number(operands[0]) + Number(operands[1]);
                break;
                case '-': sum = Number(operands[0]) - Number(operands[1]);
                break;
                case '*': sum = Number(operands[0]) * Number(operands[1]);
                break;
                case '/': sum = Number(operands[0]) / Number(operands[1]);
                break;
            }
            resultOutput.innerHTML = sum;
        }
    }
        //console.log(expressionOutput.innerHTML);
    }
}