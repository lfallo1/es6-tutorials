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

let array = [10,12,17];
let newArray = Array.from(array, val => val * 2);
console.log(array);
console.log(newArray);
console.log(array);
array.fill(100); //has two additional arguments (startIdx, endIdx)
array.fill(1554,1,2);
console.log(array);

console.log(array.find(val => val % 2 == 0)); //stops after first match
const inventory = [{name: 'apples', quantity: 15},{name: 'cherries', quantity: 44},{name: 'bananas', quantity: 31}]
function findFruit(fruitName, item){
    return item.name = fruitName;
}
let results = inventory.find(findFruit.bind(this,'cherries'));
console.log(results);

//let emptyArray = new Array(100).fill(0); //initialize an array of 100 elements, all initialized to zero
//console.log(emptyArray);