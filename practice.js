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


//   promises                     ////////////////////

//  Q.1

// function delayedMessage(message){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(message);
//         },2000)
//     })
// }
// delayedMessage("hello")
// .then((result)=>{
//     console.log(result);
// });

//   Q.2

// function evenodd(num){
//     return new Promise((resolve,reject)=>{
//         if(num%2===0){
//             resolve("Even number");
//         }else{
//             reject("Odd number");
//         }
//     })
// }

// evenodd(4)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//         or        ////////////// using async await

// async function a(){
//     try{
//         let res = await evenodd(22)
//         console.log(res);
//     }catch(err){
//         console.log(err)
//     }
// }
// a();

//  Q.3

// Create a Promise that:
// Starts with number 10
// Multiplies it by 3
// Subtracts 5
// Prints the final result

// function a(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num)
//     })
// }

// // a(10)
// // .then((res)=>{
// //     return res
// // })
// // .then((res)=>{
// //     return res*3;
// // })
// // .then((res)=>{
// //     return res-5;
// // })
// // .then((res)=>{
// //     console.log(res);
// // })

// //   or  /////// using async await

// async function b(){
//     let c = await a(10);
//     let d = c*3;
//     let e = d-5;
//     console.log(e); 
// }
// b()

//    Q.4

// Create three Promises:
// Task1 → resolves after 1 second with "Task 1 done"
// Task2 → resolves after 1 second with "Task 2 done"
// Task3 → resolves after 1 second with "Task 3 done"
// Run them one after another using async/await.

// let Task1= new Promise((resolve,reject)=>{               // withaout function
//     setTimeout(()=>{
//         resolve("task 1 done");
//     },1000);
// });

// let Task2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("task 2 done");
//     },1000);
// });

// let Task3= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("task 3 done");
//     },1000);
// });

// async function task(){
//     let a = await Task1;
//     console.log(a);
//     let b = await Task2;
//     console.log(b);
//     let c = await Task3;
//     console.log(c);
// }
// task();

// function Task1(){                                       // with function
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("task 1 done");
//         },1000);
//     });
// }
// function Task2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("task 2 done");
//         },1000);
//     });
// }
// function Task3(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("task 3 done");
//         },1000);
//     });
// }
// async function task(){
//     let a = await Task1();
//     console.log(a);
//     let b = await Task2();
//     console.log(b);
//     let c = await Task3();
//     console.log(c);
// }
// task();

//   Q.5   //////////

// Ek function banao:
// 2 second baad number ko double kare
// Fir 2 second baad usme 5 add kare
// Final result print kare
// Async/await me likho


// function a(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num*2);
//         },2000)
//     })
// }
// function s(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num+5);
//         },2000)
//     })
// }
// async function b(){
//     let c = await a(4)
//     console.log(c);
//     let d = await s(c)
//     console.log(d);
// }
// b()

//    q.6        ///////

// Agar number negative ho
// promise reject() kare
// Agar positive ho
// normal flow chale


// function a(num){
//     return new Promise((resolve,reject)=>{
//         if(num>0){
//             setTimeout(()=>{
//                 resolve(num*2);
//             },2000)
//         }else{
//             reject("namber is negative");
//         }
//     })
// }
// function s(num){
//     return new Promise((resolve,reject)=>{
//         if(num>0){
//             setTimeout(()=>{
//                 resolve(num+5);
//             },2000)
//         }else{
//             reject("number is negative");
//         }
//     })
// }
// async function b(){
//     try{
//         let c = await a(4)
//         console.log(c);
//         let d = await s(c)
//         console.log(d);
//     }catch(err){
//         console.log(err)
//     }
// }
// b()

//   Q.7    /////////

// Ek function banao:
// 1 second baad "Hello" return kare
// Async function me usko await karke print karo

// function b(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("hello");
//         }, 1000);
//     })
// }
// async function a(){
//     let s=await b()
//     console.log (s)
// }
// a()


/////////             Destructuring            ///////////////

//   Q.8

// let arr=[1,2,3,4];

// without destrcturing  (old way) //
// let a=arr[0];
// let b=arr[1];
// let c=arr[2];
// console.log(a,b,c)

// with destructuring    (new way) //
// let [a,b,c]=arr
// console.log(a,b,c)

//    Q.9

