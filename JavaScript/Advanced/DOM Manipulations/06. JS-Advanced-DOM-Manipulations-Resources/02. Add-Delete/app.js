function addItem() {
    let input = document.getElementById('newText');
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    li.innerHTML = `${input.value} <a href="#">[Delete]</a>`;
    li.addEventListener('click', deleteItem);
    ul.appendChild(li);
    input.value = '';
    function deleteItem(e){
        if (e.target.nodeName == 'A'){
            e.currentTarget.remove();
        }
    }
}