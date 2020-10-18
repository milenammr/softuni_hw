function stopwatch() {
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    startButton.addEventListener('click', start);
    let divTime = document.getElementById('time');
    let interval;

    function start(){
        divTime.textContent = '00:00';
        startButton.setAttribute('disabled', 'true');
        stopButton.removeAttribute('disabled', 'true');
        stopButton.addEventListener('click', stopB);
        interval = window.setInterval(timer, 1000);
        function timer(){
            let arr = divTime.innerHTML.split(':');
            minutes = Number(arr[0]);
            seconds = Number(arr[1]);
            seconds++;
            if (seconds > 59){
                minutes++;
                seconds = 0;
            }
            divTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        }
    }

    function stopB(){
        stopButton.setAttribute('disabled', 'true');
        startButton.removeAttribute('disabled', 'true');
        clearInterval(interval);
    }
}