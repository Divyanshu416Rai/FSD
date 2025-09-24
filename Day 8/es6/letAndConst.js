let name = "xyz";
const pi = 3.14;

console.log("in the global", name, pi);

function test() {
    console.log("in the function scope", name, pi);
}

test(); 
