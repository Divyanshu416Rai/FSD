const student1 = {
    name: "abc",
    age: 20
};

const student2 = {
    name: "sfe",
    age: 23
};

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const s1 = new Student(student1.name, student1.age);
const s2 = new Student(student2.name, student2.age);

s1.greet();
s2.greet();
