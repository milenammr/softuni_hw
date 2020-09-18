function distinctArray(arr){
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[i] == arr[j]){
                counter++;
                if (counter > 1){
                    arr.splice(j, 1);
                }
            }    
        }
         counter = 0;
    }
    console.log(arr.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])