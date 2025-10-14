//****************************************PRACTICE*********************************************** */
// const register =()=>{
//     waitForSomeTime(4000);
//     console.log("Registered Successfully");
// }

// const waitForSomeTime =(time)=>{
//     const start = Date.now();
//     while (Date.now()- start <time){
//         //do nothing, just wait
//     };
// }

// // const registerWithSetTimeout =()=>{
// //     setTimeout(()=>{
// //         console.log("Registered Successfully");
// //     },4000);
// // }
// console.log("script start");
// register();
// // resisterWithSetTimeout();
// console.log("script end");

// function h(){
//     document.writeln("hello")
// }

//______________________________________________________________________________________________________

//***********For of Loop (for Arrays)*********************/
// const fruits = ["Apple", "Banana", "Mango"];

// for (const fruit of fruits) {
//     console.log("Fruit: " + fruit);
// }

//******************Using break in a Loop****************/
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         console.log("Breaking at 5");
//         break;
//     }
//     console.log(i);
// }


//***************Using continue in a Loop*******************/
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log("Number (skip 3): " + i);
// }

//******************Using forEach() with Arrays**********/
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//     console.log("forEach number: " + number);
// });

