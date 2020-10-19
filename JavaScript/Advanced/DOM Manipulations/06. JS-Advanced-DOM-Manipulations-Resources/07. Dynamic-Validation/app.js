function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', validate);
    let pattern = /[a-z{2,}]+@[a-z{2,}]+.[a-z{2,}]+/g;    
    function validate(){
        let valid = pattern.test(input.value);
        if(!valid){
            input.classList.add("error");
        } else {
            input.removeAttribute('class', 'error');
        }
       //console.log(input.className);
    }
}