function solve() {
  let link = document.getElementsByTagName('a');
  for(let i of link){
    i.addEventListener('click', change);
  }
  function change(e){
    let text = e.currentTarget.nextElementSibling;
    let count = Number(text.innerText.split(' ')[1]);
    count++;
    text.innerText = `visited ${count} times`
  }
  
}