// let arr=[1,2,3,4,5,6];
// // muje 4 ko dayrek variyabl dena he uske aage ko nhi

// //                    old way
// let a=arr[3];
// console.log(a);

// //                    new way
// let {3:c}=arr
// console.log(c);

// //                    another way
// let [,,,d]=arr
// console.log(d)

//    Default value    //

//  Q.10

// let arr = [5];
// let [a,b=10] = arr;
// console.log(a);
// console.log(b);

//         object        ///////

//   Q.11

// without destructuring  //

// let obj={
//     name:"shubh",
//     age:21,
//     address:{
//         city:"vadodata",
//         state:"india"
//     }
// }
// let a=obj.name
// let b=obj.address.city
// console.log(a)
// console.log(b)

// with destructuring    //// //

// let obj={
//     name:"shubh",
//     age:21,
//     address:{
//         city:"vadodata",
//         state:"india"
//     }
// }

// let {name , age}=obj
// console.log(name,age)


//     Q.12

// chenge tha key name using Destrcturing   // //

// let { name:username,age:userage}=obj
// console.log(username,userage)
// let{address:{city:usercity}}=obj
// console.log(usercity)

// Default value object          ////// //

// let {mark=99}=obj
// console.log(mark)


// Error Handling  // // // // // //

//   Q.13

// try{
//     let a=3;
//     let b=a+c;
//     console.log(b);
// }catch(error){
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

//    Q.14

// try{
//     let a=null;
//     let s=a.toUpperCase();
//     console.log(s)
// }catch(err){
//     console.log(err.name)
//     console.log(err.message)
// }

//  throw error      //////

//   Q.15

// function a(num){
//     if(num<18){
//         throw new Error("you are under age");
//     }
//     return "welcome"
// }
// try{
//     console.log(a(23));
// }catch(err){
//     console.log(err.message)
// }

//    Q.16

// function a(num){
//     if(typeof num!=="number"){
//         throw new Error("input must be a number");
//     }
//     if(num<=0){
//         throw new Error("number must greater then 0")
//     }
//     return "valid number"
// }
// try{
//     console.log(a(10))
// }catch(err){
//     console.log(err.message)
// }


// // // //           Object             // // // // // // //

// object literal //

// let obj={
//     name:"shubh",
//     age:21,
//     greet:function (){
//         console.log("hello js");
//     },
//     arr:["hii","hello","javascript"],
//     ispass:true
// }
// console.log(obj);
// console.log(obj.name);        // only name print
// console.log(obj['name']);     // unother way to print name
// obj.name="shubh gujar";       // modifay name
// obj['mark']=44;               // add new key value   //  or  //
// obj.course="BCA";             // add new key value
// console.log(obj.greet());     // print function
// delete obj.ispass;            // delete key value
// console.log(obj)

//  object using new keyword  //

// let detail=new Object();
// detail.name="shubh";
// detail.age=21;
// detail.course="BCA";
// detail.skills=["HTML","CSS","JAVASCRIPT"];
// detail.greet=function(){
//     console.log("hello javascript");
// }
// console.log(detail);


//  object using Constructor method   //

// function Course(
//     name,
//     age,
//     skills,
//     ispass
// ){
//     this.name=name;
//     this.age=age;
//     this.skills=skills;
//     this.ispass=ispass;
// }
// let javascriptcourse=new Course(
//     "shubh",
//     21,
//     ["html","css","js"],
//     true
// )
// console.log(javascriptcourse)
// console.log(javascriptcourse.name="shubh gujar")
// javascriptcourse.mark=32
// console.log(javascriptcourse)


//  object methods   //  //  //  //

// let obj={
//     name:"shubh",
//     age:21,
//     greet:function (){
//         console.log("hello js");
//     },
//     arr:["hii","hello","javascript"],
//     ispass:true
// }
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// Object.freeze(obj);                   // using freeze befoar you can not add, modefy, delete; 

// obj.name="shubh gujar";
// obj,mark=55;
// delete obj.mark;
// console.log(obj);

// Object.seal(obj);                        // using seal befoar you can only modify data but can not add and delete;

// obj.name="shubh gujar";
// obj,mark=55;
// delete obj.ispass;
// console.log(obj);

// for(let key in obj){                     // using for in loop print only key names all
//     console.log(key);
// }

