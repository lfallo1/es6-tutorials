class Vehicle{
    constructor(type = 'Car', max = 120){
        this._type = type;
        this._speed = 0;
        this._max = max;
    }

    get type(){ return this._type }
    get speed(){ return this._speed }
    get max(){ return this._max }

    set speed(val){ this._speed = val < this.max ? val : this.max }

    drive(speed){
        this.speed = speed;
        Helper.log(`driving ${this.speed}mph`)
    }
    park(){
        Helper.log(`parking...`)
        this.speed = 0;
    }
    getState(){
        return this.speed ? `You are driving a ${this.type} ${this.speed}mph` : `The ${this.type} is parked`;
    }
}

export class Car extends Vehicle{
    constructor(model, color){
        super('Car');
        this._model = model;
        this.color = color;
    }

    get model(){ return this._model }
    get color() { return this._color }

    set color(val){
        if(['blue','red','black','white','green','yellow'].indexOf(val.toLowerCase()) > -1){
            this._color = val.toLowerCase();
            return;
        }
        Helper.logError(`Car::setColor => Invalid color: ${val}. Valid colors are ['blue','red','black','white','green','yellow']`);
    }

    details(){
        return `(model: ${this.model}, color: ${this.color})`;
    }

    getState(){
        return this.speed ? `You are driving a ${this.type} ${this.details()} at ${this.speed}mph` : `The ${this.type} ${this.details()} is parked`;
    }
}

export class Helper {
    static logError(msg){
        console.log('********* HELPER LOG *******');
        console.log(`${new Date().toString()}\t${msg}`)
        console.log('****************************');
        console.log('');
    }
    static log(msg){
        console.log(`> ${msg}`);
    }
}