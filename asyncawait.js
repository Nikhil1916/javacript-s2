const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Promise is resolved');
    });
})

async function getData() { 
    const promise1 = await new Promise(function(resolve, reject) {
        setTimeout(()=>{
            resolve('Promise1 is resolved');
        },10000);
    });
    console.log(promise1);
    const promise2 = await new Promise(function(resolve, reject) {
        setTimeout(()=>{
            resolve('Promise2 is resolved');
        },10000);
    });
    console.log(promise2);
}
getData();