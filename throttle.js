
function throttle(fn,delay){
    let allowed = true;
    return function(args){
        if(!allowed) return;
        allowed = false;
        fn.apply(this,args);
        setTimeout(()=>{
            allowed = true;
        },delay)
    }
}

const obj = {
    name: "Mubashshir",
    greet() {
        console.log(this.name);
    }
};

obj.greet = throttle(obj.greet, 2000);

obj.greet(); // Mubashshir
obj.greet(); // Ignored
obj.greet(); // Ignored

setTimeout(() => {
    obj.greet(); // Mubashshir (after 2 seconds)
}, 2500);