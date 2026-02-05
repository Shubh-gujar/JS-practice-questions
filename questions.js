// Logic Building (Beginner)
// Print numbers from 1 to 10
// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// Print numbers from 10 to 1
// for(let i=10; i>=1; i--){
//     console.log(i)
// }

// Check if a number is even or odd
// let num=10;
// if(num%2===0){
//     console.log("number is even");
// }else {
//     console.log("number is odd");
// }

// Find the larger of two numbers
// let a=2;
// let b=11;
// if(a>b){
//     console.log("A is larger number");
// }else{
//     console.log("B is larger number")
// }

// Find the largest of three numbers
// let a=25;
// let b=11;
// let c=23;
// if(a>b && a>c){
//     console.log("A is larger number");
// }else if(b>a && b>c){
//     console.log("B is larger number")
// }else{
//     console.log("C is larger number")
// }

// Check if a number is positive, negative, or zero
// let num=0;
// if(num>0){
//     console.log("number is positive")
// }else if(num<0){
//     console.log("number is negative")
// }else{
//     console.log("number is zero")
// }

// Print the first 10 natural numbers
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// Calculate the sum of first N natural numbers
// let N=10;
// let sum=0;
// for(let i=1; i<=N; i++){
//     sum+=i;
// }
// console.log("first natural numbers sum is =",sum)

// Print all even numbers between 1 and 50
// for(let num=1; num<=50; num++){
//     if(num%2===0){
//         console.log(num)
//     }
// }

// Print all odd numbers between 1 and 50
// for(let num=1; num<=50; num++){
//     if(num%2!==0){
//         console.log(num)
//     }
// }

// Check if a year is a leap year
// let year=2026;
// if((year%4===0 && year%100!==0) || year%400===0 ){
//     console.log("year is a leap year")
// }else{
//     console.log("year is not leap year")
// }

// Print multiplication table of a number
// let num=3;
// for(let i=1; i<=10; i++){
//     let table=num*i;
//     console.log(num + "x" + i + "=" + table)
// }

// Reverse a number
// let num=1234;
// let reverse=0;
// while(num>0){
//     let digit=num%10;
//     reverse=reverse*10+digit;
//     num=Math.floor(num/10);
// }
// console.log(reverse)

// Count digits in a number
// let num=4567;
// let count=0;
// while (num>0){
//     count++;
//     num=Math.floor(num/10);
// }
// console.log(count);

// Find the sum of digits of a number
// let num=4567;
// let sum=0;
// while (num>0){
//     let digit=num%10;
//     sum+=digit;
//     num=Math.floor(num/10);
// }
// console.log(sum);


// What is a variable?
//aek aesa container jisme koy data store ho or vo chenge ho sake.
//A variable is used to store and manipulate data in a program.

// Difference between var, let, and const
// var : can be re-declared / update / global scope 
// let : can not re-declared / update /block scope
// const : can not re-declared and update /block scope


// Declare a variable and reassign it
// var name="shubh";
// var name="gujar";


// Create a constant and try to reassign it
// const name="shubh";
// const name="gujar"  // error

// What happens if you use a variable before declaring it?
// console.log(x);
// var x=1   //undefined
// console.log(y);
// let y=2;      //error

// Explain global scope with an example
// A global variable is accessible everywhere in the program. { } ke bahar 

// Explain block scope with an example
// A block variable is accessible in block scope. { } ke ander

// Can let be redeclared in the same scope?
// NO
// let a=22;
// let a=3; // error

// Can var be redeclared?
// Yes
// var a=23;
// var a=34;
// console.log(a)   //output 34

// What is hoisting?


// Predict the output of hoisting examples


// What is temporal dead zone?


// Difference between undefined and not defined


// What are arithmetic operators?
// +	Addition
// -	Subtraction
// *	Multiplication
// /	Division
// %	Modulus (remainder)
// **	Power
// ++	Increment
// --	Decrement

// Difference between == and ===
// == Value compare karta hai, Type conversion karta hai
// === Value + Data type compare, Type conversion nahi karta
// let a=5;
// let b="5";
// let c=a==b;
// let d=a===b;
// console.log(c,d)


// Difference between != and !==
// != Value check karta hai, Type conversion hota hai
// !== Value + Type check, Type conversion nahi hota
// let a=5;
// let b="5";
// let c=a!=b;
// let d=a!==b;
// console.log(c,d)


// Use all arithmetic operators on two numbers
// let a = 4;
// let b = 3;
// console.log(a + b);   
// console.log(a - b);   
// console.log(a * b);   
// console.log(a / b);   
// console.log(a % b);   
// console.log(a ** b);


