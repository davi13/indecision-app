//Argument obeject - no longer "bound" with arrow functions
const add = (a, b) => {
    return a + b
};
console.log(add(1, 2));

//This keyword - no longer bound

const user = {
    name: 'Davi',
    cities: ['paris', 'New York', 'Boston'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has livied in ' + city)
        // });

    }
};

const multiplier = {
    numbers: [1, 2, 3],
    mutiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.mutiplyBy);
    }

}
console.log(user.printPlacesLived());
console.log(multiplier.multiply());