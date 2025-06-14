// Dates

let myDate = new Date()
console.log(myDate.toString())
// console.log(myDate.toDateString())

// console.log(typeof myDate) //output - object (interview)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now() //use cases - quiz apps, order booking
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())


// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth() +1)

`${newDate.getDay()} and the time `

newDate.toLocaleString ('default'), {
    weekday: "long",
    
}

//hellojs


 


