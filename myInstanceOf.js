
function myInstanceOf(obj, fn){
    let proto = obj.prototype;

    while(proto != null){
        if(proto == fn.prototype) return true;
        proto = proto.prototype
    }
    return false;
}

function Animal(){}
function Animala(){}
const Dog = new Animal();

console.log(Dog instanceof Animala)