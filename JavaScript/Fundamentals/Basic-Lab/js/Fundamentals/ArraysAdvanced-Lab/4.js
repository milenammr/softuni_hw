function lastK(n, k){
    let arr = [1];
    // let newArr = [];
    // newArr = arr[0];
    for (let i = 1; i < n; i++){
        let start = Math.max(0, i - k);
        let end = i - 1;
        let sum = 0;
        for (let element = arr[start]; element <= arr[end]; element++){
            sum += arr[element];
        }
        arr[i] = sum;

        // newArr += arr[i];
        // newArr = arr.slice(arr.length - k);
        // arr.push(newArr);
        //newArr += newArr[];
    }
    console.log(arr.join(' '));
}
lastK(6, 3)