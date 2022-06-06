// arrow functions are like Python's Lambda functions
const sum = (a, b) => a + b;
console.log(sum(1,2));

const students = ['Rohan', 'Noor', 'Alec', 'Naveen'];

//accessing array elements w/o destructuring
/** 
student0 = students[0];
student1 = students[1];
student2 = students[2];
student3 = students[3];
*/
//accesing array elements w/ destructuring
//[student0, student1, student2, student3] = students;

//object student1 with fields name, age, gpa
/** 
const student1 = {
    name: "John Jameson", 
    age:21,
    gpa:4.0
}
*/
//you can also accesssing the key value pair the python way
// const john_name = student1["name"]
/*
const john_name = student1["name"];
const john_age = student_1.age;
const john_gpa = student_1.gpa;
*/
//accesing object elements w/ destructuring
// const {john_name, john_age, john_gpa} = student_1;
//console.log(john_name)

// spread operator
const small_nums = [1, 2, 3, 4, 5]
const nums = [...small_nums, 6, 7, 8, 9, 10]
console.log(nums)

const student1 = {name: "John Jameson", age:21, gpa:4.0}
const student2 = {...student1}
console.log(student2)
const student3 = {...student1, name:'Alec'}
console.log(student3)

/** Two types of Asynchronous Examples
 * Callbacks (old style)
 * Promise (newer style)
 */

/** an example of an async callback is the second parameter of the 
 * addEventListener() method
 * 
 * btn.addEventListener('click', 
 *                     () => {alert('You clicked me!')}
 *                      )
 */

/** an example of a async promise
 * fetch('products.json').then(function(response) {
        return response.json();
    }).then(function(json) {
        let products = json;
        initialize(products);
    }).catch(function(err) {
        console.log('Fetch problem: ' + err.message);
    });
    The two then() calls contain a callback function
    The catch() call runs if their then() callback fail, similar to 
    try catch blocks
 */