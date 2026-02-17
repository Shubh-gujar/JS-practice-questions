// Create an empty array
// let arr=[];


// Create array of strings
// let arr=["shubh","juned"];


// Print first element of array
// let arr=[1,3,4,2];
// console.log(arr[0]);


// Print last element of array
// let arr=[1,2,3,4];
// console.log(arr[3])


// Update second element of array
// let arr=[1,2,3,4];
// arr[1]=5;
// console.log(arr)


// Count total elements in array
// let arr=[1,2,3,4];
// let count=0;
// for(let i=0; i<arr.length; i++){
//     count++;
// }
// console.log(count)


// Print all elements using loop
// let arr=[12,13,14,15];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }


// Find average of array elements
// let arr=[1,2,3,4];
// let sum=0;
// let count=0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
//     count++
// }
// console.log(sum/count)


// Count even numbers in array
// let arr=[1,2,3,4,5,6];
// let count=0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//         count++
//     }
// }
// console.log(count)


// Count odd numbers in array
// let arr=[1,2,3,4,5,6];
// let count=0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2!==0){
//         count++
//     }
// }
// console.log(count)



// Check if array contains a value                    /////////////
// let arr=[1,2,3,4];
// let value=5;
// let found=false;
// for (let i=0; i<arr.length; i++){
//     if(arr[i]===value){
//         found=true;
//         break;
//     }
// }
// console.log(found); 


// Copy one array into another
// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];
// for(let i=0; i<arr1.length; i++){
//     arr2[i]=arr1[i];
// }
// console.log(arr2)


// Reverse array using loop
// let arr=[2,3,4,5];
// let reverse=[]
// for(let i=arr.length-1; i>=0; i--){
//     reverse.push(arr[i]);
// }
// console.log(reverse);


// Create an array with 5 numbers
// let arr=[1,2,3,4,5];
// console.log(arr)


// Create an array with mixed data types
// let arr=[1,2,"shubh"];
// console.log(arr)


// Print the third element of an array
// let arr=[1,2,3,4];
// console.log(arr[2])


// Print the second last element of an array
// let arr=[1,2,3,4,5];
// console.log(arr[arr.length-2])


// Change the first element of an array
// let arr=[1,2,3,4,5];
// arr.splice(0,1,5)
// console.log(arr)


// Change the last element of an array
// let arr=[1,2,3,4,5];
// arr.splice(-1,1,1);
// console.log(arr)


// Find index of a given element manually (using loop)  /////////////////
// let arr=[11,12,13,14];
// let num=13;
// let index=-1
// for(i=0; i<arr.length; i++){
//     if(arr[i]===num){
//         index=i
//         break;
//     }
// }
// console.log(index)


// Count how many elements are greater than 10
// let arr=[1,2,22,6,32,23];
// let count=0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>10){
//         count++
//     }
// }
// console.log(count)


// Count how many elements are less than 0
// let arr=[1,-2,-22,-6,-32,23];
// let count=0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         count++
//     }
// }
// console.log(count)


// Print only positive numbers from array
// let arr=[1,-2,22,-6,-32,23];
// let positive=[]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){
//         positive.push(arr[i]);
//     }
// }
// console.log(positive)


// Print only negative numbers from array
// let arr=[1,2,3,-4,-5,-6];
// let negative=[];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         negative.push(arr[i])
//     }
// }
// console.log(negative)


// Find sum of elements at even indexes
// let arr=[1,2,3,4,5,6];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     if(i%2===0){
//         sum+=arr[i];
//     }
// }
// console.log(sum);


// Find sum of elements at odd indexes
// let arr=[1,2,3,4,5,6];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     if(i%2!==0){
//         sum+=arr[i];
//     }
// }
// console.log(sum);


// Print array elements in reverse order
// let arr=[1,2,3,4,5];
// let reverse=[];
// for(let i=arr.length-1; i>=0; i--){
//     reverse.push(arr[i]);
// }
// console.log(reverse);


// Check if array is empty
// let arr=[];
// if(arr.length===0){
//     console.log("empty");
// }else{
//     console.log("not empty")
// }


// Compare two arrays element by element             //////////////////
// let arr1=[1,2,3];
// let arr2=[1,2,3];
// let compare=true;
// for(let i=0; i<arr1.length; i++){
//     if(arr1[i]!==arr2[i]){
//         compare=false;
//         break;
//     }
// }
// console.log(compare)

//       OR

// let arr1=[1,2,3,4,6];
// let arr2=[2,3,4,6];
// let compare=true;
// if(arr1.length!==arr2.length){
//     compare=false;
// }else{
//     for(let i=0; i<arr1.length; i++){
//         if(arr1[i]!==arr2[i]){
//             compare=false;
//             break;
//         }
//     }
// }
// console.log(compare)