// Use comparison operators to compare two numbers
// let x = 4;
// let y = 3;
// console.log(x > y);   
// console.log(x < y);   
// console.log(x >= y);  
// console.log(x <= y);  
// console.log(x == y);  
// console.log(x != y);  


// What are logical operators?
// && AND || OR ! NOT

// Predict output of logical AND examples
// let a=7;
// let b=5;
// let c=3;
// console.log(a>b && b>c);
// console.log(a>b && c>a);


// Predict output of logical OR examples
// let a=7;
// let b=5;
// let c=3;
// console.log(a>b || b>c);
// console.log(a<b || c>a);

// Use logical NOT in a condition
// console.log(!(6>3))

// What is operator precedence?
// Operator precedence means which operator is executed first when more than one operator is used in an expression.
// BODMAS → Brackets, Of, Divide, Multiply, Add, Subtract
// let a=1+5*2;     // 1+(5*2) = 11     
// console.log(a); // * has higher precedence than +
// ()
// ++ --
// * / %
// + -
// < > <= >=
// == != ===
// =

// Predict output using multiple operators
// let a = 10 + 20 * 3 / 2 - 3;
// console.log(a);


// Write an if statement
// let age=23;
// if(age>=18){
//     console.log("adult");
// }

// Write if-else statement
// let age=23;
// if(age>=18){
//     console.log("adult");
// }else{
//     console.log("not adult");
// }

// Write if-else-if ladder
// let num=2;
// if(a>0){
//     console.log("positive");
// }else if(a<0){
//     console.log("negative");
// }else{
//     console.log("zero");
// }   


// Check if number is divisible by 5
// let num=25;
// if(num%5===0) {
//     console.log("divisible by 5");
// }else{
//     console.log("not divisible by 5");
// }


// Check if a person is eligible to vote
// let age=18;
// if(age>=18) {
//     console.log("eligible to vote");
// }else{
//     console.log("not eligible");
// }

// Check if a number is multiple of both 3 and 5
// let num=15;
// if(num%3===0 && num%5===0) {
//     console.log("multiple of 3 and 5");
// }else{
//     console.log("not a multiple of both");
// }


// Find grade based on marks
// let mark=78;
// let gread;
// if(mark>=90 && mark<=100){
//     gread="A"
// }else if(mark>=75 && mark<=89){
//     gread="B"
// }else if(mark>=50 && mark<=74){
//     gread="C"
// }else{
//     gread="F"
// }
// console.log(gread)


// Check whether character is vowel or consonant
// let ch='a';
// if (ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u'){
//     console.log("Vowel");
// }else{
//     console.log("Consonant");
// }


// Check if character is alphabet, digit, or special character
// let ch = 'a';
// if((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')){
//     console.log("alphabet");
// }else if(ch>='0' && ch<='9'){
//     console.log("digit");
// }else{
//     console.log("special Character");
// }


// Use ternary operator for simple condition
// let age=17;
// let result=(age>=18) ? "adult" : "minor";
// console.log(result);

// Difference between if-else and ternary


// What is a loop?
// A loop is used to execute a block of code repeatedly as long as a given condition is true. 
// The loop stops when the condition becomes false.
// Loop tab tak chalta hai jab condition true hoti hai
// Condition false hote hi loop stop ho jata hai


// Difference between for and while
// for(let i=1;i<=5;i++) {
//     console.log(i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// Print numbers from 1 to 100 using for loop
// for(let i=1; i<=100; i++){
//     console.log(i)
// }

// Print numbers from 1 to 100 using while loop
// let i=1;
// while(i<=100){
//     console.log(i);
//     i++;
// }


// Print even numbers using loop
// for(i=0; i<=10; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }


// Print odd numbers using loop
// for(i=0; i<=10; i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }


// Print multiplication table using loop
// let num=4;
// for(i=1; i<=10; i++){
//     console.log(num + "x" + i + "=" + num*i)
// }


// Use break in loop
// for(let i=1; i<=10; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i)
// }


// Use continue in loop
// for(let i=1; i<=10; i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i)
// }



// What happens if loop condition never becomes false?
// loop chalta rahe ga program hang ho sakta hai / browser crash ho jaye ga

// What is an array?
// Array ek variable me multiple values store karta hai

// Create an array of numbers
// let arr=[1,2,3,4,5,6];

// Access elements from array
// let arr=[1,2,3,4];
// console.log(arr[0]);
// console.log(arr[2]);

