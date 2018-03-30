export class ConvertableArray extends Array{
    convert(){
        let returnArray = [];
        this.forEach(value => returnArray.push('Converted!' + value))
        return returnArray;
    }
}