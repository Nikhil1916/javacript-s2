const uid = new ShortUniqueId();
const cart = ['shoes', 'tshirt', 'pants'];
createOrder(cart).then((orderId) => {
    return proceedToPayment(orderId);
})
.then((paymentId) => {
    return showOrderSummary(paymentId);
})
.then((summary)=>{
    console.log(summary);
})
.catch(err => {
    console.warn(err);
});


// producer 
function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (validateCart(cart)) {
            setTimeout(() => {
                resolve(uid.rnd());
            }, 5000)
        } else {
            reject(new Error('Cart is not valid'))
        }
    });
}


function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            // console.log(orderId);
            resolve(`PID-${orderId}`);
        }, 1000);
    });
}

function showOrderSummary(paymentId) {
    return new Promise(function (resolve, reject) { 
        resolve({
            'paymentId': paymentId,
            'shoes':2
        })
    })
}

function validateCart(cart) {
    return true;
}