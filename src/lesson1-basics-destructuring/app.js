import {Car, Helper} from "./lesson2-modules-classes/classes"
import {ConvertableArray} from "./lesson2-modules-classes/subclasses"

//NOTE: car1.__proto__ === Car.prototype
let car1 = new Car('Charger', 'red');
car1.drive(175)
Helper.log(car1.getState());
car1.park();
Helper.log(car1.getState());
Helper.log(car1.__proto__ === Car.prototype); //true

Helper.logError('Error accessing object');