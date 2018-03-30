// export let keyValue = 1000;
// export function test(){ console.log('test')}

//--equivalent to above--
let keyValue = 1000;
function test(){
    console.log('test')
    keyValue = 2000;
}
export {keyValue, test};

let ab = 'Some random text';
export default ab;