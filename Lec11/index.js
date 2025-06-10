const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value")  //outdated syntax

// console.log(`Hello my name is ${name} and repo count is ${repoCount}`); //modern syntax

const gameName = new String('hiteshhc')   //anotherway to create string/ It is a object
// console.log(typeof(gameName))  //output - object 

// console.log(gameName[0]);

// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8,4);
// console.log(anotherString)

const newStringOne = "   hitesh   "
// console.log(newStringOne)
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"


// console.log(url.replace('%20' , '-'));
// console.log(url.includes('hi'));


const myAddress = "vill- anaila ps- roh post- maharawan district- nawada"
myArr = myAddress.split(' ');
// console.log(myArr);

