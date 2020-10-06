function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let daysButton = document.getElementById('daysBtn');
    let hoursInput = document.getElementById('hours');
    let hoursButton = document.getElementById('hoursBtn');
    let minInput = document.getElementById('minutes');
    let minButton = document.getElementById('minutesBtn');
    let secInput = document.getElementById('seconds');
    let secButton = document.getElementById('secondsBtn');
    daysButton.addEventListener('click', convert);
    hoursButton.addEventListener('click', convert);
    minButton.addEventListener('click', convert);
    secButton.addEventListener('click', convert);
    function convert(){
        if(daysInput.value){
            hoursInput.value = Number(daysInput.value) * 24;
            minInput.value = Number(daysInput.value) * 24 * 60;
            secInput.value = Number(daysInput.value) * 24 * 60 * 60;
        }
        if(hoursInput.value){
            daysInput.value = Number(hoursInput.value) / 24;
            minInput.value = Number(daysInput.value) * 24 * 60;
            secInput.value = Number(daysInput.value) * 24 * 60 * 60;
        }
        if(minInput.value){
            hoursInput.value = Number(minInput.value) / 60;
            daysInput.value = Number(hoursInput.value) / 24;
            secInput.value = Number(daysInput.value) * 24 * 60 * 60;
        }
        if(secInput.value){
            minInput.value = Number(secInput.value) / 60;
            hoursInput.value = Number(minInput.value) / 60;
            daysInput.value = Number(hoursInput.value) / 24;
        } 
    }
}