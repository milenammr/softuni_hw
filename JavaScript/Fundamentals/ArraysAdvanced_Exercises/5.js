function solve(arr){   
        arr.sort(function(a, b){
          let x = a.length;
          let y = b.length;
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          if (x == y) {
              x = a.toLowerCase();
              y = b.toLowerCase();
              if (x < y) {return -1;}
                if (x > y) {return 1;}
        }
        });
        for (let name of arr){

            console.log(name);
        }

}
solve(['test',
'Deny',
'omen',
'Default']);
//solve(["Isacc", "Theodor", "Jack", "Harrison", "George"])