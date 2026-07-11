function myPromiseAny(promises){
    return new Promise((resolve,reject)=>{
        let status = [];
        for(let i = 0; i<promises.length;i++){
            Promise.resolve(promises[i]).then(resolve).catch((reject));
        }
    })
}

const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(10);
    },1000)
})
const p2 = Promise.resolve(20);
myPromiseAny([p1,p2]).then((success)=>console.log(success)).catch((err)=>console.log(err));