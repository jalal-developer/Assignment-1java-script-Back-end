// Question-1:**************************************************************************************************************************************
let string ="123";
let number = Number(string) +7;

console.log(number);

// Question-2:**************************************************************************************************************************************
let value = 0;
if(!value){  
    console.log("Invalid")
}

// Question-3:**************************************************************************************************************************************
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Question-4:**************************************************************************************************************************************
let numbers = [1, 2, 3, 4, 5]; 
let evenNumbers = numbers.filter(function(num) { 
    return num % 2 === 0;
});

console.log(evenNumbers);

// Question-5:**************************************************************************************************************************************
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// Question-6:**************************************************************************************************************************************
let dayNumber = 2;
let dayName; 

switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log(dayName);

// Question-7:**************************************************************************************************************************************
let stringsArray = ["a", "ab", "abc"];

let lengthsArray = stringsArray.map(function(str) {
    return str.length;
});

console.log(lengthsArray);

// Question-8:**************************************************************************************************************************************
function checkDivisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    }
    return "Not divisible by both";
}

console.log(checkDivisibility(15));

// Question-9:**************************************************************************************************************************************
const squareNumber = (num) => {
    return num * num;
};

console.log(squareNumber(5)); 

// Question-10:**************************************************************************************************************************************
function formatPerson(person) {
    const { name, age } = person;
    return `${name} is ${age} years old`; 
}

const person = { name: 'John', age: 25 };
console.log(formatPerson(person));

// Question-11:**************************************************************************************************************************************
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumAll(1, 2, 3, 4, 5)); 

// Question-12:**************************************************************************************************************************************
function delaySuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

delaySuccess().then((message) => {
    console.log(message);
});

// Question-13:**************************************************************************************************************************************
function findLargest(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

console.log(findLargest([1, 3, 7, 2, 4]));

// Question-14:**************************************************************************************************************************************
function getKeys(obj) {
    return Object.keys(obj);
}

console.log(getKeys({ name: "John", age: 30 }));

// Question-15:**************************************************************************************************************************************
function splitWords(str) {
    return str.split(" ");
}

console.log(splitWords("The quick brown fox"));


//B. Part 2: Essay Questions (2.5 Grade):********************######################################################******************

// Question-1:**************************************************************************************************************************************
/*
- forEach: It is a built-in array method. It takes a callback function and executes it for each element. You cannot use 'break' or 'continue' inside it.
- for...of: It is a standard loop statement that works with any iterable object (like Arrays, Strings, NodeLists). You can use 'break', 'continue', or 'return' inside it.

When to use:
- Use 'forEach' when you want a clean, functional syntax to loop through an entire array without stopping.
- Use 'for...of' when you need full control over the loop (like breaking early) or when iterating over non-array data like strings.
*/

// Question-2:**************************************************************************************************************************************
/*
- Hoisting: JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution. Variables declared with 'var' are hoisted and initialized as 'undefined'. Variables declared with 'let' and 'const' are hoisted but NOT initialized.

- Temporal Dead Zone (TDZ): The period between entering a scope and the actual line where a 'let' or 'const' variable is declared. Accessing the variable in this zone throws a ReferenceError.

Examples:
console.log(a); // Output: undefined (due to hoisting)
var a = 5;

console.log(b); // Throws ReferenceError (inside TDZ)
let b = 10;
*/

// Question-3:**************************************************************************************************************************************
/*
- == (Loose Equality / Abstract Comparison): It compares two values for equality after converting them to a common type (Type Coercion). It checks only the values, not the types.
- === (Strict Equality): It compares both the values and their data types without any conversion. If the types are different, it immediately returns false.

Examples:
5 == "5"  // true  (string "5" is converted to number 5)
5 === "5" // false (different types: number vs string)
*/

// Question-4:**************************************************************************************************************************************
/*
- How try-catch works: It consists of a 'try' block that contains the code that might throw an error, and a 'catch' block that executes if an error occurs, preventing the script from crashing.

- Importance in Async operations: Asynchronous errors (like failed API requests) do not happen in the main execution thread. By using try-catch with 'async/await', you can catch errors from promises synchronously, handle network failures smoothly, and stop the execution flow safely.
*/

// Question-5:**************************************************************************************************************************************
/*
- Type Conversion (Explicit): When you manually/explicitly convert a value from one type to another using built-in functions like Number(), String(), or Boolean().
- Type Coercion (Implicit): When JavaScript automatically converts a value from one type to another behind the scenes during operations.

Examples:
// Type Conversion (Explicit)
let str = "42";
let num = Number(str); // Manually converted to number

// Type Coercion (Implicit)
let result = "5" + 2; // "52" (number 2 is implicitly converted to a string)
let result2 = "5" - 2; // 3 (string "5" is implicitly converted to a number)
*/
