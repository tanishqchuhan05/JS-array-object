// 2. How do you remove the last element from an array and store it in a variable?

// const colors = ['red', 'green', 'blue'];
// remove last element and store


const colors = ['red', 'green', 'blue'];
let lastColor; // remove last element and store
for(let i = 0; i< colors.length; i++){
    if(i === colors.length - 1 ){ // last element
        lastColor = colors[i]; // store last element
        colors.length = colors.length - 1; // remove last element
    }
}

console.log("Updated colors:", colors);

// 2. Another way to remove the last element from an array and store it in a variable?
const colors = ['red', 'green', 'blue'];
const lastColor = colors.pop(); // removes and stores the last element
console.log("Updated colors:", colors);

// 3. Another way to remove the last element from an array and store it in a variable?
const colors = ['red', 'green', 'blue'];
const lastColor = colors.splice(colors.length - 1, 1)[0]; // removes and stores the last element
console.log("Updated colors:", colors);