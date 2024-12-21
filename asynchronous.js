
// JavaScript Callbacks and Asynchronous JavaScript
// javaScript code is read normally synchronous wise But setTimeout and similler other some funcitons are asynchronous.
// the below mission to read Asynchronous functions to synchronous wise.


// const paymentSucc = true;
// const marks = 90;

// function enroll(callback) { // eikhane 'callback' namer function patabo (eikhane full function kaj korbe), eitai hocche callback function 
//     console.log('I am in enroll');

//     setTimeout(function () { 
//         if (paymentSucc) {
//             callback();
//         }
//         else {
//             console.log('Payment failed')
//         }
//     }, 2000)
// }

// function progress(callback) {
//     console.log('I am in progress');

//     setTimeout(function () {
//         if (marks >= 80) {
//             callback();
//         }
//         else {
//             console.log('You are not eligible to get certificate cause marks low');
//         }
//     }, 3000)
// }

// function getCertificate() {
//     console.log('I am in getCertificate');

//     setTimeout(function () {
//         console.log('Congrats! You got the Certificate')
//     }, 1000)
// }


// wrong, don't work synchronous wise ...................
// enroll(progress)
// progress(getCertificate) 




// solve: 01 (It's not actul solution. Use promise to sovle actully )

// enroll function er moddhe perameter hisebe progress deyar jnno arekti function er help proyojon hoyeche............
// enroll(function () { 
//     progress(function() {
//         getCertificate();
//     });
// });

// or

// enroll(function () { // enroll function er moddhe perameter hisebe progress deyar jnno arekti function er help proyojon hoyeche
//     progress(getCertificate);
// });






// solve: 2 (It's actual soluiton using promise.) 

const paymentSucc = true;
const marks = 90;

function enroll() { // eikhane 'callback' namer function patabo (eikhane full function kaj korbe), eitai hocche callback function 
    console.log('I am in enroll');

    const enrollPromise = new Promise(function (resolve, reject) {

        setTimeout(function () {
            if (paymentSucc) {
                resolve();
            }
            else {
                reject('Payment failed')
            }
        }, 2000)

    });

    return enrollPromise;
}

function progress() {
    console.log('I am in progress');

    const progressPromise = new Promise(function (resolve, reject) {

        setTimeout(function () {
            if (marks >= 80) {
                resolve();
            }
            else {
                reject('You are not eligible to get certificate cause marks low');
            }
        }, 3000)

    });

    return progressPromise;

}

function getCertificate() {
    console.log('I am in getCertificate');

    const getCertificatePromise = new Promise(function (resolve) {

        setTimeout(function () {
            resolve('Congrats! You got the Certificate')
        }, 1000)

    });

    return getCertificatePromise;
}

// call promises 

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value)
    })
    .catch(function (err) {
        console.log(err)
    })