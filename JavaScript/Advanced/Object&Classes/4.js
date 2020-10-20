function solve (json){
    let data = JSON.parse(json);
    let html = `<table>\n`;
    let count = 0;
        for (let row of data){
            if (count == 0){
                html += `<tr>`;
                for (let key in row){
                    html += `<th>${key}</th>`;
                }
                html += `</tr>\n`;
                html += `<tr>`;
                for (let key in row){
                    html += `<td>${row[key]}</td>`;
                }
                html += `</tr>\n`;
            } else {
                html += `<tr>`;
                for (let key in row){
                    html += `<td>${row[key]}</td>`;
                }
                html += `</tr>\n`;
            }
            count++;
        }
    return html += '</table>';
     console.log(html);
}
solve (
    ['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']
)
// solve(
//     [{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]
// )