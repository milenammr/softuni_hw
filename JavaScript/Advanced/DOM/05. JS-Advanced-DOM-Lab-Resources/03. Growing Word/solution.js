function growingWord() {
  let p = document.querySelector('#exercise p');
  let colors = document.querySelector('#colors');
  if(!p.style.fontSize ){
    p.style.fontSize = '2px';
    p.style.color = colors.firstElementChild.textContent.toLowerCase();
  } else {
    p.style.fontSize = parseInt(p.style.fontSize) * 2 + 'px';
    colors.appendChild(colors.firstElementChild);
    p.style.color = colors.firstElementChild.textContent.toLowerCase();
  }
}