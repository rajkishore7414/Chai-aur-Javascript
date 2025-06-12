const score = 400

const balance = new Number('222')
console.log(typeof balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3)) //not clear


const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));
//read more about mdn docs




// ++++++++++++ Maths ++++++++++++++++++
// console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.round(2))
// console.log(Math.floor(4.7)) //niche wala 
// console.log(Math.ceil(4.2))  // uppar wala value leta hai



// console.log(Math.random()); // 0 to 1 ke bech mae vales aati hai {always}

console.log(Math.floor(Math.random()*10 +1)) // - > to avoid zero {decimal se phele zero na aaye}

const min = 10
const max = 20

Math.random(Math.floor(Math.random() *(max - min + 1)) + min) // dry run - to understand 







