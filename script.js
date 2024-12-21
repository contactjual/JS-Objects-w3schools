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
// console.log(Object.freeze(myObject8)) // cann't any changes to an object (like: keys or values and adding property)
myObject8.age = 90;
// console.log((myObject8))
// console.log(Object.preventExtensions(myObject8)); // cann't adding properties but can change values to the object8.
// myObject8["fullName"] = 'Jual Rana';
// console.log(myObject8)








// Object Constructor Functions     (eikoi typer onekgolo object create er khtre use kora hoy)

function MyObject9(fN, lN, somthing) {
    this.fName = fN,
        this.lName = lN,
        this.age = somthing,
        this.fullName = function () {
            return this.fName + ' ' + this.lName;
        }
}
const korim = new MyObject9('Korim', 'Ali', 50)
const rohim = new MyObject9('Rohim', 'Uddin', 70)
const fahim = new MyObject9('Fahim', 'Kol', 30)


// console.log(korim);
// console.log(rohim.fullName());

fahim.country = 'Bangladesh';
// console.log(fahim);

MyObject9.year = 2024; // no added (use below mathod)
MyObject9.prototype.year = 2024; // now year added to prototype of the object
// console.log(fahim.year) 








// itarator

const array = [1, 2, 3];
const arrayItaretor = (array[Symbol.iterator]()); // array protoryper vitor

for (let x of array) {
    // console.log(x);
}

// console.log(arrayItaretor.next());
// console.log(arrayItaretor.next());
// console.log(arrayItaretor.next());
// console.log(arrayItaretor.next());  // done true








// JS Map it's like an object but different: key jekono typer data hote parbe, order golo maintain kore, iterable, arry er motho length ber kora jay (size) property diyew

const myMap = new Map([
    ['Name', 'Jual'],
    ['Country', 'Bangladesh'],
    ['year', 'ache'],
    ['useFunction', 'function'],
    ['useObj', 'obj']
]);
// console.log(myMap)



// aply...................

// find max num from array without using loop (use aply())
const x = [3, 4, 56, 6];
// console.log(Math.max(x)) // NaN
let maxNumber = Math.max.apply(Math, x); // eikhane Math hocche 'this' and 'x' hocche array
// console.log(maxNumber);

// define ohers object as this using aplly()
// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}
// console.log(person.fullName.apply(person1)); // This will return "Mary Doe" eikhane this hocche person1

// do same by using call() function
// console.log(person.fullName.call(person1));


// seting time use bind()
const person = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
let display = person.display.bind(person);
// setTimeout(display, 1000);








// JS closure

// normally:
let counter = 0;
function countInc() {
    return counter += 1;
}
// console.log(countInc());
// console.log(countInc()); 
// eikhtre output thik thaklew counter global scope hoye geche. counter take block scope er anar jnno closure use kora hoy


function closureFunc() {
    let counter = 0;

    return function () {
        return counter += 1;
    }

}
const myFunc = closureFunc();
// console.log(myFunc())
// console.log(myFunc())
// console.log(myFunc())








// JS classes 

class names {
    constructor(fName, lName) {
        this.fistName = fName,
            this.lastName = lName
    }
    fullName() {
        return this.fistName + ' ' + this.lastName
    }
}
const ami = new names('Jual', 'Rana')
// console.log(ami)
// console.log(ami.fullName())
const rihim = new names('Rohim', 'Bekkol')
// console.log(rihim)
// console.log(rihim.fullName())
const korimma = new names('Korim', 'Gadha')
// console.log(korimma)
// console.log(korimma.fullName())







// JavaScript Class Inheritance

// class car {
//     constructor(fn, mod, fName) {
//         this.name = fn;
//         this.model = mod;
//         this.fName = fName;
//     }
//     discoveredBy() {
//         return this.fName;
//     }
// }

// class carDetails extends car {
//     constructor(fn, mod, fName, yr) {
//         super(fn, mod, fName); // super mane upore, ortat uporer constructor k pawa
//         this.year = yr;
//     }
//     run() {
//         return this.discoveredBy() + "'s car" + ' is running';
//     }
// }

// let inputNow = new carDetails('BMW', 'yu34i', 'Jhon', '2019');

// console.log(inputNow.run()) ;
// console.log(inputNow.name) ;
// console.log(inputNow.model) ;
// console.log(inputNow.year) ;
// console.log(inputNow.fName) ;



// set and get 

// class newCar {
//     constructor(cName) {
//         this.Car = cName;
//     }
//     set(x) {
//         this.Car = x;
//     }
//     get() {
//         return this.Car;
//     }
// }
// const inputNewCar = new newCar('Apachi');
// inputNewCar.car2Name = 'Yamaha'
// inputNewCar.car3Name = 'BMW'

// console.log(inputNewCar.Car);
// console.log(inputNewCar.car2Name);
// console.log(inputNewCar.car3Name);



// JS static 
// এই মেথড বা প্রপার্টি ক্লাসের ইনস্ট্যান্স তৈরি না করেও সরাসরি ক্লাসের মাধ্যমেই অ্যাক্সেস করা যায়

class car5 {
    constructor(nam, year) {
        this.carName = nam;
        this.year = year;
    }
    static run() {
        return 'Hello!';
    }
}

const inputCar5 = new car5('BMW', 2017);
// console.log(inputCar5.carName);

// console.log(car5.run()) // cann't access wihtout using 'static'





