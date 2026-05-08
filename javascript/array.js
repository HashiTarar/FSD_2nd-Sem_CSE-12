let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);

typeof
console.log(typeof(person));

let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

let mixedArray = [1, "Hello", true, null, undefined, {name: "Alice"}, [1,2,3]];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);

let newarray = [1,2,3,4,5];
let squaredArray = newarray.map(num => num*num);
console.log(squaredArray);

let nearray = [1, 2, 3, 4, 5];
let cubesArray = nearray.map(num => num * num * num);
console.log(cubesArray); // [1,8,27,64,125]

//normal function with no parameters
function greet() {
    console.log("Hello World");
}
greet();

//nrml function declaration 
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); // 6

//function expression
let multipl = function (a, b) {
    return a * b;
};
console.log(multipl(2, 4)); // 8

//arrow function.  ---- it create with the help of fun expresion ---- isme hmm varible store kr rhe h
let add = (a, b) => a + b;
console.log(add(2, 3)); // 5
let multiple = (a, b) => a * b;
console.log(multiple(2, 4)); // 8

//forEach on array
//forEach executes a provided function once for each array element
let number = [1, 2, 3, 4, 5];
number.forEach(function (num) {
    console.log(num);
});

let square = x => x * x;
console.log(square(5)); // 25

const greetuser = (name) => {
    
}


let newArray = [1,2,3,4,5];
let squaredarray = newArray.map(num => num * num);
console.log(squaredarray);
let addedArray = newArray.map(num => num + 5);
console.log(addedArray);


let numArray = [1,2,3,4,5];
let filteredEvenNumbers = numArray.filter(num => num % 2 === 0);
console.log(filteredEvenNumbers);

let sum = [1,2,3,4,5];
let total = sum.reduce((accumulator,currentValue) => accumulator + currentValue,0);
console.log(total);

