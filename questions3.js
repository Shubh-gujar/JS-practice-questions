// 1. Reverse a string
// Input: "hello" → Output: "olleh"

// let string="hello";
// let reverse="";
// let result=string.split("").reverse().join("");
// console.log(result);

//                 or  

// for(let i=string.length-1; i>=0; i--){
//     reverse+=string[i];
// }
// console.log(reverse);


// 2. Check palindrome
// "madam" → true

// let string="madam";
// let palindrome="";
// let result=string.split("").reverse().join("");
// if(string===result){
//     console.log("is palindrome");
// }else{
//     console.log("is not palindrome");
// }

//          or          

// for(let i=string.length-1; i>=0; i--){
//     palindrome+=string[i];
// }
// if(string===palindrome){
//     console.log("is palindrome");
// }else{
//     console.log("is not palindrome");
// }


// 3. Find largest number in array
// [3, 7, 2, 9, 5] → 9

// let arr=[3,7,2,9,5];
// let max=arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max)

//          or    
// for(let num of arr){
//     if(num > max){
//         max=num
//     }
// }
// console.log(max)


// 4. Count vowels in string
// "javascript" → 3

// let string="javascript";
// let count=0;
// for(let i=0; i<string.length; i++){
//     if(string[i]==='a' || string[i]==='e' || string[i]==='i' || string[i]==='o' || string[i]==='u'){
//         count++;
//     }
// }
// console.log(count)

// 5. Remove duplicates from array
// [1,2,2,3,4,4] → [1,2,3,4]



// 6. Sum of all numbers in array

// let arr=[1,2,3,4];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum)


// 7. Swap two variables (without third variable)

// let a=10,b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b)

// 8. Capitalize first letter of each word
// "hello world" → "Hello World"

// let string="hello world";
// let result="";
// for(let i=0; i<string.length; i++){
//     if(i===0 || string[i-1]===" "){
//         result+=string[i][0].toUpperCase()
//     }else{
//         result+=string[i]
//     }
// }
// console.log(result)


// 9. Check even or odd

// let num=2;
// if(num%2===0){
//     console.log(num, "is even number");
// }else{
//     console.log(num, "is odd number")
// }


// 10. Find factorial of a number

// let num=5;
// let result=1;
// for(let i=1; i<=num; i++){
//     result*=i
// }
// console.log(result)


// 11. Find second largest number in array

// let arr=[1,2,3,5,6,8,7,11,9,12,11,4];
// let max=-Infinity;
// let max2=-Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max2=max;
//         max=arr[i]        
//     }else if(arr[i] > max2 && arr[i] < max){
//         max2=arr[i];
//     }
// }
// console.log(max2)


// 12. Sort array without using .sort()             //////////////

// let arr=[5,2,8,1,3];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(arr[j] > arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);


// 13. Flatten nested array                               ////////////////
//  [1, [2, [3, 4]], 5] → [1,2,3,4,5]




// 14. Find missing number
//  [1,2,3,5] → 4
// let arr=[1,2,3,5];
// let n=5;
// let total=n*(n+1)/2;
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(total-sum);



// 15. Group array of objects by property 
//  [{age:20},{age:20},{age:30}]



// 16. Debounce function implementation


// 17. Throttle function implementation


// 18. Deep clone an object


// 19. Check if two objects are equal
// let a={
//     name:"shubh",
//     age:20
// };
// let b={
//     name:"shubh",
//     age:20
// };
// let same=true;
// for(let key in a){
//     if(a[key]!==b[key]){
//         same=false;
//     }
// }
// console.log(same);


// 20. Convert array to object 
//  ["a","b"] → {0:"a",1:"b"}
// let arr=["a","b"];
// let obj={};
// for(let i=0;i<arr.length;i++){
//     obj[i]=arr[i];
// }
// console.log(obj);

