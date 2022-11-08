let obj = {
  name: "Gusion",
};

function printNameOfObject(age, p1, p2) {
  console.log("My name is: " + this.name + "\n" + "My age is: " + age);
  console.log("My powers: " + p1 + " " + p2);
}

// call
printNameOfObject.call(obj, 1000, "daggers", "Magic");

// apply
let args = [1000, "daggers", "Magic"];

printNameOfObject.apply(obj, args);

// bind
let newfunc = printNameOfObject.bind(obj);
newfunc(500, "hi", "ok");



// student obj
const student = {
    age: 20
}

function agePrinter(){
    console.log(this.age);
}

agePrinter.apply(student);


// ************currying**************

// basic
// function multiply(a) {
//     return function multiply2(b){
//         return function multiply3(c){
//             return a*b*c;
//         }
//     }
// }

// let ans = multiply(2)(3)(5);
// console.log(ans)


// using bind

// function multiply(a,b){
//     return a*b;
// }

// let multiply2 = multiply.bind(this, 2);
// console.log(multiply2(5));


// using closures ES6

const multiply = (a) => (b) => {
    return a * b;
}

console.log(multiply(2)(3));