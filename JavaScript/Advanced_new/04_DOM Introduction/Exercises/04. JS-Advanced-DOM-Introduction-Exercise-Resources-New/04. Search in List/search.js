function search() {
   let towns = document.getElementById('towns').children;
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result')
   let counter = 0;
      Object.values(towns).forEach(element => {
         let el = element.innerHTML;
         el = el.toLowerCase();
         if (el.includes(input.toLowerCase())){
            element.style.fontWeight = 'bold';
            element.style.textDecorationLine = 'underline';
            counter++;
         } else {
            element.style.fontWeight = '';
            element.style.textDecorationLine = '';
         }
      });
      result.innerHTML = `${counter} matches found`;
}
