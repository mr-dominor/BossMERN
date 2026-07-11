
function myMemoized(fn){
    let map = [];
    return (args) => {
        if(map[args] !== undefined) return map[args];
        const res = fn(args);
        map[args] = res;
        return res;
    }
}

function square(a){
    return a*a;
}

const x = myMemoized(square);
console.log(x(5))
console.log(x(3))