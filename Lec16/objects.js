//singleton
//Object.create  //object creation through constructor method/ isi mae singleton banta hai


//object literals

// const JSuser = {} //empty object/ object literal method

const mySym = Symbol("key1")
const JSuser = {
    name: "Hitesh",
    "full name": "Raj Kishore", // there is no way to access by dot notation/ you have to use square wala method
    [mySym]: "mykey1",
    age: 18,
    location: "Patna",
    email:"rajkishore@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Tuesday"]

}

// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["full name"])
// console.log(JSuser[mySym]) //interview topic

JSuser.email = "hitesh@chatgpt.com" //ways to update object values
// Object.freeze(JSuser) // can't update/change values 
JSuser.email = "hitesh@microsoft.com" //won't be able to update in object because of freeze method used in previously
// console.log(JSuser)

JSuser.greeting = function() {
    console.log("Hello JS user");
}
JSuser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); //string interpolation - when you use backticks it is called/ jab bhi aapko same object ko reference karna toh aap (this) likh sakte hai/ this.(dot) ka use karke uske andar ke(object ke properties ko access kar sakte hai 
}

console.log(JSuser.greeting()) //output - [Function (anonymous)]/ ise function ka reference dena bolte hai/
console.log(JSuser.greetingTwo())









