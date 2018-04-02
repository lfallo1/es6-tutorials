console.log('reflect api')

class Person{
    constructor(name){
        this._name = name;
    }

    get name(){ return this._name }
}

let obj = {
    _name: 'Harrison'
}

let person = Reflect.construct(Person, ['Lance']);
console.log(Reflect.get(person, 'name', obj)); //one gotcha*** if no getter, then the 'receiver' is not really used - the prop will be accessed directly on person obj
console.log(Reflect.get(person, '_name'));
