
Function.prototype.myBind = function(obj){
    return (...args)=>{
        obj.temp = this;
        const ans = obj.temp(...args);
        delete obj.temp;
        return ans;
    }
}

function greet(city){
    console.log(this.name,city);
}

const p = {name:"Mubashshir"};

const fn = greet.myBind(p);
fn("Lucnkow");