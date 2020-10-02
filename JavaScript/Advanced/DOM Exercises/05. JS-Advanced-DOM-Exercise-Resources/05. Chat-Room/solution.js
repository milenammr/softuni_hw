function solve() {
   let message = document.getElementById('chat_input');
   let button = document.getElementById('send');
   let container = document.getElementsByClassName('message my-message');
   let chat = document.getElementById('chat_messages');
   button.addEventListener('click', send);
   function send (){
      let newC = container[0].cloneNode(true);
      chat.appendChild(newC);
      newC.innerHTML = message.value;
      console.log(newC.innerHTML);
      message.value = '';
   }
}