// for(let key in obj){                      //using for in loop (objectName[variablename]) print value all 
//     console.log(obj[key]);
// }




//  Qestions ans for Object  // //

// Q.1

// Ek object banao student naam se jisme:
// name
// age
// course
// Phir console me student.name print karo.
// let student={
//     name:"shubh",
//     age:21,
//     course:"bca"
// }
// console.log(student.name)

//  Q.2

// Ek object car banao:
// brand
// model
// Usme baad me ek nayi property add karo:
// color = "Black"
// Phir pura object print karo.

// let car={
//     brand:"xyz",
//     modal:2020
// }
// car.color="black"
// console.log(car)

//  Q.3

// Ek object user banao jisme:
// name
// age
// isLoggedIn (boolean)
// Condition lagao:
// Agar isLoggedIn true ho to "Welcome" print karo
// warna "Please Login"

// let student={
//     name:"shubh",
//     age:21,
//     isLoggedIn: true,
// }
// if(student.isLoggedIn){
//         console.log("welcome");
// }else{
//     console.log("Please Login")
// }

//  Q.4 

// Ek object product banao:
// name
// price
// Agar price 1000 se zyada ho to
// throw error karo: "Price too high"

// try{
//     let product={
//         name:"gopal",
//         price:1002
//     }
//     if(product.price>1000){
//         throw new Error("Price too high")
//     }
// }catch(err){
//     console.log(err)
// }

// //  Q.5 

// // Ek object person banao jisme:
// // name
// // age
// // greet() method ho
// // Method return kare:
// // "Hello my name is ___"

// let person ={
//     name:"shubh",
//     age:21,
//     greet:function(){
//         return "Hello my name is " + this.name;
//     }
// }
// console.log(person.greet())

//   Q.6 

// Nested object banao:
// let user = {
//    name: "Shubh",
//    address: {
//       city: "Vadodara",
//       state: "Gujarat"
//    }
// }
// Console me Gujarat print karo.

// let user = {
//     name: "Shubh",
//     address: {
//         city: "Vadodara",
//         state: "Gujarat"
//     }
// }
// console.log(user.address.state)   //or unadher way
// let {address:{state}}=user
// console.log(state);


//  nested object

//  Q.1

// let user ={
//     name:"shubh",
//     age:21,
//     address:{
//         city:"vadodara",
//         state:"Gujarat"
//     }
// }
// console.log(user.address.state)

// //  Q.2

// let user ={
//     name:"shubh",
//     age:21,
//     address:{
//         city:"vadodara",
//         state:"Gujarat"
//     }
// }
// user.address.city="Surat";
// console.log(user)

// //  Q.3  

// // college ke andar ek nayi property add karo:
// // year: 2026
// // phir pura object print karo.

// let student = {
//     name: "Shubh",
//     college: {
//         name: "ABC College"
//     }
// };
// student.college.year=2026;
// console.log(student);

// //  Q.4

// let user = {
//     name:"shubh",
//     age:21,
//     department:{
//         dev:{
//             employees:25
//         }
//     }
// }
// let {department:{dev:{employees}}}=user
// console.log(employees)
// console.log(user.department.dev.employees)

// //  Q.5  

// // Agar price 50000 se zyada ho
// // to "Expensive" print karo
// // warna "Affordable".

// let user={
//     name:"shubh",
//     age:21,
//     prodact:{
//         price:55000
//     }
// }
// if(user.prodact.price>50000){
//     console.log("Expensive");
// }else{
//     console.log("Affordable");
// }

// //  Q.6 

// // Address ke andar ke sab key-value pairs loop se print karo.

// let user={
//     name:"shubh",
//     age:21,
//     address:{
//         city:"vadodara",
//         state:"gujarat",
//         pincode:2322423
//     }
// }
// for(let pairs in user.address){
//     console.log(pairs,":",user.address[pairs])
// }


// //  Q.7  

// //  Destructuring se science print karo.

// let student={
//     name:"shubh",
//     mark:{
//         math:45,
//         science:34,
//     }
// }
// let { mark: {science}}=student
// console.log(science)


// //  Q.8  

// // Safe way me user.address.city access karo
// // error nahi aana chahiye.

// let user = {
//     name: "Shubh"
// };
// console.log(user.address?.city);                 //  ?. used


// let user={
//     name:"shubh",
//     address:{
//         city:"vadodara",
//         day:{
            
