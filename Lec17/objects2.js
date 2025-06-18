// How to declare objects using constructor/singleton ??
// const  tinderUser = new Object()



const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chodhary"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname)   // this is way to axis object values




//combining two objects or more into single object
const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "a2", 4: "b2"}
const obj4 = {3: "a3", 4: "b3"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)    //using Object.assign we can combine two or more arrays/ we can send a empty object{} this gives a 100% object/ aap isko bhi kam he use karne wale hai/ read more about mdn

const obj3 = {...obj1, ...obj2, ...obj4}  //this is best way & new way to combine two objects using spread operator
// console.log(obj3)



//Common Operation you are going to perform using DBs/ Is tarah ke common operation appko karne ko milege jisme arrys ke andar objects mae loop through karna hai ya koi value print karni hai
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // this is way to axis values


console.log(Object.keys (tinderUser))  // retun mae aapko object ke keys ka array milta hai/ most intersting/ most powerful when you work with DBs

console.log(Object.values(tinderUser))