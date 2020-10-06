function create(words) {
   let content = document.getElementById('content');
   for (let i of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.innerHTML = i;
      div.appendChild(p);
      content.appendChild(div);
      div.addEventListener('click', show);
   }
   function show(e) {
      e.target.firstChild.style.display = 'block';
   }
}