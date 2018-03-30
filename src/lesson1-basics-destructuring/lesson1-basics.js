import utils from './utils.js';

//load other modules & execute a couple functions
const x = 33;
const y = 89;
console.log('lance -> ' + utils.toUpper('lance'));
console.log(`multiplying ${x} * ${y} = ${utils.multiply(x,y)}`);
console.log(utils.greet('lance'));
console.log(this);

//scoping
const OBJ = { age: 30 };
console.log(OBJ);

const testFn = (age = 30) => {
    console.log(`you are ${age} years old`);
}

testFn();
testFn(44);

//object literals
const jobTitle = "developer";
const ageField = "age";
const obj = {
    "name": "lance",
    [ageField]: 30,
    jobTitle,
    "greet"(){
        console.log(`name: ${this.name}, age: ${this[ageField]}, job title: ${jobTitle}`)
    }
}
obj.greet();

