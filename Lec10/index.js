// Stack (Primitive) , Heap(Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

console.log(userOne)

userTwo.email = "hitesh@google.com"

console.log(userOne)
console.log(userTwo)