//         }
//     }
// }
// console.log(user.address?.day?.sdd)               //  ?. using

// //  Q.9  

// // Ek function likho jo city return kare.

// let user = {
//     name: "Shubh",
//     address: {
//         city: "Vadodara"
//     },
//     greet:function(){
//         return this.address.city
//     }
// };
// console.log(user.greet())

// //  Q.10  

// // Riya ki salary print karo.

// let company = {
//     name: "Tech Ltd",
//     departments: {
//         dev: {
//             employees: [
//                 { name: "Aman", salary: 40000 },
//                 { name: "Riya", salary: 60000 }
//             ]
//         }
//     }
// };
// console.log(company.departments.dev.employees[1].salary )

//  Optional Chaining (?.)  //  // // //

//  Q.1

// Agar user.address exist nahi karta ho,
// to safe way me city print karo (error nahi aana chahiye).

// let user={
//     name:"shubh",
//     age:21
// }
// console.log(user?.address?.city)

// //  Q.2

// // Agar student.marks ho bhi sakta hai ya nahi,
// // to safe way me math print karo.

// let student={
//     name:"shubh",
//     marks:{
//         math:44
//     }
// }
// console.log(student.marks?.math)

// //  Q3

// // Ek object hai:
// // company
// // departments
// // hr
// // manager
// // Safe way me manager ka naam access karo.

// let xyz={
//     company:{
//         department:{
//             hr:{
//                 manager:{
//                     age:33
//                 }
//             }
//         }
//     }
// }
// console.log(xyz.company?.department?.hr?.manager?.name)

// //  Q.4

// // Agar user.profile.contact.email ho bhi sakta hai ya nahi,
// // to safe access karo bina error ke.

// let user={
//     profile:{
//         contact:{
//             email:"dsdssdcs@ss"
//         }
//     }
// }
// console.log(user?.profile?.contact?.email)

// //  Q.5

// // Ek object me:
// // employees (array ho bhi sakta hai ya nahi)
// // Safe way me:
// // first employee ka name access karo

// let user={
//     employee:[
//         {name:"shubh",age:21},
//         {name:"gpt",age:5}
//     ]
// }
// console.log(user?.employee?.[0]?.name);

// //  Q.6

// // Agar employees array me second employee na ho,
// // to uski salary safe way me print karo.

// let user={
//     employee:[
//         {name:"shubh",salary:3224}
//     ]
// }
// console.log(user?.employee?.[1]?.salary)

// //  Q.7

// // Agar order.customer.address.pincode kabhi missing ho sakta hai,
// // to safe way me pincode access karo.

// let order={
//     customer:{
//         address:{
//             pincode:2322
//         }
//     }
// }
// console.log(order?.customer?.address?.pincode)

// //  Q8

// // Agar user hi null ho sakta hai,
// // to safe way me user.name print karo.

// let user=null
// console.log(user?.name)

//  Q.9 

// let obj={
//     name:"shubh",
//     address:{
//         city:"vadodara",
//         state:"gujarat"
//     }
// }
// for(let a in obj.address){
//     console.log(a,":",obj.address[a]);
// }

// //  Q.1

// // Ek object hai:
// // Object.entries() use karke pura result print karo.
// let user = {
//     name: "Shubh",
//     age: 21,
//     city: "Vadodara"
// }
// let a=Object.entries(user);
// console.log(a)

// // Q.2

// // Upar wale object me loop laga ke output aisa print karo:
// // name : Shubh
// // age : 21
// // city : Vadodara

// let user = {
//     name: "Shubh",
//     age: 21,
//     city: "Vadodara"
// }
// // for(let a in user){
// //     console.log(a,":",user[a]);
// // }
// for(let [a,b] of Object.entries(user)){
//     console.log(a,":",b)
// }

// //  Q.3

// // Ek object hai:
// // Object.entries() use karke sirf subjects print karo jinke marks 70 se zyada hain.

// let marks = {
//     math: 80,
//     science: 70,
//     english: 60
// }
// for(let [sub,mark] of Object.entries(marks)){
//     if(mark>70){
//         console.log(sub,":",mark);
//     }
// }

// //  Q4

// // Ek object hai:
// // Object.entries() use karke total price calculate karo.
// // Expected output:
// // Total = 260

