function solve() {
    let inputName = document.querySelector('#container input[placeholder="Name"]');
    let inputAge = document.querySelector('#container input[placeholder="Age"]');
    let inputKind = document.querySelector('#container input[placeholder="Kind"]');
    let inputCurrentOwner = document.querySelector('#container input[placeholder="Current Owner"]');
    let adoption = document.getElementById('adoption').lastElementChild;
    let addButton = document.getElementById('container').lastElementChild;
    addButton.addEventListener('click', add);

    function add() {
        let li = document.createElement('li');
        let p = document.createElement('p');
        let span = document.createElement('span');
        let button = document.createElement('button');
        let age = Number(inputAge.value);

        if (inputName.value !== '' && inputAge.value !== '' && age && inputKind.value !== '' && inputCurrentOwner.value !== '') {
            p.innerHTML = `<strong>${inputName.value}</strong> is a <strong>${inputAge.value}</strong> year old <strong>${inputKind.value}</strong>`;
            li.appendChild(p);
            span.textContent = `Owner: ${inputCurrentOwner.value}`;
            li.appendChild(span);
            button.innerHTML = 'Contact with owner';
            li.appendChild(button);
            adoption.appendChild(li);
            li.addEventListener('click', take);
        }
        inputName.value = '';
        inputAge.value = '';
        inputKind.value = '';
        inputCurrentOwner.value = '';
    }

    function take(e) {
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.setAttribute('placeholder', 'Enter your names')

        if (e.target.nodeName == 'BUTTON') {
            div.appendChild(input);
            div.appendChild(e.target);
            e.target.innerHTML = 'Yes! I take it!';
            e.currentTarget.appendChild(div);
            e.currentTarget.removeEventListener('click', take);
            e.currentTarget.addEventListener('click', check);
        }
    }

    function check(e) {
        let input = adoption.getElementsByTagName('input')[0];
        let adopted = document.getElementById('adopted').lastElementChild;
        let div = adoption.getElementsByTagName('div')[0];
        
        if (e.target.nodeName == 'BUTTON' && input.value !== '') {
            let newOwner = input.value;
            e.currentTarget.appendChild(e.target);
            e.target.innerHTML = 'Checked';
            div.remove();
            adoption.removeChild(e.currentTarget);
            adopted.appendChild(e.currentTarget);
            let span = adopted.getElementsByTagName('span')[0];
            span.textContent = `New Owner: ${newOwner}`;
            e.currentTarget.removeEventListener('click', check);
            e.currentTarget.addEventListener('click', deleteLi);
        }
    }

    function deleteLi(e) {
        e.currentTarget.remove();
    }

    document.getElementById('add').addEventListener('submit', (e) => { e.preventDefault() })
}

