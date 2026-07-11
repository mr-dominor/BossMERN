function myPromiseAllSettled(promises){
    return new Promise((resolve,reject)=>{
        let cnt = 0;
        let success = [];
        for(let i = 0; i< promises.length; i++){
            Promise.resolve(promises[i]).then(()=>{
                cnt++;
                success[i] = "success";

                if(cnt == promises.length) resolve(success);
            }).catch(()=>{
                cnt++;
                success[i] = "failed";

                if(cnt == promises.length) reject(success);
            })
        }
    })
}

const p1 = Promise.resolve(10);
const p2 = Promise.reject(20);
myPromiseAllSettled([p1,p2]).then((success)=>console.log(success)).catch((err)=>console.log(err));