// Change value of array element
// let arr=[1,2,3,4,5];
// arr[2]=6;
// console.log(arr)

// Find length of an array
// let arr=[1,2,3,4,5];
// console.log(arr.length);

// Loop through an array
// let arr=[1,2,3,4,5];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// Find sum of array elements
// let arr=[1,2,3,4,5];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum)

// Find largest element in array
// let arr=[12,23,13,43,23,24];
// let max=arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i] > max){
//     max=arr[i];
//     }
// }
// console.log(max)

// Find smallest element in array
// let arr=[15,23,13,43,23,24];
// let max=arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i] < max){
//     max=arr[i];
//     }
// }
// console.log(max)

// Add element to end of array
// let arr=[1,2,3,4];
// arr.push(5);
// console.log(arr)

// Remove last element of array
// let arr=[1,2,3,4,5];
// arr.pop()
// console.log(arr)

// Add element at start of array
// let arr=[1,2,3,4,5];
// arr.unshift(0)
// console.log(arr)


// Remove element from start of array
// let arr=[1,2,3,4,5];
// arr.shift()
// console.log(arr)


// What is a string?
// String characters ka collection hota hai jo text ko represent karta hai.
// Characters letters, numbers, symbols kuch bhi ho sakte hain
// String hamesha quotes ke andar likhi jaati hai

// Find length of a string
// let str="shubh";
// console.log(str.length)

// Convert string to uppercase
// let str="shubh";
// console.log(str.toUpperCase())


// Convert string to lowercase
// let str="SHUBH";
// console.log(str.toLowerCase())


// Access character at a position
// let str="shubh";
// console.log(str[0]);
// console.log(str.charAt(1));

// Reverse a string
// let str="shubh";
// let reverse="";
// for(let i=str.length-1; i>=0; i--){
//     reverse+=str[i];
// }
// console.log(reverse);

// Check if string contains a character
// let str="JavaScript";
// let ch="S";
// if(str.includes(ch)) {
//     console.log("Character found");
// }else{
//     console.log("Character not found");
// }

// Count vowels in a string
// let str="javascript";
// let count=0;
// for(i=0; i<str.length; i++){
//     let ch=str[i];
//     if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u'){
//         count++;
//     }
// }
// console.log(count);

// Count consonants in a string                                                  /////////////////////////
// let str="javascript";
// let count=0;
// for(i=0; i<str.length; i++){
//     let ch=str[i];
//     if(ch>='a' && ch<='z' && ch!=='a' && ch!=='e' && ch!=='i' && ch!=='o' && ch!=='u'){
//         count++;
//     }
// }
// console.log(count);


// Compare two strings
// let str1="hello";
// let str2="hello";
// console.log(str1===str2);


// Concatenate two strings
// let str1="shubh";
// let str2="gujar";
// console.log(str1+" "+str2)


// Check if number is prime                                  //////////////
// let num=11;
// let count=0;
// for(i=1; i<=num; i++){
//     if(num%i===0){
//         count++;
//     }
// }
// if(count===2){
//     console.log("prime number");
// }else{
//     console.log("not prime number")
// }


// Print all prime numbers between 1 and 100                        ////////////////////////
// for(let num=2; num<=100; num++){
//     let isPrime=true;
//     for(let i=2; i<=num-1; i++){
//         if(num%i===0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(num)
//     }
// }


// Find factorial of a number
// let num=5;
// let factorial=1;
// for(i=1; i<=num; i++){
//     factorial*=i;
// }
// console.log(factorial);


// Check if number is palindrome
// let num=121;
// let str=num.toString();
// let reverse=str.split('').reverse().join('');
// if(str===reverse){
//     console.log("number is palindrom")
// }else{
//     console.log("number is not palindrom")
// }


// Check if string is palindrome
// let str="levela";
// let reverse=str.split('').reverse().join('');
// if(str===reverse){
//     console.log("number is palindrom")
// }else{
//     console.log("number is not palindrom")
// }



// Find Fibonacci series up to N terms                 //////////
// let n=8;
// let a=0, b=1;
// for(i=1; i<=n; i++){
//     console.log(a);
//     let next=a+b;
//     a=b;
//     b=next;
// }


// Find GCD of two numbers
// let a=12;
// let b=18;
// let gcd;
// for(i=1; i<=a && i<=b; i++){
//     if(a%i===0 && b%i===0){
//         gcd=i
//     }
// }
// console.log("gcd",gcd)


