// Dynamic (any) types

let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'john' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('hello');
mixed.push(false);
console.log(mixed);

let person: {
    name: any,
    age: any,
}

person = { name: 'John', age: 25 };
console.log(person);

person = { name: 25, age: '25' };
console.log(person);