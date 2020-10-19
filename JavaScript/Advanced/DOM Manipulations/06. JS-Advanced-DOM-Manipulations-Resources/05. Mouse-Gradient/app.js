function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', take);
    let result = document.getElementById('result');
    function take(e){
        let offsetXx = e.offsetX;
        let percent = ((offsetXx / e.currentTarget.offsetWidth) * 100);
        result.innerHTML = `${Math.floor(percent)}%`;
        //console.log(e);
    }
}