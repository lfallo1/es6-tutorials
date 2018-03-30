import {Car, Helper} from "./classes"
import {ConvertableArray} from "./subclasses"

//NOTE: car1.__proto__ === Car.prototype
let car1 = new Car('Charger', 'red');
car1.drive(175)
Helper.log(car1.getState());
car1.park();
Helper.log(car1.getState());
Helper.log(car1.__proto__ === Car.prototype); //true

Helper.logError('Error accessing object');

let array = [10,12,16];
let newArray = Array.from(array, val => val * 2);
console.log(array);
console.log(newArray);
console.log(array);
array.fill(100);
console.log(array);

new Array(100).fill(0);