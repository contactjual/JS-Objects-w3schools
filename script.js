// JavaScript Object Accessors (getters and setter)

const myObject1 = {
    fName: 'Jual',
    lName: 'Rana',
    fullName: function () {
        return this.fName + ' ' + this.lName;
    }
};
// console.log('myObject1: ' + myObject1.fullName())


// Using Getters get same result. Getters use korle code running time kome

const myObject2 = {
    fName: 'Jual',
    lName: 'Rana',
    get fullName() {
        return this.fName + ' ' + this.lName;
    }
};
// console.log('myObject2: ' + myObject2.fullName)


const myObject5 = {
    fName: 'Jual',
    lName: 'Rana',
    language: '',
    set lang(lang) {
        return this.language = lang;
    }
};
myObject5.lang = 'en'
// console.log('myObject5: ' + myObject5.language)


// object er vaire define korar jonno Object.defineProperty() use korbo

const myObject3 = {
    fName: 'Jual',
    lName: 'Rana',
};
myObject3.fullName = myObject3.fName + ' ' + myObject3.lName;
// console.log('myObject3: ' + myObject3.fullName)


const myObject6 = {
    fName: 'Jual',
    lName: 'Rana',
};
Object.defineProperty(myObject6, 'fullName', {
    get: function () {
        return this.fName + ' ' + this.lName;
    }
})
// console.log('myObject6: ' + myObject6.fullName);


// Object.assign(target, ...sources) target object er moddhe sources thke property esee copy hobe

const myObject7 = {
    fName: 'Kolil',
    lName: 'Uddin',
    age: 50,
}
const myObject8 = {
    fName: 'Jhon',
    lName: 'Oda',
    age: 60,
    parentName: 'Joshim',
    parAlive: false
}


// Object.assign(myObject8, myObject7); // Object.assign(target, ...sources) target object er moddhe sources thke property esee copy hobe
Object.assign(myObject7, myObject8); // obj8 theke property golo obj7 e copy hobe
const text = Object.entries(myObject7);
// console.log(text)

// console.log(Object.values(myObject8)); // object values
// console.log(Object.keys(myObject8)); // object keys









// JavaScript Object Protection...........................

// console.log(Object.isExtensible(myObject8))
console.log(Object.freeze(myObject8)) // cann't any changes to an object (like: keys or values and adding property)
myObject8.age = 90;
console.log((myObject8))
console.log(Object.preventExtensions(myObject8)); // cann't adding properties but can change values to the object8.
myObject8["fullName"] = 'Jual Rana';
// console.log(myObject8)
