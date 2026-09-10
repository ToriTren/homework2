// Задание 1.
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }
    return n * m;
}

console.log(paperwork(5, 5));
console.log(paperwork(-5, 5));


// Задание 2.
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input === null || input === undefined || input.length === 0) {
        return [];
    }
    
    let count = 0;
    let sum = 0;
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) count++;
        else if (input[i] < 0) sum += input[i];
    }
    
    return [count, sum];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// Задание 3.
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += s;
    }
    return result;
}

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello")); 

// Задание 4.
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
    return x.reduce((acc, curr) => acc * curr, 1);
}

console.log(grow([1, 2, 3, 4]));

// Задание 5.
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

function greet() {
    return "hello world!";
}

console.log(greet);

// Задание 6.
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOrOdd(2)); 
console.log(evenOrOdd(7)); 

// Задание 7
// Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Bob"));

// Задание 8
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const bmiValue = weight / (height ** 2);
    
    if (bmiValue <= 18.5) {
        return "Underweight";
    } else if (bmiValue <= 25.0) {
        return "Normal";
    } else if (bmiValue <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log(bmi(50, 1.80)); 
console.log(bmi(70, 1.80));
console.log(bmi(90, 1.80));
console.log(bmi(110, 1.80));

// Задание 9

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons) {
    return bullets >= dragons * 2;
}

console.log(hero(10, 5)); 
console.log(hero(7, 4)); 

// Задание 10

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
    return (flower1 % 2) !== (flower2 % 2);
}

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
