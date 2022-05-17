// ES 6 module system

export default class Person {
    firstName; // instance variables
    age; // instance var
    constructor(fn, age) {
        this.firstName = fn;
        this.age  = age;
    }

    getName() {
        return this.firstName;
    }

    getAge() {
        return this.age;
    }
}