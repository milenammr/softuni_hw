function solve() {
   let tbody = document.getElementsByTagName('tbody')[0].children;
   let input = document.getElementById('searchField');
   let button = document.getElementById('searchBtn');
   button.addEventListener('click', search);
   function search() {
      let searchTxt = input.value;
      for (let i in tbody) {
         if (tbody[i].hasAttribute('class')) {
            tbody[i].removeAttribute('class');
         }
         let txt = tbody[i].textContent;
         let boolean = txt.includes(searchTxt);
         if (boolean && searchTxt !== '') {
            tbody[i].setAttribute('class', 'select');
         }
         input.value = '';
      }
      
   }
}