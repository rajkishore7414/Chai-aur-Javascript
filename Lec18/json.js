 const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
 }

// console.log( course.courseInstructor)

const {courseInstructor} = course

const {courseInstructor : instructor} = course  // aapse apne hisab se bhi naam de sakte hai

console.log(courseInstructor)




////+++++++++++++++++////////////
// JSON

// json format
// {
//    "name":"hitesh",
//    "courename": "js in hindi",
//    "price": "free"
// }