// let prices = {
//     apple: 100,
//     banana: 40,
//     mango: 120
// }
// let Total=0
// for(let [a,price] of Object.entries(prices)){
//     Total+=price
// }
// console.log(Total)

//  Q.5

// Ek object hai:
// Object.entries() use karke is object ko wapas same object me convert karo.
// (Hint: entries → array milta hai → use reduce)

// let user = {
//     name: "Shubh",
//     age: 21
// }

//  SPREAD OPERATOR(...)

//  Q.1

// Merge two objects obj1 = {a:1} and obj2 = {b:2} using spread operator. Print the merged object
// let obj1={
//     a:1
// }
// let obj2={
//     a:2,
//     b:6
// }
// let marge={...obj2,...obj1}
// console.log(marge)

//  Q.2

// Create a new array c by merging a and b and also add 0 at start and 5 at end.
// Expected c: [0,1,2,3,4,5]

// let a=[1,2];
// let b=[3,4];
// let c=[0,...a,...b,5]
// console.log(c)

//  Q.3

// Merge obj1 and obj2 into obj3 so that age is 22 and print obj3.

// let obj1={
//     name:"shubh",
//     age:21
// }
// let obj2={
//     name:"shubh",
//     age:22,
//     city:"vadodara"
// }
// let obj3={...obj1,...obj2}
// console.log(obj3)

//  Q.4  
// Call sum using spread operator with nums array.

// function sum(a,b,c){
//     return a+b+c;
// }
// let num=[10,20,30];
// console.log(sum(...num))


// // Q.5 

// // Clone this array and add 4 at the end without modifying the original:

// let a=[1,2,3];
// let b=[...a,4];
// console.log(b);

// Q.6  

// Use spread operator to create a new array with unique values only.

// let arr = [1,2,2,3,4,4];
// let a=[...new Set(arr)]
// console.log(a)

//  Arrow function 

// let a=((a,b)=>{
//     return a+b;
// })
// let c= a(2,3)
// console.log(c)

// const demo = () => {
//     return { city: "Vadodara" };
// };
// console.log(demo());

// const demo = () => {
//   city: "Vadodara";
// };

// console.log(demo());

//  map() 

//  Q.1
// // map use karke har element ka square nikalo.

// let arr = [2,4,6];
// let square= arr.map((num)=>{
//     return num**2
// })
// console.log(square)/

//  Q.2

// Har string ke end me "!" add karo.

// let arr=["hi","hello","javascript"];
// let a=arr.map((s)=>{
//     return s+"!"
// })
// console.log(a)

//  Q.3  

// Sab names ko uppercase me convert karo.

// let names = ["shubh","aman","raj"];
// let upername=names.map((name)=>{
//     return name.toUpperCase()
// })
// console.log(upername);

//  Q.4

// Array ko objects me convert karo.

// let users = ["Shubh","Aman"];
// let s=users.map((obj,index)=>{
//     return {id:index+1 ,name:obj}
// })
// console.log(s)

//  Q.5

// let fruits = ["Apple","Mango","Banana"];
// let a=fruits.map((obj,index)=>{
//     return {
//         id:index+1,fruit:obj
//     }
// })
// console.log(a)

//  Q.6

// Har student ke marks me 5 add karo

// let student=[
//     {name:"shubh",mark:20},
//     {name:"gpt",mark:100}
// ];
// let s=student.map((a)=>{
//     return {
//         name:a.name,
//         mark:a.mark+5
//     }
// })
// console.log(s)

//  Q.7

// Sirf name ka array banao.

// let student=[
//     {name:"shubh",age:21},
//     {name:"aman",age:22}
// ]
// let s= student.map((a)=>{
//     return a.name
// })
// console.log(s)

//  Q.8

// // Price me 10% tax add karo.

// let products = [
//     {name:"Laptop", price:50000},
//     {name:"Mobile", price:20000}
// ];
// let a=products.map((s)=>{
//     return {
//         name:s.name,
//         price:s.price+(s.price*10/100)
//     }
// })
// console.log(a)

//  Q.9  

// // Har number ko string me convert karo
// let num=[1,2,3];
// let s=num.map((a)=>{
//     return String(a)
// })
// console.log(s)

//  Q.10

//Index ke sath value combine karo.

// let a=["a","b","c"];
// let s=a.map((c,index)=>{
//     return index+"-"+c
// })
// console.log(s)

