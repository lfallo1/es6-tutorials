//Iterators

function iterators() {
    let array = [1, 2, 3];
    console.log(array[Symbol.iterator]);

    let it = array[Symbol.iterator]();
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    let person = {
        name: 'lance',
        hobbies: ['sports', 'tv'],
        [Symbol.iterator]: function () {
            let i = 0;
            let hobbies = this.hobbies;
            return {
                next: function () {
                    let value = hobbies[i];
                    i++;
                    return {
                        done: i > hobbies.length,
                        value: value
                    }
                }
            }
        }
    };

    for(let hobby of person){
        console.log(hobby);
    }

}

//Generators
function *genID() {
    for(let i = 0; i < Number.MAX_SAFE_INTEGER; i++){
        yield i;
    }
}

function generatorsV2() {

    const isPromise = obj => Boolean(obj) && typeof obj.then === 'function';

    const next = (iter, callback, prev = undefined) => {
        const item = iter.next(prev);
        const value = item.value;

        if (item.done) return callback(prev);

        if (isPromise(value)) {
            value.then(val => {
                setImmediate(() => next(iter, callback, val));
            });
        } else {
            setImmediate(() => next(iter, callback, value));
        }
    };

    const gensync = (fn) =>
        (...args) => new Promise(resolve => {
            next(fn(...args), val => resolve(val));
        });

    const fetchSomething = () => new Promise((resolve) => {
        setTimeout(() => resolve('future value'), 500);
    });

    const asyncFunc = gensync(function *() {
        const result = yield fetchSomething(); // returns promise

        // waits for promise and uses promise result
        yield result + ' 2';
    });

    asyncFunc('param1', 'param2', 'param3')
        .then(val => console.log(val));
}

let id = genID();
let person1 = {id: id.next().value, name: 'lance'};
let person2 = {id: id.next().value, name: 'bob'};

console.log(person1)
console.log(person2)