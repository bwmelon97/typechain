interface Person {
    name: string;
    age: number;
    gender: string;
}

const Soo = {
    name: 'Soogeun',
    age: 24,
    gender: "male",
}

const sayHello = (person: Person): string => {
    return `hello, my name is ${person.name}, I'm ${person.age} years old. And I'm ${person.gender}.`;
}

console.log(sayHello(Soo));

export {}