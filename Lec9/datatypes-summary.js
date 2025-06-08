// Primitive - isme copy banti hai memory mae

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3  //also known as number

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined //bydefault it will store undefined value

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 342934924892349823479n





//Reference (Non primitive) - woh hai jiska memory mae reference appko allocate kiya ja sakta hai

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"raj",
    age:24,
}

const myFunction = function() {
    console.log("hello world")
}



console.log(typeof bigNumber)
console.log(typeof outsideTemp)

