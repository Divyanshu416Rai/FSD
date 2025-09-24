const register =()=>{
    waitForSomeTime(4000);
    console.log("Registered Successfully");
}

const waitForSomeTime =(time)=>{
    const start = Date.now();
    while (Date.now()- start <time){
        //do nothing, just wait
    };
}

const registerWithSetTimeout =()=>{
    setTimeout(()=>{
        console.log("Registered Successfully");
    },4000);
}
console.log("script start");
register();
resisterWithSetTimeout();
console.log("script end");