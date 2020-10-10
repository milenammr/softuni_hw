function solve() {
    let input = document.getElementById('input');
    let selectTo = document.getElementById('selectMenuTo');
    let option = document.createElement('option');
    option.setAttribute('value', 'binary');
    option.textContent = 'Binary';
    selectTo.appendChild(option);
    let option2 = document.createElement('option');
    option2.setAttribute('value', 'hexadecimal');
    option2.textContent = 'Hexadecimal';
    selectTo.appendChild(option);
    selectTo.appendChild(option2);
    let result = document.getElementById('result');
    let button = document.querySelector('#container button');
    button.addEventListener('click', solve);
    function solve() {
        if (selectTo.value == 'binary') {
            let x = Number(input.value);
            let bin = 0;
            let rem, i = 1, step = 1;
            while (x != 0) {
                rem = x % 2;
                x = parseInt(x / 2);
                bin = bin + rem * i;
                i = i * 10;
            }
            result.value = bin;
        } else if (selectTo.value == 'hexadecimal') {
            let x = Number(input.value);
            result.value = x.toString(16).toUpperCase();
        }
    }
}