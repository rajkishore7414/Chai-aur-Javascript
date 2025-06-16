// how to check array all methods -- in chrome developer console


const marvel_heros = ["thor", "Ironman", "Caption-America"]
const dc_heros = [
    "superman",
    "flash",
    "batman"
]

// marvel_heros.push(dc_heros) //push method - existing array pe he return karta hai/
// console.log(marvel_heros)
// console.log(marvel_heros[3][2]) //how to acces/ 

const allheros = marvel_heros.concat(dc_heros); //concat method - return aapko karta hai naya array/ and we can't add multiple things in array
// console.log(allheros)



const all_new_heros = [...marvel_heros, ...dc_heros] // ... this is three point is spread operator/ we can add multiple things in an array/ mostly usedin/ used to add to two arrays 
console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_aray = another_array.flat(Infinity)
console.log(real_another_aray)



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //you can give objects, strings jaise bhi hoga woh isse array mae convert kar dega/ Objects ke case mae aapko bolna padega ki kiska aapko aapko array mae convert karna hai keys ya values ka/


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