// Find difference between array length and given number
// let arr=[1,2,3,4];
// let num=5;
// let difference=num-arr.length;
// console.log(difference)



// Print duplicate elements in array                      //////////////
// let arr=[1,3,2,2,4,4,2,4];
// let duplicate=[];
// for(let i=0; i<arr.length; i++){
//     if(arr.indexOf(arr[i]) !== i && !duplicate.includes(arr[i])){
//         duplicate.push(arr[i])
//     }
// }
// console.log(duplicate)


// Remove an element at a specific index (using loop)
// let arr=[1,2,3,4,2];
// let index=1;
// let Remove=[];
// for(let i=0; i<arr.length; i++){
//     if(i!==index){
//         Remove.push(arr[i]);
//     }
// }
// console.log(Remove);


// Insert an element at a specific index        ////////
// let arr=[1,2,3,4];
// let index=1;
// let value=5;
// let insert=[];
// for(let i=0; i<arr.length; i++){
//     if(i===index){
//         insert.push(value)
//     }
//     insert.push(arr[i])
// }
// console.log(insert)


// Shift all elements one position to right
// let arr=[1,2,3,4];
// arr.length = arr.length + 1;
// for(let i=arr.length-1; i>=0; i--){
//     arr[i] = arr[i - 1];
// }
// arr[0]=0;
// console.log(arr)


// Shift all elements one position to left
// let arr=[1,2,3,4];
// arr.length = arr.length + 1;
// for(let i=0; i<arr.length; i++){
//     arr[i] = arr[i + 1];
// }
// arr[arr.length-1]=0;
// console.log(arr)


// Find maximum element using loop
// let arr=[1,2,3,5,6,3];
// let max=arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max)


// Find minimum element using loop
// let arr=[1,2,3,5,6,3];
// let max=arr[0];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<max){
//         max=arr[i]
//     }
// }
// console.log(max)


// Count frequency of a given element



// Replace all negative numbers with 0
// let arr=[1,2,-3,-4];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         arr[i]=0;
//     }
// }
// console.log(arr)


// Check if all elements are numbers
// let arr=[1,2,3];
// let check=true;
// for(let i=0; i<arr.length; i++){
//     if(typeof(arr[i])!=="number"){
//         check=false;
//         break;
//     }
// }
// console.log(check);


// Find sum of first and last element
// let arr=[1,2,3,4];
// let sum=


// Swap first and last elements



// Create a copy of array without using built-in methods



// Remove all negative numbers from array
// let arr=[-1,-2,-3,4,5,6];
// let Remove=[];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){
//         Remove.push(arr[i]);
//     }
// }
// console.log(Remove);

// Remove all zeros from array
// let arr=[-1,-2,-3,4,0,5,6];
// let Remove=[];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]!==0){
//         Remove.push(arr[i]);
//     }
// }
// console.log(Remove);


// Replace all even numbers with 0
// let arr=[1,2,3,4,5,6];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2===0)
//         arr[i]=0
// }
// console.log(arr)

// Replace all odd numbers with -1
// let arr=[1,2,3,4,5,6];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2!==0){
//         arr[i]=-1;
//     }
// }
// console.log(arr)

// Create new array with squares of elements
// let arr=[1,2,3,4,5,6];
// let newarr=[];
// for(let i=0; i<arr.length; i++){
//     newarr.push(arr[i]**2)
// }
// console.log(newarr)

// Create new array with cubes of elements
// let arr=[1,2,3,4,5,6];
// let newarr=[];
// for(let i=0; i<arr.length; i++){
//     newarr.push(arr[i]**3)
// }
// console.log(newarr)



// Double each element of array
// let arr=[1,2,3,4,5,6];
// let newarr=[];
// for(let i=0; i<arr.length; i++){
//     newarr.push(arr[i]*2)
// }
// console.log(newarr)


// Keep only numbers greater than 50
// let arr=[1,2,3,53,23,67,87];
// let greater=[];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>50){
//         greater.push(arr[i])
//     }
// }
// console.log(greater);


// Keep only numbers divisible by 3
// let arr=[1,2,3,53,23,67,87];
// let greater=[];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%3===0){
//         greater.push(arr[i])
//     }
// }
// console.log(greater);


// Reverse array without using built-in methods
// let arr=[1,2,3,4,5,6];
// let reverse=[];
// for(let i=arr.length-1; i>=0; i--){
//     reverse.push(arr[i])
// }
// console.log(reverse)


