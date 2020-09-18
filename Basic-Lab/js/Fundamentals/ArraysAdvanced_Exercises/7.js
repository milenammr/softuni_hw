function search(arr1, arr2){
    let [slice, splice, number] = arr2;
    arr1 = arr1.slice(0, slice);
    arr1.splice(0, splice);
    let count = 0;
    for (let num of arr1){
        if (num == number){
            count++;
        }
    }
    console.log(`Number ${number} occurs ${count} times.`);
}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )