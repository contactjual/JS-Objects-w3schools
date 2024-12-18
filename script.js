
const myObject1 = {
    fName: 'Jual',
    lName: 'Rana',
    fullName: function () {
        return this.fName + ' ' + this.lName;
    }
};
console.log('myObject1: ' + myObject1.fullName())


// Using Getters get same result. Getters use korle code running time kome

const myObject2 = {
    fName: 'Jual',
    lName: 'Rana',
    get fullName() {
        return this.fName + ' ' + this.lName;
    }
};
console.log('myObject2: ' + myObject2.fullName)



const myObject5 = {
    fName: 'Jual',
    lName: 'Rana',
    language: '',
    set lang(lang) {
        return this.language = lang;
    }
};
myObject5.lang = 'en'
console.log('myObject5: ' + myObject5.language)







// object er vaire define korar jonno Object.defineProperty() use korbo

const myObject3 = {
    fName: 'Jual',
    lName: 'Rana',
};
myObject3.fullName = myObject3.fName + ' ' + myObject3.lName;
console.log('myObject3: ' + myObject3.fullName)



const myObject6 = {
    fName: 'Jual',
    lName: 'Rana',
};
Object.defineProperty(myObject6, 'fullName', {
    get: function () {
        return this.fName + ' ' + this.lName;
    }
})
console.log('myObject6: ' + myObject6.fullName);



