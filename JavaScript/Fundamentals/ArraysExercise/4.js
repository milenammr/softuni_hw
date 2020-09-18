function rotation(arr, num){
    //let arr2 = [];
    let result = '';
    if (num <= arr.length){
        for (let i = 0; i < arr.length - num; i++){
            //arr2[i] = arr[num + i];
            result += arr[num + i] + ' ';
        }
        for (let i = 0; i < num; i++){
            result += arr[i] + ' ';
        }
        
    } else {
        num = num % arr.length;
        for (let i = 0; i < arr.length - num; i++){
            //arr2[i] = arr[num + i];
            result += arr[num + i] + ' ';
        }
        for (let i = 0; i < num; i++){
            result += arr[i] + ' ';
        }
        // for (let i = num - arr.length; i < arr.length; i++){
        //     //arr2[num + 1 + i] = arr[i];
        //     result += arr[i] + ' ';
        // }
        // for (let i = 0; i < num - arr.length; i++){
        //     result += arr[i] + ' ';
        // }
    }

    console.log(result);
}

  
rotation([51, 47, 32, 61, 21], 2)
rotation([32, 21, 61, 1], 4)
rotation([2, 4, 15, 31], 10)

