class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi. I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age}(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major

    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.major) {
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGretting() {
        let location = super.getGretting();
        if (this.homeLocation) {
            location += ` Im visiting from ${this.homeLocation}.`
        }
        return location
    }
}
const me = new Traveler('Davi Garcia', 38, 'Paris');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());