//Sync in js

//Synchronous


// console.log("code1");
// console.log("code2");
// console.log("code3");
// console.log("code4");


//Asynchronus


// console.log("code1");
// console.log("code2");
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000);   //2s= 2000ms
// console.log("code3");
// console.log("code4");


// Callback function


// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b, sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2,sum);


// Callback Hell


// function getData(DataID, getNextData){
//     setTimeout(() => {
//         console.log("data",DataID);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// }); 


// Promises


// let Promises = new Promise((resolve, reject)=>{
//     console.log("I am a promises");
//     resolve(1);
//    // reject("rejected")
// });

// function getData(DataID, getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data",DataID);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 3000);
//     });
// };
// getData(1)


//   .then and .catch


// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//        // resolve("success");
//        reject("rejected")
//     });
// };
// let promise=getPromise();
// promise.then((result)=>{
//     console.log("promise fulfilled",result);
// });
// promise.catch((result)=>{
//     console.log("Rejected",result);
// });


// function asyncfunc(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// };
// console.log("fetching data1...");
// let p1=asyncfunc();
// p1.then((result)=>{
//     console.log(result);
// });


//   Promises Chain


// function asyncfunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// };
// function asyncfunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// };
// console.log("fetching data1...");
// asyncfunc1().then((result)=>{
//     console.log("fetching data2...");
//     asyncfunc2().then((result)=>{});
// });


//      Async-Await


// async function hello() {
//     console.log("hello")
// }
// hello();


// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000);
//     });
// };
// async function getweatherData(){
//     await api(); //1st
//     await api(); //2nd
// };
// getweatherData()


// function getData(dataID){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data",dataID);
//             resolve("success");
//         }, 2000);
//     });
// };
// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
// }
// getAllData()

//    Type Conversion

// let n = "123";
// console.log(Number(n));   // 123
// console.log(String(123)); // "123"
// console.log(Boolean(1));  // true

//    Type Coercion

// console.log("5" + 2);   // "52"  (string)
// console.log("5" - 2);   // 3     (number)
// console.log(true + 1);  // 2

//   push

// let a=[1,2];
// a.push(3);
// console.log(a);   // [1,2,3]

//    pop

// let a=[1,2,3];
// a.pop();
// console.log(a);   // [1,2]

//   toString

// let a=[1,2,3];
// console.log(a.toString());   // "1,2,3"

//    slice 

// let a=[10,20,30,40];
// console.log(a.slice(1,3));  // [20,30]

//   splice

// let a=[1,2,3,4];
// a.splice(1,2);
// console.log(a); // [1,4]

// let a=[1,2,3,4,5];
// a.splice(0,1,9);
// console.log(a)

//     concat

// let a=[1,2];
// let b=[3,4];
// console.log(a.concat(b));  // [1,2,3,4]
// console.log(a+b);

//   unshift

// let a=[2,3];
// a.unshift(1);
// console.log(a);   // [1,2,3]

//    shift

// let a=[1,2,3];
// a.shift();
// console.log(a);   // [2,3]

//   object

// let user={
//     name:"Shubh",
//     age:20
// };
// console.log(user.name);

//   Prototype

// let obj={
//     name:"Shubh"
// };
// console.log(obj.toString());            //toString to decler nhi tha vo firbhi chal gay kyu ki vo prototype me tha


// let animal={
//     eats:true
// };
// let dog={
//     bark:true
// };
// dog.__proto__ = animal;
// console.log(dog.eats);          // output


// let a={x:1};
// let b={y:2};
// let c={z:3};
// b.__proto__=a;
// c.__proto__=b;
// console.log(c.x);            // 1

// let arr=[1,2,3];
// arr.push(4);            

// Lexical Scope

// function outer(){           
//     let a=10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();


//  Hoisting

// console.log(a);   //  undefined
// var a = 5;

// test();
// function test(){
//     console.log("hi");
// }

//   let / const 

// console.log(a);          //error but hoisting
// let a = 5;

// Temporal Dead Zone (TDZ)

// console.log(a);          //error but hoisting 
// let a = 5;               //memory me he but usable nhi


// Call Stack


// function one(){              //LIFO last in first out
//     console.log("one"); 
// }
// function two(){
//     one();
// }
// two();

// console.log("1");                // 1 2 4 3
// function test(){
//     console.log("2");
// }
// setTimeout(()=>{
//     console.log("3");
// },0);
// test();
// console.log("4");


// console.log("A");                               // A D C B
// setTimeout(()=>console.log("B"),0);
// Promise.resolve().then(()=>console.log("C"));
// console.log("D");


// console.log(1);
// setTimeout(()=>console.log(2));
// Promise.resolve().then(()=>console.log(3));    //output 1 6 3 4 2 5
// Promise.resolve().then(()=>{
//     console.log(4);
//     setTimeout(()=>console.log(5));
// });
// console.log(6);




//   try 

// try {
//     risky code
// }

//    catch

// try{
//     console.log(a);
// }catch(e){
//     console.log("error handled");
// }

// catch(e){
//     console.log(e.message);
// }

//    finally 

// try{
//     console.log("ok");
// }
// catch{}
// finally{
//     console.log("always");
// }

//   throw

// throw "wrong";

// throw new Error("wrong");

// let age=15;
// if(age<18){
//     throw new Error("not allowed");
// }


// Nested try-catch

// try{
//     try{
//         console.log(a);
//     }
//     catch{
//         console.log("inner");
//     }
// }
// catch{
//     console.log("outer");
// }

//     try-catch sync

// try{                                  
//     setTimeout(()=>{              //error
//         console.log(a);
//     },1000);
// }
// catch{}

// setTimeout(()=>{
//     try{                           //run
//         console.log(a);
//     }catch{}
// })


// try{
//     if(password.length<6){
//     throw new Error("weak password");
//     }
// }
// catch(e){
//     alert(e.message);
// }


// try → risky code
// catch → error handle
// finally → always run
// throw → error create



//   some()

// let ages=[12,12,18,27];         // koy bhi 1 value mach to // true
// console.log(ages);
// let b=ages.some(adult);
// console.log(b);
// function adult(age){
//     return age>=18;
// }

// let nums=[1,2,3,4];
// let r=nums.some(big);
// function big(n){
//     return n>3
// }
// console.log(r);

//    every  

// let ages=[192,102,18,27];                  // sari value mach honi chahi ye aek bhi nhi mili to false 
// console.log(ages);                         // sari mili to true
// let b=ages.every(adult);
// console.log(b);
// function adult(age){
//     return age>=18;
// }

// let nums=[1,22,3,4];
// let r=nums.every(big);
// function big(n){
//     return n>3
// }
// console.log(r);