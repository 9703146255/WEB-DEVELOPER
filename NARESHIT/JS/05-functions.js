
// 1. Basic Function Declaration
function square(number)
{
    return number * number;
}

console.log(square(10));

// 2. Function Expression
const calculateArea = function(length, width) {
    return length * width;
};

console.log(calculateArea(10, 5)); // Output: 50

// 3. Arrow Function
// A concise arrow function that greets a user.
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Alice")); // Output: Hello, Alice!


// 4. Immediately Invoked Function Expression (IIFE)
// An IIFE that logs a message immediately upon definition.
(function() {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!

// 5. Higher-Order Function

const numbers = [1, 2, 3, 4, 5];

const isEven = (num) => num % 2 === 0;

const filterArray = (arr, filterFunc) => arr.filter(filterFunc);

console.log(filterArray(numbers, isEven)); // Output: [2, 4]

// 6. Recursive Function

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


// 7. Generator Function
// A generator function that produces a sequence of numbers.

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

const sequence = generateSequence();
console.log(sequence.next().value); // Output: 1
console.log(sequence.next().value); // Output: 2
console.log(sequence.next().value); // Output: 3

// 8. Using this in Methods
// An object with a method that uses this to access the object's properties.

const person = {
    name: "Alice",
    age: 25,
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log(person.introduce()); // Output: Hello, my name is Alice and I am 25 years old.

// 9. Constructor Function
// A constructor function to create multiple instances of an object.
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.getInfo = function() {
        return `${this.make} ${this.model}`;
    };
}

const car1 = new Car("Toyota", "Corolla");
console.log(car1.getInfo()); // Output: Toyota Corolla



// 10. Function with Default Parameters
// A function with default parameters to calculate the power of a number.
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

console.log(power(5));       // Output: 25 (default exponent 2)
console.log(power(5, 3));    // Output: 125 (exponent 3)
