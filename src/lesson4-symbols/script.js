/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/
*/

let symbol = Symbol('id');
let anotherSymbol = Symbol('id');
console.log(symbol == anotherSymbol);

let person = {
   name: 'lance',
   id: symbol
};


let ageSymbol = Symbol.for('age');

function makeAge(person){
    let _ageSymbol = Symbol.for('age');
    person[_ageSymbol] = 30;
}

makeAge(person);
console.log(person);
console.log(person[ageSymbol]);