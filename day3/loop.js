// FOR IN
//is used to iterate over the enumerable properties of an object and executes a block of code for each property.
//Variable: This variable represents the name of the property being iterated over in each iteration.
//Object: This is the object whose enumerable properties will be iterated over.

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}
// FOR EACH
//  It allows you to iterate over the elements of an array and execute a provided function once for each element. 
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
    console.log('Element at index ' + index + ' is ' + number);
});

// NESTED OBJECT
//To access properties within nested objects, you use dot notation or square brackets for each level of nesting.
const object={
    citizens:{
        men: 10,
        women:5
    },
 houses:{
    finished:2
 }

}
console.log(object.citizens.women);
console.log(object. citizens);
// NESTED ARRAY
//To access elements within nested arrays, you use multiple square brackets to access each level of the array hierarchy.
 const array =[
    [1,2], [3,5],[6,7],8,9
 ];
 console.log( array[4]);
 console.log(array[2][1]);

// question
function sumArray(array) {
    for (let i = 0; i < array.length; i++) {
       console.log(array.length);
    }
}
let arr= [1,2,4];
sumArray(arr);
   