//  this keyword  ////

// 'use strict'
// function greet(){
//     console.log(this);
// }
// greet()


// console.log(this)


// let user={
//     name:"shubh",
//     age:21,
//     greet:function(){
//         console.log(`hi ${this.name}`);      // agr me this.name ki jage user.name likhta to user ka output sahi aata but ye grret function ko user2 me bhi dala he to user 2 me user  ka output aata agr me user.name dalu to agr this.name dalu to user2 ka sahi output aata 
//     }
// }
// user.greet()

// let user2 ={
//     name:"mohit",
//     age:22
// }
// user2.greet=user.greet
// user2.greet()


// agr 100 alg alg users ho or usme ek hi function chala na ho to bar bar function likh ke memory bad ti he to uski jage ek alg function likha ke use sab users me chala ao

// function greet(){
//     console.log(`hii ${this.name}`)
// }
// function incrementAge(name,age){
//     this.name=name;
//     console.log(this.name);
//     this.age+=age;
//     console.log(this.age);
// }
// let user1={
//     name:"shubh",
//     age:21
// }
// // greet.call(user1);
// incrementAge.call(user1,"rohan",10);                 // using  call   usivakhat call kar do
// incrementAge.apply(user1,["jetha",20]);              // using  apply  argument array me do or call kar do
// let abc=incrementAge.bind(user1,"samyul",20);        // using  bind   abhi call mat karo use use variabel stoar karo bad me jab jarurat hogi tab variabel se call kar dena
// abc()

// let user2={
//     name:"mohit",
//     age:22
// }
// // greet.call(user2)
// incrementAge.call(user2,"shahidh",10);              // using  call usivakhat call kar do
// incrementAge.apply(user2,["juned",4]);              // using  apply argument array me do or call kar do
// let xyz=incrementAge.bind(user1,"vishal",20);       // using  bind abhi call mat karo use use variabel stoar karo bad me jab jarurat hogi tab variabel se call kar dena
// xyz()


// let abc={
//     second:0,
//     start:function(){
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second)
//         },1000)
//     }
// };
// abc.start();

//  Arrow function me This keyword

// let s=(()=>{
//     console.log(this)                               // Arrow function me this keyword kud ke scope ke bahar dekha ta he
// })
// s()

// finally without try catch 

// try{
//     let a="shubh";
//     console.log(a);
//     console.log(c);
// }
// catch(err){
//     console.log(err.message);
// }finally{                                           // finally is without try catch is not varking soving error
//     console.log("finally always run");              // finally is clinar black he  
// }

//  find   

// let arr=[1,2,3,4,5,6];
// let a=arr.find((num)=>{                       //  find return  first maching element
//     return num>4;
// })
// console.log(4)

// let user=[
//     {name:"shubh",age:21},
//     {name:"aman",age:22},
//     {name:"abdul",age:20}
// ];
// let s=user.find((userage)=>{                 
//     return userage.age>20;
// })
// console.log(s)

// Closure   ////  //  //  // 

// Closure tab banta hai jab ek function apne outer function ke variables ko access karta hai, even jab outer function execute ho chuka ho.
// Inner function ko outer function ka variables yaad rehta hai

// function outer(){
//     let name = "Shubh";
//     function inner(){
//         console.log(name);
//     }
//     inner();
// }
// outer();


// Outer function already finish ho chuka he fir bhi count variable memory me saved rehta he

// function outer(){
//     let count = 0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// let a=outer()
// a()
// a()


// function x(){
//     let a=2;
//     function y(){
//         console.log(a);
//     }
//     return y
// }
// let z=x();
// console.log(z);
// z()


//  Debounce  //// //// ////

//  Debounce ek technique hai jisme function tabhi run hota hai jab user kuch time tak koi action na kare.
                                          
// let counter=0;                        // jast like serchbar jisme ham kuch search karte he kuch likhate he or thodasa ruk jate he to niche jo options aa jate he search hoke uske jesa kam karta he
// let getData=()=>{
//     console.log("fetching Data...",counter++);
// }
// let doSome = function(fn,d){
//     let timer;
//     return function(){
//         let context=this,
//         args=arguments;
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             getData.apply(context,arguments);
//         },d);
//     }
// }
// let betterFunction= doSome(getData,300);

//  callback          // // //

