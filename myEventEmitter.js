class myEventEmitter{
    constructor(){
        this.map = new Map()
    }
    on(event,listener){
        let listeners = this.map.get(event);
        if(listeners === undefined){
            listeners = [];
            this.map.set(event,listeners);
        }
        listeners.push(listener);
    }

    emit(event,args){
       let  listeners = this.map.get(event);
        if(listeners === undefined) return;
        for(const l of listeners){
            l(...args);
        }
    }

    off(event,listener){
        let listeners = this.map.get(event);
        if(listeners === undefined) return;
        this.map.set(event,listeners.filter((f)=>f !==listener));
    }

    allListeners(event){
        let listeners = this.map.get(event);
        if(listeners === undefined) return;
        console.log(listeners)
    }

    once(event,listener){
        const wrapper=(args)=>{
            listener(...args)
            this.off(event,listener)
        }
        this.on(event,wrapper)
    }
}

const emitter = new myEventEmitter();

function logUser(args){
    console.log("Hello",...args);
}

function greetUser(args){
    console.log("welcome",...args);
}

function logOutUser(args){
    console.log("Bye",...args);
}

emitter.on("login",logUser);
emitter.on("login",greetUser);
emitter.on("logout",logOutUser);

emitter.emit("login","Mubashshir");
emitter.emit("logout","Mubashshir");
emitter.allListeners("login");
emitter.off("login",greetUser);
emitter.allListeners("login");