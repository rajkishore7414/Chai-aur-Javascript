// array

const myArr = [0,1,2,3,4,5,6]

const myHeros = ["shaktiman", "naagraj"]
// console.log(myArr[1])


// Array methods
// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(90) //it is not a good practice/ add data in 0th positon/ and then shift all elements in the array
// myArr.shift()

// console.log(myArr.includes(9))  // - output - true| false 
// console.log(myArr.indexOf(4))   // if data is not present in array it returns -1/ if data is present it returns his index position
// console.log(myArr)


const newArr = myArr.join() // string mae value return karta hai 

// console.log(myArr)
// console.log(newArr)


//slice, splice  --- { INTERVIEW QUESTION }

console.log("A", myArr)

const myn1 = myArr.splice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)


