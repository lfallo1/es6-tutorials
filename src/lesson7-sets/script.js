console.log('sets');

let set = new Set([12,3523,352,-338]);
console.log(`set.has(12): ${set.has(12)}`);
for(let element of set){
    console.log(element);
}

//WeakSet