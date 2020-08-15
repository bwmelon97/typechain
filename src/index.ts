// interface Person {
//     name: string;
//     age: number;
//     gender: string;
// }

class Person {
    public name: string;
    public age: number;
    public gender: string;

    constructor (name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const Soo = new Person('Soogeun', 24, 'male');

const sayHello = (person: Person): string => {
    return `hello, my name is ${person.name}, I'm ${person.age} years old. And I'm ${person.gender}.`;
}

console.log(sayHello(Soo));

export {}