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

function saludar(person:  {name: string, age: number}) {
  const {name, age} = person
  console.log(`hola ${name}, tiene ${age} años`);
} 

saludar({name: "Kyo", age: 2});