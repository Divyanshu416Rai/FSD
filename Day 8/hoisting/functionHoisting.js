f1();
function f1(){
    console.log("from the function from 'function keyword")
}
f1();

//non-hoisting
const f2 = function() {
    console.log("from the function using function expression");
};

f2();