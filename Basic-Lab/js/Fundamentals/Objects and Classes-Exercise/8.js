function solve(){
    class Storage{
        constructor(capacity){    //a number that decreases when adding a given quantity of products in storage
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
                // name: '',       //a string
                // price: 0,       //a number (price is for a single piece of product)
                // quantity: 0,    //a number
                
                //list of products (object). Each product should have:
                //The class should also have the following methods:
            }
            addProduct(product) {
                this.storage.push(product);
                this.capacity -= product.quantity;
                this.totalCost += product.price * product.quantity;   //sum of the cost of the products
            }    //a function that receives a product and adds it to the storage
            getProducts(){
                //let result = [];
                this.storage.forEach((product) => {
                    console.log(JSON.stringify(product));
                    //result.push(product);
                });
                //return result;
            }      //a function that returns all the products in storage in JSON format, each on a new line
            
    }

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);

}
solve();
//{"name":"Cucamber","price":1.5,"quantity":15}
// {"name":"Tomato","price":0.9,"quantity":25}
// {"name":"Bread","price":1.1,"quantity":8}
// 2
// 53.8
