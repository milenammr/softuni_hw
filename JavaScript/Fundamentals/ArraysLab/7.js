function equal(arr1, arr2) {
    let element1 = 0;
    let element2 = 0;
    let sum = 0;
    let flag = false;
    for (let i = 0; i < arr1.length; i++) {
        element1 = Number(arr1[i]);
        element2 = Number(arr2[i]);
        if (element1 !== element2){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            flag = true;
            break;
        } 
        if (element1 == element2){
            sum += element1;
        }
    }
    if (flag == false){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equal(['10', '20', '30'], ['10', '20', '30'])