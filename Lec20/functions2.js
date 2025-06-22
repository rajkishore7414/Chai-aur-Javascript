// aaise situation jisme aapko pta nhi hota ki kitne argumensts aane wale hai/ shopping cart example jisme aapko pata nhi ki user kitne items ko ko cart mae add karega 

// function ke naam aise dijye jisse ye lag sake ki fn kar kya raha hai


// casse - 1/ issme hum parameter mae rest operator dete hai/ jiska use hum arguments mae kiti bhi values ko pass karne ke liye use kar sakte hai aur return mae Array return karta hai/ functions mae multiple values kaise pass hoti hai? - using rest operator/ 
function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(33,24,22,11,28))


// case - 2
function calculateCartPrice(val1, val2,...num1) {
    return val1, val2, num1
}

// console.log(calculateCartPrice(33,24,22,11,28))   //output - value1 = 33, val2 = 24 mae jaaygi, baki values rest operator mae jaygi



const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);   //passing object in fn params



//dirctyly paasing objects in fn params
handleObject({
    username: "sam",
    price:399
})




const myNewArray = [200, 400, 100, 449]

function returnSecondValue(getArray) {
    return getArray[1]
}
