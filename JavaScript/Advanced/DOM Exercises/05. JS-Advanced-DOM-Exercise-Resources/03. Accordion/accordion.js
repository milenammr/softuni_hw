function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let extra = document.getElementById('extra');
    if (button.innerHTML == 'More' && extra.style.display == 'none'){
        button.innerHTML = 'Less';
        extra.style.display = 'block';
    } else {
        button.innerHTML = 'More';
        extra.style.display = 'none';
    }
}