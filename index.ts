// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/*
let person: {
  name: string;
  age: number
};

person = {
  name: 'John',
  age: 25
};

appDiv?.append(person.name+" is very old. He is "+person.age);

*/

let greeting : (name: string) => string;

greeting = function (name: string) {
  return `Hi ${name}`;
};

appDiv?.append(greeting("Janez"));

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else {
    discount = 15; // 15%
}

appDiv?.append(` ${discount} `);

function add(a: number, b: number): number {
  return a + b;
}

let sum = add(10, 20);
appDiv?.append(`${sum}`);

/*
function Person(ssn, firstName, lastName) {
  this.ssn = ssn;
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());

*/

class Person {
  ssn: string;
  firstName: string;
  lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
      this.ssn = ssn;
      this.firstName = firstName;
      this.lastName = lastName;
  }

  getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());


function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers); 
console.log(randomEle);

function merge<U, V>(obj1: U, obj2: V) {
  return {
      ...obj1,
      ...obj2
  };
}

let result = merge(
  { name: 'John' },
  { jobTitle: 'Frontend Developer' }
);

console.log(result);

import { EmailValidator } from './EmailValidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let rezultat = validator.isValid(email);

console.log(rezultat);