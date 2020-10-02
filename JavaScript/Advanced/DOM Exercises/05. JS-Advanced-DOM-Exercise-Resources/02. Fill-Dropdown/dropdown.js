function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');
    let option = document.createElement('option');
    menu.appendChild(option);
    option.innerHTML = text.value + value.value;
    text.value = '';
    value.value = '';
}