const name = 'soogeun',
    age = '24',
    gender = 'male'

const sayHello = (name, age, gender?) => {
    console.log(`hello, my name is ${name}, I'm ${age} years old. And I'm ${gender}.`)
}

sayHello(name, age);

export {}