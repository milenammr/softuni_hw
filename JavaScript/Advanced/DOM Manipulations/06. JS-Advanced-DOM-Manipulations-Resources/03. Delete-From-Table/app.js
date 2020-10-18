function deleteByEmail() {
    let input = document.querySelector('label input');
    let div = document.getElementById('result');
    let td = document.getElementsByTagName('td');
    let notFound = true;
    for (let i of td) {
        if (input.value.trim() == i.innerHTML) {
            i.parentNode.remove();
            notFound = false;
        }
    }
    if (notFound) {
        div.innerHTML = 'Not found.';
    }
}