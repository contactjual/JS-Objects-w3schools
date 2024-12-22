
// Object.assign()

// const obj1 = {
//     fName: 'Jual',
// }
// const obj2 = {
//     lName: 'Rana'
// }
// const obj = Object.create(obj1, obj2);
// console.log(obj);


// fromEntries() 

const newObj = [
    ['fname' , 90],
    ['lName' , 80],
    ['age' , 19],
    ['countr' , 203]
];
const createObj = Object.fromEntries(newObj);
// console.log(createObj);




const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
  
  let text = Object.entries(person);

  console.log( text)