// Find LCM of two numbers
// let a=12;
// let b=18;
// let gcd;
// for(i=1; i<=a && i<=b; i++){
//     if(a%i===0 && b%i===0){
//         gcd=i
//     }
// }
// let lcm=(a*b)/gcd;
// console.log("lcm",lcm)


// Swap two numbers without using third variable
// let a=10;
// let b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b)

// Count frequency of digits in a number
// let num = 122333;
// let freq = {};
// while (num > 0) {
//     let digit = num % 10;
//     if (freq[digit]) {
//         freq[digit]++;
//     } else {
//         freq[digit] = 1;
//     }
//     num = Math.floor(num / 10);
// }
// console.log(freq);

// Print number pattern (triangle)
// for(let i=1; i<=5; i++){
//     let star="";
//     for(j=1; j<=i; j++){
//         star+=j;
//     }
//     console.log(star)
// }


// Print star pattern (pyramid)
// for(let i=1; i<=5; i++){
//     let star="";
//     for(j=1; j<=i; j++){
//         star+="*";
//     }
//     console.log(star)
// }


// Find missing number in an array
// let arr = [1, 2, 3, 5];
// let n = 5;
// let formulaSum = (n * (n + 1)) / 2;
// let actualSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
// }
// console.log(formulaSum - actualSum);



// Difference between function scope and block scope
// function scope
// function test() {
//     var x = 10;
//     if (true) {
//         var y = 20;
//     }
//     console.log(x); // 10
//     console.log(y); // 20
// }
// test();

// block scope
// if (true) {
//     let a = 10;
//     const b = 20;
// }
// console.log(a); //error
// console.log(b); //error

// Shadowing of variables
// let x = 10;
// {
//     let x = 20;
//     console.log(x);
// }
// console.log(x);


// Illegal shadowing
// let a = 10;
// {
//     var a = 20;
// }  // error

// var a = 10;
// {
//     let a = 20;
//     console.log(a); //20
// }
// console.log(a); //10

// Scope chain example

// let a = 5;
// function test() {
//     let b = 10;
//     function inner() {
//         console.log(a);
//         console.log(b);
//     }
//     inner();
// }
// test();

// Predict output with nested scopes

// let x = 1;

// function demo() {
//     let x = 2;
//     {
//         let x = 3;
//         console.log(x); //3
//     }
//     console.log(x); //2
// }
// demo();
// console.log(x); //1

// var a = 100;
// {
//     var a = 200;
//     console.log(a); //200
// }
// console.log(a); //200 var scope follow nhi kar ta

// Use const with arrays and objects

// const arr=[1,2,3,4]
// console.log(arr)

// const object={
//     name:"shubh",
//     age:21
// }
// console.log(object);

// Why const array elements can be modified?
// const arr=[1,2];
// arr=[3,4]; //error
// arr[0]=10; //[10,2]

// Use logical operators in expressions

// let age = 20;
// if (age >= 18 && age <= 60) {
//     console.log("Eligible");
// }

// let day = "Sunday";
// if (day === "Sunday" || day === "Holiday") {
//     console.log("No work");
// }

// let a=6, b=5;
// console.log(!(a>b))


// Bitwise operators usage

// AND  	&
// OR       `
// XOR	    ^
// NOT 	    ~
// Left Shift	<<
// Right Shift	>>

// What is Short-Circuiting?

// && → pehla false milte hi stop
// || → pehla true milte hi stop


// Difference between ++i and i++
// let I = 5;
// console.log(++I); //6

// let i = 5;
// console.log(i++); //5
// console.log(i); //6


// Predict output using increment operators
// let x = 5;
// let y = x++ + ++x;
// console.log(y); //12


// Use assignment operators in expressions
// let a = 10;
// a += 5;  
// a -= 3;  
// a *= 2;  
// a /= 4;   
// console.log(a);


// Convert if-else to switch
// let day = 2;
// if(day===1){
//     console.log("Monday");
// }else if(day===2){
//     console.log("tuesday");
// }else{
//     console.log("invalid");
// }

// let day = 2;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     default:
//         console.log("invalid");  
// }

// Use switch case for calculator

// let a=10, b=20;
// let operator = "+";
// switch(operator){
//     case "+":
//         console.log(a+b);
//         break;
//     case "-":
//         console.log(a-b);
//         break;
//     case "*":
//         console.log(a*b);
//         break;
//     case "/":
//         console.log(a/b);
//         break;
//     default:
//         console.log("invalid operator");  
// }


