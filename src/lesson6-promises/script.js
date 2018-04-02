let promise1 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        reject({payload: [1,2,3,4,5]})
    },650);

});

let promise2 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve({payload: {type: 'status-check', result: 'success'}})
    },500);

});

Promise.race([promise1, promise2]).then((responses) => {
    console.log(responses);
    // for(let response of responses){
    //     console.log(responses);
    // }
}, (err)=> console.log('ERROR: ' + err));