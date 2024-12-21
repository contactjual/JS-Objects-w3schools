// how to create a promise 


// promise declaring 
const myFistPromise = new Promise(function (resolve, reject) {
    
    const myNum = 14;

    if (myNum > 10) {
        resolve('Right: myNum is greater than 10');
    }
    else {
        reject('Wrong: myNum is not greater than 10')
    }

});


// promise calling
myFistPromise
    .then(function (value) {
        console.log(value)
    })
    .catch(function (value) {
        console.log(value)
    })