// Rotate array left by 1 position
// let arr=[1,2,3,4,5];
// let temp=arr[0];
// for(let i=0; i<arr.length; i++){
//     arr[i]=arr[i+1];
// }
// arr[arr.length-1]=temp
// console.log(arr)


// Rotate array right by 1 position
// let arr=[1,2,3,4,5];
// let temp=arr[arr.length-1];
// for(let i=arr.length-1; i>=0; i--){
//     arr[i]=arr[i-1];
// }
// arr[0]=temp;
// console.log(arr)


// Rotate array by K positions
// Move all zeros to end (maintain order)
// Move all zeros to start
// Separate even and odd numbers into two arrays
// Find second largest element
// Find second smallest element
// Find all duplicate elements
// Remove duplicates without using Set




// Transpose a 3x3 matrix
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// let newarr=[];
// for(let i=0; i<arr[0].length; i++){
//     newarr[i]=[];
//     for( j=0; j<arr.length; j++){
//         newarr[i][j]=arr[j][i];
//     }
// }
// console.log(newarr)


// Transpose a 3x2 matrix
// let arr=[
//     [1,2,3],
//     [4,5,6]
// ];
// let result=[];
// for(let i=0; i<arr[0].length; i++){
//     result[i]=[];
//     for(let j=0; j<arr.length; j++){
//         result[i][j]=arr[j][i];
//     }
// }
// console.log(result)


// Transpose matrix without creating new array
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// for(let i=0; i<arr[0].length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         temp=arr[i][j],
//         arr[i][j]=arr[j][i],
//         arr[j][i]=temp
//     }
// }
// console.log(arr);


// Check if matrix is symmetric
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let symmetric=true;
// for(let i=0; i<arr[0].length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i][j]!==arr[j][i]){
//             symmetric=false;
//             break;
//         }
//     }
// }
// console.log(symmetric);


// Convert 1D array into 2D matrix (given rows & columns)


// Print all rows separately
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }


// Print all columns separately
// let arr1=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// for(let i=0; i<arr1[0].length; i++){
//     col=[];
//     for(let j=0; j<arr.length; j++){
//         col.push(arr1[j][i]);
//     }
//     console.log(col)
// }


// Find sum of each row
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     let sum=0;
//     for(let j=0; j<arr.length; j++){
//         sum+=arr[i][j];
//     }
//     console.log(sum);
// }

// Find sum of each column
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     let sum=0;
//     for(let j=0; j<arr.length; j++){
//         sum+=arr[j][i];
//     }
//     console.log(sum);
// }

// Find maximum in each row
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     let max=arr[i][0]
//     for(let j=0; j<arr.length; j++){
//         if(arr[i][j]>max){
//             max=arr[i][j];
//         }
//     }
//     console.log(max);
// }


// Find minimum in each column
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     let max=arr[i][0]
//     for(let j=0; j<arr.length; j++){
//         if(arr[i][j]<max){
//             max=arr[i][j];
//         }
//     }
//     console.log(max);
// }


// Swap first and last row
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// temp=arr[0],
// arr[0]=arr[arr.length-1],
// arr[arr.length-1]=temp
// console.log(arr)


// Swap first and last column
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     let temp=arr[i][0]
//     arr[i][0]=arr[i][arr[i].length-1]
//     arr[i][arr[i].length-1]=temp
// }
// console.log(arr);


// Reverse each row
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     let reverse=[]
//     for(let j=arr[i].length-1; j>=0; j--){
//         reverse.push(arr[i][j])
//     }
//     console.log(reverse)
// }


// Reverse each column
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(let i=0; i<arr.length; i++){
//     let reverse=[]
//     for(let j=arr[i].length-1; j>=0; j--){
//         reverse.push(arr[j][i])
//     }
//     console.log(reverse)
// }


// Convert 2D array into 1D array
// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let result=[];
// for(let i=0; i<arr.length; i++){
//     for(j=0; j<arr[i].length; j++){
//         result.push(arr[i][j])
//     }
// }
// console.log(result)


// Convert 1D array into 2D (size given)
// let arr=[1,2,3,4,5,6,7,8,9];
// row=3;
// col=3;
// let result=[]
// let index=0;
// for(let i=0; i<row; i++){
//     let row=[]
//     for(let j=0; j<col; j++){
//         row.push(arr[index])
//         index++
//     }
//     result.push(row);
// }
// console.log(result)


// Flatten matrix without built-in



// Create new matrix with doubled values



// Replace all even numbers with 0
// let arr=[1,2,3,4,5,6];
// for(let i=0;i<arr.length;i++){
//     if(arr[i] % 2 === 0){
//         arr[i]=0;
//     }
// }
// console.log(arr);
