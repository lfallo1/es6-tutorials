console.log('lesson 2');

//---- REST / SPREAD Operators ----
//rest operator: takes a variable amount of items, and will create an array
//spread operator: destruct array into separate items
let numbers = [1,2,3,4,5];
const sumUp = (...toAdd) => {
    let result = 0;

    //for-of loop
    for(let item of toAdd){
        result+=item;
    }
    return result;
}
console.log(sumUp(1,2,3,4,5));
console.log(sumUp(...numbers));
console.log(Math.max(...numbers));



//---- Arrays ----
//----------------

const methodOne = () => {
    let numbers = [1, 2, 3];

    let [a, b, c, someValue = "default"] = numbers;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(someValue);

    let [d, ...e] = numbers;
    console.log(d);
    console.log(e);
}

//swapping variables
const swappingVariables = () => {
    let a = 5;
    let b = 10;
    [b,a] = [a,b];
    console.log('a: ' + a);
    console.log('b ' + b);
}
//swappingVariables();



//---- Objects ----
//-----------------
const destructureObj = () => {
    let person = {
        name: 'lance',
        age: 30,
        position: 'developer'
    }

    let {name, age, position} = person;
    console.log(`name: ${name}, age: ${age}, position: ${position}`);

    console.log(...person);
}
destructureObj();