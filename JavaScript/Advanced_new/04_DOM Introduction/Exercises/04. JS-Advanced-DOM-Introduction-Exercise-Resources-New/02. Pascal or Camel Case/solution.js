function solve() {
  let text1 = document.getElementById('text').value;
  let text2 = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
    if (text2 == 'Camel Case'){
      let part1 = text1.toLowerCase().split(' ').slice(0, 1)
      result.innerText = part1 + text1.toLowerCase().split(' ').slice(1).map(el => el[0].toUpperCase() + el.slice(1)).join('');
    } else if (text2 == 'Pascal Case') {
      result.innerText = text1.toLowerCase().split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join('');
    } else {
      result.innerText = 'Error!'
    }
}

