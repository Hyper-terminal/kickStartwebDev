"use strict";

// this different usage

// this.table = "window table";
// this.garage = {
//     table: "garage table",
//     cleanTable(){
//         console.log("Cleaning " + this.table);
//     }
// };
// this.garage.cleanTable();

// let house = {
//     table: "house table",
//     cleanTable(){
//         console.log("Cleaning " + this.table);
//     }
// }

// function cleanTable(){
//     console.log("Cleaning " + this.table);
// }

// house.cleanTable();




// design pattern problem

class Student {
    static count = 0;

    constructor(name, age, phone_number, board_marks) {
        this.name = name;
        this.age = age;
        this.phone_number = phone_number;
        this.board_marks = board_marks;
        Student.count++;
    }

    static totalStudents() {
        return Student.count;
    }

    isEligiblePlacement(minMarks) {
        return  (age) => {

            if (this.board_marks > minMarks && this.age > age) return true;
            else return false;

        }
    }

}

Student.prototype.isEligibleCollege = function () {
    return this.board_marks > 40 ? "eligible" : "not eligible";
}


let student1 = new Student("Sherlock", 18, 1561561, 98);
let student2 = new Student("John", 26, 11555, 99);


console.log(student1.isEligiblePlacement(40)(20));
console.log(student2.isEligiblePlacement(40)(20));