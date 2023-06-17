//functions

// function saludar(name: string) {
//   console.log(`hola ${name}`);
// } 

// saludar("Elliot");
// saludar(2)// there a wrong

//by default functions have no inference, si no tienen contexto

//type functions
// function saludar({name, age}) {
//   console.log(`hola ${name}, tiene ${age} años`);
// } 

// saludar({name: 2, age: "Kyo"});

//Whenever you can you have to avoid implicit any


//let’s apply notation type
// :x: 
// function saludar({name: string, age: number}) {
//   console.log(`hola ${name}, tiene ${age} años`);
// } 

// saludar({name: 2, age: "Kyo"});

// This is wrong because it is entering in collision with the javascript syntax, because the javascript syntax allows you to rename the property of an object, what it is doing is that name is transforming it to name string and age to name number.

// correct type
// 1. first 

// function saludar({name, age} : {name: string, age: number}) {
//   console.log(`hola ${name}, tiene ${age} años`);
// } 

// saludar({name: "Kyo", age: 2});

// 2. second one 

// function saludar(person:  {name: string, age: number}) {
//   const {name, age} = person
//   console.log(`hola ${name}, tiene ${age} años`);
// } 

// saludar({name: "Kyo", age: 2});

//return the type of data

function saludar({name, age} : {name: string, age: number}): number {
  console.log(`hola ${name}, tiene ${age} años`);
  return age
} 

saludar({name: "Kyo", age: 2});

//function like a parameter

// const sayHiFromFunction = (fn) => {
//   return fn("Kyo")
// }

// sayHiFromFunction((name) => {
//   console.log(`Hola ${name}`)
// })
//function in JS it call first class citizen


//void is when a function does not return anything, doesn't have any return
//void is a data type that if it returns something, you don't care about it either.
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn("Kyo")
}

const sayHi = (name: string) => {
  console.log(`hola ${name}`);
  //return 3 //ignore that return
}

sayHiFromFunction(sayHi)

//type arrow function 2 ways

//mor readable
const sumar = (a: number, b: number): number => {
  return a + b
}

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b
}