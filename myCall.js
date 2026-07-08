
Function.prototype.myCall = function(obj,...args){
    obj.temp = this;
    const ans = obj.temp(...args);
    delete obj.temp;
    return ans;
}


function greet(city){
    console.log(this.name,city);
}

const p = {name:"Mubashshir"};

greet.myCall(p,"Lucknow");