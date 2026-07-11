function myPromiseAny(promises){
    return new Promise((resolve,reject)=>{
        let cnt = 0;
        let status = [];
        for(let i = 0; i<promises.length;i++){
            Promise.resolve(promises[i]).then(resolve).catch((err)=>{
                cnt++;
                status[i] = err;
                if(cnt == promises.length) reject(new AggregateError(status, "All promises were rejected"));
            });
        }
    })
}

const p1 = Promise.reject(10);
const p2 = Promise.reject(20);
myPromiseAny([p1,p2]).then((success)=>console.log(success)).catch((err)=>console.log(err));