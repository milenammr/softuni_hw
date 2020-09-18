function solve(str){
 let pattern = /[A-Za-z]+/g;
 let arr = str.match(pattern);
 console.log(arr.join(', ').toUpperCase());
}
solve('hello')