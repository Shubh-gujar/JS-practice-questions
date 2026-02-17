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