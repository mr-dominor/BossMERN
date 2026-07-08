
Function.prototype.myApply = function(obj,args){
    obj.temp = this;
    const ans = obj.temp(args);
    delete obj.temp;
    return ans;
}


function greet([city,age]){
    console.log(this.name,city,age);
}

const p = {name:"Mubashshir"};

greet.myApply(p,["Lucknow",25]);