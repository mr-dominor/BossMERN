
Function.prototype.myCall = function(obj,...args){
    obj.temp = this;
    const ans = obj.temp(...args);
    delete obj.temp;
    return ans;
}

function myNew(fn,...args){
    const obj = {};
    obj.__proto__ = fn.prototype;
    const res = fn.myCall(obj,...args);

    return ((res != null) && (typeof res === "object" || typeof res === "function"))?res:obj;
}

function Person(n){
    this.name = n;
    console.log(this.name);
}

const p = myNew(Person,"Mubashshir");
console.log(p);