function solve(fruit, weight, money){
    console.log(`I need $${(money * (weight / 1000)).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}

solve('apple', 1563, 2.35)