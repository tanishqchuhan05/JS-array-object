// 1.How do you add an item to the end of an array?
//const fruits = ['apple', 'banana'];
// Add 'orange' at the end

const fruits = ['apple', 'banana'];
const newFruit = 'orange';
const len = fruits.length;

for (let i = 0; i <= fruits.length; i++){
 if(i === len){
    fruits[i] = newFruit;
 }
}

console.log(fruits);


// 2. Another way to add an item to the end of an array?
const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); 

