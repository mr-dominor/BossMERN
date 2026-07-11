function myPromiseAll(promises){
    return new Promise((resolve,reject)=>{
        let cnt = 0;
        let success = [];
        for(let i = 0; i< promises.length; i++){
            Promise.resolve(promises[i]).then((value)=>{
                cnt++;
                success[i] = value;

                if(cnt == promises.length) resolve(success);
            }).catch(reject)
        }
    })
}

const p1 = Promise.resolve(10);
const p2 = Promise.reject(20);
myPromiseAll([p1,p2]).then((success)=>console.log(success)).catch((err)=>console.log(err));