// Nested conditionals examples
// let age = 20;
// if(age>=18){
//     if(age <= 60){
//         console.log("Eligible");
//     }else{
//         console.log("Over age");
//     }
// }else{
//     console.log("Under age");
// }


// Validate input using conditions

// let num=-5;
// if(num>0){
//     console.log("Valid number");
// }else{
//     console.log("Invalid number");
// }

// Check multiple conditions efficiently

// let marks=85;
// if(marks>=35 && marks<=100){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }

// Nested loops example

// for(let i=1; i<=5; i++){
//     let star=""
//     for(let j=1; j<=i; j++){
//         star+="*";
//     }
//     console.log(star)
// }

// Pattern printing using nested loops

// for(let i=1; i<=5; i++){
//     let star=""
//     for(let j=1; j<=i; j++){
//         star+="*";
//     }
//     console.log(star)
// }

// Find duplicates in array using loops
// let arr=[1,2,3,2,4,1];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             console.log(arr[i]);
//             break;
//         }
//     }
// }


// Break outer loop from inner loop
// outerLoop:
// for(let i=1; i<=5; i++){
//     for(let j=1; j<=5; j++){
//         if(i===1 && j===1){
//             break outerLoop;
//         }
//     }
// }
// console.log("Loops stopped");

// Count occurrences using loops

// let arr = [1, 2, 2, 3, 2];
// let count = 0;
// for (let i=0; i<arr.length; i++) {
//     if(arr[i]===2){
//         count++;
//     }
// }
// console.log(count);

// Reverse array using loop

// let arr=[1,2,3,4];
// let rev=[];
// for(let i=arr.length-1; i>=0; i--) {
//     rev.push(arr[i]);
// }
// console.log(rev);

// Find second largest number in array

// let arr = [10, 5, 20, 8];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>largest){
//         secondLargest = largest;
//         largest = arr[i];
//     }else if(arr[i]>secondLargest && arr[i]!==largest){
//         secondLargest = arr[i];
//     }
// }
// console.log(secondLargest);


// Sort an array manually
// let arr = [4, 2, 5, 1, 3];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr);
// Initial: [5, 2, 8, 1]
// Compare 5 & 2 → swap → [2, 5, 8, 1]
// Compare 2 & 1 → swap → [1, 5, 8, 2]
// Compare 5 & 2 → swap → [1, 2, 8, 5]
// Compare 8 & 5 → swap → [1, 2, 5, 8]


// Remove duplicates from array
// let arr=[1,2,3,2,1];
// let unique=[];
// for(let i=0; i<arr.length; i++){
//     if(!unique.includes(arr[i])){
//         unique.push(arr[i]);
//     }
// }
// console.log(unique);

// Merge two arrays

// let a=[1,2,3];
// let b=[4,5,6];
// let marge=[]
// for(i=0; i<a.length; i++){
//     marge.push(a[i]);
// }
// for(i=0; i<b.length; i++){
//     marge.push(b[i]);
// }
// console.log(marge)


// Find intersection of two arrays

// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// let intersection = [];
// for (let i = 0; i < arr1.length; i++) {
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i]===arr2[j] && !intersection.includes(arr1[i])){
//             intersection.push(arr1[i]);
//         }
//     }
// }
// console.log(intersection);

// Find union of two arrays

// let arr1 = [1,2,3];
// let arr2 = [3,4,5];
// let union = [];
// for(let i = 0; i < arr1.length; i++){
//     if(!union.includes(arr1[i])){
//         union.push(arr1[i]);
//     }
// }
// for(let i = 0; i < arr2.length; i++){
//     if(!union.includes(arr2[i])){
//         union.push(arr2[i]);
//     }
// }
// console.log(union);


// Rotate array by K positions

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// for(let i=0; i<k; i++){
//     let last=arr.pop();
//     arr.unshift(last);
// }
// console.log(arr);

// Count frequency of elements

// let arr=[1,2,2,3,1];
// let freq={};
// for(let i=0; i<arr.length; i++){
//     if(freq[arr[i]]){
//     freq[arr[i]]++;
//   }else{
//     freq[arr[i]] = 1;
//     }
// }
// console.log(freq);


// Flatten nested array (1 level)



// Check if array is sorted

// let arr=[1,2,3,4];
// let isSorted = true;
// for(let i=0; i<arr.length-1; i++){
//     if(arr[i]>arr[i+1]){
//     isSorted = false;
//     break;
//     }
// }
// if(isSorted){
//     console.log("Array is sorted");
// }else{
//     console.log("Array is not sorted");
// }