function listProducts(arr){
    let arr2 = arr.sort();
    for (let i =0; i < arr.length; i++){
        console.log(`${i + 1}.${arr[i]}`);
    }
    //arr2 = arr2.sort((a, b) => a - b);
    //console.log(arr2);
}
listProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])