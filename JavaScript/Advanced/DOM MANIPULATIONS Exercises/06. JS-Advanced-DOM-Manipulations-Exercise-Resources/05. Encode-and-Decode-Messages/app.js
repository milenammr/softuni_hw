function encodeAndDecodeMessages() {
    let textareas = document.getElementsByTagName('textarea');
    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', code);
    buttons[1].addEventListener('click', encode);
    let message;
    let newMessage = '';
    function code() {
        message = textareas[0].value;
        for (let i of message) {
            i = i.charCodeAt(0) + 1;
            newMessage += String.fromCharCode(i);
        }
        textareas[1].innerHTML = newMessage;
        newMessage = '';
        textareas[0].value = '';
        
    }

    function encode(){
        message = textareas[1].value;
        newMessage = '';
        for (let i of message) {
            i = i.charCodeAt(0) - 1;
            newMessage += String.fromCharCode(i);
        }
        textareas[1].innerHTML = newMessage;
        buttons[1].removeEventListener('click', encode);
    }

}