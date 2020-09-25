function solve(arr){
    let delimiter = arr.pop([arr.length - 1]);
    console.log(arr.join(delimiter));
}
solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)