
function sum(a){
    let s = a;
    function inner(b){
        if(b === undefined) return s;
        s += b;
        return inner;
    }
    return inner;
}

console.log(sum(10)(20)(30)());