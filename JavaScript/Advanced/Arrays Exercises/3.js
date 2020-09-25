function solve (arr){
    let n = [];
    for (let i = 1; i <= arr.length; i++){
        if (arr[i - 1] == 'add'){
            n.push(i); 
        } else {
            n.pop();
        }
    }
    if (n.length == 0){
        console.log('Empty');
    } else {
        n.forEach(x => console.log(x));
    }

}
solve(['add', 
'add', 
'remove', 
'add', 
'add']
)
solve(['add', 
'add', 
'add', 
'add']
)
solve(['remove', 
'remove', 
'remove']
)