// console.log("R");
// console.log("a");
// console.log("j");


function sayMyName() {
    console.log("R");
    console.log("a");
    console.log("j");
}

sayMyName //this is called function reference

// sayMyName() //this is called function execution/ also called function call



// function addTwoNumbers(number1, number2) {
//     console.log(number1 +number2)
// }

function addTwoNumbers(number1, number2) {
    
    let result = number1 + number2
    return result
    console.log( "hitesh") //this will never execute return ke baad koi bhi cheez execute nahi hoti h
}


// function addTwoNumbers(number1, number2) {
//     console.log(number1 +number2)
// }

// addTwoNumbers(10) //output - NaN
// addTwoNumbers(5,4) //output - 9
// addTwoNumbers(3, null) //output - 3
// addTwoNumbers(3, undefined) //output - NaN

const result = addTwoNumbers(3,3)
// console.log( "Result", result)   //if you haven't retun the function output will give undefined/ jab bhi aap return karenge toh aap usse kisi variable mae store kar sakte hai, shirf console.log se nahi kar sakte hai


function loginUserMessage(username = "sam") {
    // if(username === undefined)
        if(!username)
        {
            console.log("Please enter a username")
            return
        }
    // return `${username}, just logged in`
}

// loginUserMessage("hitesh")  //output - mae kuch nahi aayiga kueki aapne value return ki hai values ko console.log() nahi kara hai

console.log(loginUserMessage())   //output - undefined(if bydeafult not pass any value paramerter)
 