// function greet(name){
//     console.log("Hello "+name);
// }
// function processUser(callback){
//     let name="Shubh";
//     callback(name);
// }
// processUser(greet);

// setTimeout(() => {
//    console.log("hello shubh") 
// }, 2000);


//  Event Loop  // // //
 
//  Event Loop JavaScript ka ek mechanism hai jo decide karta hai ki kaunsa code kab run hoga
//  Event Loop check karta hai Call Stack aur Callback Queue ko aur jo ready ho usko execute kar deta hai
//  Event Loop Callback Queue or Microtask Queue mese sabse jyada empoten Microtask ko deta he
//  Event Loop continuously check karta hai  Call Stack empty hai ya nahi Agar empty hai to Callback Queue ka function stack me bhej deta he 

// Ternary // // //

// Ternary operator ek short way hai if  else likhne ka
// agar condition true hai  value1
// agar condition false hai  value2

// let age = 18;
// let result = age >= 18 ? "You can vote" : "You cannot vote";
// console.log(result);

// let number=10;
// let result=number%2===0 ? "Even" : "Odd";
// console.log(result);

//  setTimeout   ////  //  ////

//  setTimeout ek function hai jo kisi function ko ek certain time delay ke baad run karta hai

// console.log("Start");
// setTimeout(function(){
//     console.log("Hello Shubh");
// },2000);                               // 2000ms = 2s
// console.log("End");

// setTimeout(()=>{
//     console.log("Hello Shubh");
// },3000);                                   // 3000  = 3s


// let timer = setTimeout(()=>{
//     console.log("Hello");
// },3000);
// clearTimeout(timer);                   //  settimeout ko cancel kar diya


// setInterval ek function hai jo kisi function ko bar-bar ek fixed time interval par run karta hai

// setInterval(()=>{
//     console.log("Hello");                      //  Hello har 2 second me run hota rahega  hello hello aata hi rahe ga
// },2000);


// Shallow copy

// Shallow copy me object ka sirf top level copy hota hai, lekin andar ke objects same reference share karte hai
// Shallow copy outer object ko copy karta hai lekin andar ke objects same reh jate hai.

// let obj1={
//     name:"Shubh",
//     address:{
//         city:"Vadodara"
//     }
// };
// let obj2={...obj1};           // Shallow copy
// obj2.name="Rahul";
// obj2.address.city ="Surat";
// console.log(obj1);
// console.log(obj2);

// Deep copy

// Deep copy me pura object aur uske andar ke objects bhi alag memory me copy hote hai.
// Original object aur copy completely independent hote hai
// Creates a completely independent copy of an object including all nested objects.

// let obj1={
//     name: "Shubh",
//     address:{
//         city: "Vadodara"
//     }
// };
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.address.city = "Surat";
// console.log(obj1);
// console.log(obj2);

//  Promise.all()

//  Promise.all() ek method hai jo multiple promises ko ek sath run karta hai aur jab sab promises resolve ho jate hai tab result return karta hai.
//  Sab complete hone ke baad array me result milta hai
//  Agar ek bhi promise fail ho gaya → Promise.all reject ho jata hai


// let p1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Task 1 done");
//     },2000);
// });
// let p2 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Task 2 done");
//     },1000);
// });
// Promise.all([p1,p2])
// .then((data)=>{
//     console.log(data);
// });

// Nullish Coalescing (??)  //  //  //  //

// Nullish Coalescing (??) JavaScript me ek operator hai jo default value dene ke liye use hota he lekin sirf tab jab value null ya undefined ho

// Nullish Coalescing (??) ek logical operator hai jo left side ki value return karta hai,
// lekin agar left side null ya undefined ho, tab right side ki value return karta hai.

// let age=21;
// let result= age??23;
// console.log(result)

// let age=null;
// let result= age??23;
// console.log(result)

// let age;
// let result= age??22;
// console.log(result)

// function userName(name){
//     return result = name ?? "mohit"
// }
// console.log(userName("shubh"))
// console.log(userName())
// console.log(userName(null))

// let user = {
//     name: "Shubh",
//     age: null
// };
// let userAge = user.age ?? 18;
// console.log(userAge);

// reduce //// //

// let number=[1,2,3,4,5];
// let sum=number.reduce((acc,num)=>{
//     return acc+num;
// },0);
// console.log(sum)