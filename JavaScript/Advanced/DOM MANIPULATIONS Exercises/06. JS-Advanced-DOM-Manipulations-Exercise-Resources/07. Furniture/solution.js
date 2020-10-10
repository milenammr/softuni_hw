function solve() {
  let input = document.querySelectorAll('#exercise textarea');
  let generateButton = input[0].nextElementSibling;
  let table = document.querySelector('.table tbody');
  let addButton = input[1].nextElementSibling;
  generateButton.addEventListener('click', generate);
  addButton.addEventListener('click', add);
  function generate() {
    let objects = JSON.parse(input[0].value);
    for (let i of objects){
      let newRow = document.createElement('tr');
      table.appendChild(newRow);
      let td1 = document.createElement('td');
      newRow.appendChild(td1);
      let td2 = document.createElement('td');
      newRow.appendChild(td2);
      let td3 = document.createElement('td');
      newRow.appendChild(td3);
      let td4 = document.createElement('td');
      newRow.appendChild(td4);
      for (let j in i){
        switch(j){
          case 'img':
          td1.innerHTML = `<img src="${i[j]}">`;
          break;
          case 'name':
          td2.innerHTML = `<p>${i[j]}</p>`;
          break;
          case 'price':
          td3.innerHTML = `<p>${i[j]}</p>`;
          break;
          case 'decFactor':
          td4.innerHTML = `<p>${i[j]}</p>`;
            break; 

        }
      }
      let td = document.createElement('td');
      newRow.appendChild(td).innerHTML = '<input type="checkbox">';
    }
  }
  function add(){
    let checkbox = table.querySelectorAll('input[type="checkbox"]');
    let objects = [];
    let price = 0;
    let average = 0;
    let counter = 0;
    for (let i of checkbox){
      if (i.checked == true){
        let row = i.parentElement.parentElement.children;
        objects.push(row[1].firstElementChild.textContent);
        price += Number(row[2].firstElementChild.textContent);
        average += Number(row[3].firstElementChild.textContent);
        counter++;
      }
    }
    input[1].value = `Bought furniture: ${objects.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${average / counter}`;
  }
}