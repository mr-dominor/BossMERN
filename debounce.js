
Function.prototype.myApply = function(obj,args){
    obj.temp = this;
    const res = obj.temp(args);
    delete obj.temp;
    return res;
}

function debounce(fn,delay){
    let timer = 0;
    return function(args){
        clearTimeout(timer);
        timer = setTimeout(()=>{fn.apply(this,args)},delay);
    }
}

const obj = {
    name:"Mubashshir",
    greet(){
        console.log(this.name);
    }
}

obj.greet = debounce(obj.greet,500);
obj.greet();