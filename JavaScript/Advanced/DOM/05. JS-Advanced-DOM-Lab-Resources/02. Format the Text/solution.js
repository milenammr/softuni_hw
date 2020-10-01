function solve() {
  let textInput = document.getElementById('input');
  let text = textInput.innerText.split('. ');
  let paragraf = '';
  while (text.length > 0){
    paragraf = text.splice(0, 3).join('. ');
    text.length > 0 ? paragraf += '.' : paragraf += ''
    let p = document.createElement('p');
    p.innerHTML = paragraf;
    let output = document.getElementById('output');
    output.appendChild(p);
    paragraf = '';
  }
}
