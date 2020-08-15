const sayHello = (name: string, age: number, gender?: string): string => {
    return `hello, my name is ${name}, I'm ${age} years old. And I'm ${gender}.`;
}

console.log(sayHello('Soogeun', 24, 'male'));

export {}