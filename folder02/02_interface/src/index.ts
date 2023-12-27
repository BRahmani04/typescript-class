interface Person {
    id: number;
    name: string,
    birthDate?: Date;
}


const person1 : Person = {
    id: 1,
    name: 'John'
}

const person2 : Person = {
    id: 2,
    name: 'John'
}

const person3 : Person = {
    id: 3,
    name: 'Joe',
    birthDate: new Date('01/01/1998')
}

interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zipCode: number;
}

interface Person1 extends Address {
    id: number;
    name: string;
}

const personWithAddress = {
    id: 4,
    name: 'Yuri',
    line1: '1234 Street',
    line2: 'Apt 2',
    city: 'Chicago',
    state: 'IL',
    zipCode: 60123
}