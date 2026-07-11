
function myCreate(proto){
    function F(){}
    F.prototype = proto;
    return new F();
}

const x={
    name:"Mubashshir"
}

const b = myCreate(x);
console.log(Object.getPrototypeOf(b))