console.log('proxy api');

let person = {
    name: 'lance'
}

let handler = {
    get: function(target, name){
        return Reflect.has(target, name) ? target[name] : 'No property exists'
    },
    set: function(target, name, value){
        if(Reflect.has(target, name) && value.trim().length > 1){
            Reflect.set(target,name,value);
        }
        return true;
    }
}

// var proxy = new Proxy(person, handler);
// console.log(proxy.name);
// console.log(proxy.age);
// proxy.name = 'L';
// console.log(proxy.name);
// proxy.name = 'LANCE F.'
// console.log(proxy.name);

//setting proxy as a prototype
// var proxy = new Proxy({}, handler);
let {proxy, revoke} = Proxy.revocable({}, handler); //returns a proxy and a method to be called which can revoke proxy
Reflect.setPrototypeOf(person, proxy);
console.log(person.name);
//revoke();
console.log(person.age);

//wrapping functions
function log(message){
    console.log('Logging: ' + message);
}

let logHandler = {
    apply: function(target, thisArg, args){
        if(args.length == 1){
            return Reflect.apply(target, thisArg, args);
        }
    }
}

var logProxy = new Proxy(log, logHandler);
logProxy('LOGGER MESSAGE', 'SOMETHING ELSE');