function subtract() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;
    let result = Number(first) - Number(second);
    let result2 = document.getElementById('result').innerHTML = result;
}