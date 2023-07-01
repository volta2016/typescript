## Typescript

With data inference, when you hit the point, it can tell you what properties it has.

Infer, which means that typescript is able to observe the object and tell you what its shape is like.

The basic types you have in typescript are all you need and used in JavaScript

TypeScript includes several basic types that you can use to define variables and function parameters. Here are some of the most commonly used basic types in TypeScript:

1. number: Represents numeric values, including integers and floating-point numbers. For example: let age: number = 25;

2. string: Represents textual data. For example: let name: string = "John";

3. boolean: Represents the logical values true and false. For example: let isLogged: boolean = true;

4. array: Represents an ordered list of values of a specific type. You can specify the type using square brackets ([]). For example: let numbers: number[] = [1, 2, 3, 4, 5];

5. tuple: Represents an array with a fixed number of elements, where each element may have a different type. For example: let person: [string, number] = ["John", 25];

6. enum: Represents a set of named values. For example

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let backgroundColor: Color = Color.Red;
```

7. any: Represents any type. Variables of type 'any' can hold any value and are not subject to type-checking. For example: let dynamicValue: any = 5;

8. void: Represents the absence of a value. Typically used as the return type of functions that do not return a value. For example:

```typescript
function logMessage(): void {
  console.log("Hello, TypeScript!");
}
```

9. null and undefined: Represents the absence of a value. These types are useful when explicitly indicating that a variable does not have a value assigned. For example:

```typescript
let data: string | null = null; // it is initialized with the value null
let status: string | undefined;
```

let data: string | null = null;: This line declares a variable named data with the type annotation string | null. It means that data can hold values of type string or null. In this case, it is initialized with the value null. This indicates that data is intended to store a string value, but it can also be explicitly set to null.

let status: string | undefined;: This line declares a variable named status with the type annotation string | undefined. It means that status can hold values of type string or undefined. Unlike data, status is not initialized with any value explicitly, so its initial value will be undefined by default. This indicates that status is intended to store a string value, but it can also be left undefined.

These are some of the basic types in TypeScript. There are additional advanced types and type modifiers available, allowing you to define more complex data structures and type relationships.

In typescript you have to try to write the less type possible, if typescript can do it for us, let it do it.

When it can infer a TypeScript type it shows you the methods available for that data type.

Wha happen when type don´t know like infer ?

```ts
let a; // var a implicity has an "any", anything type of data
```

what we are telling it with any is much more than any data type

TS have inference of the type that return

```js
function saludar({ name, age }: { name: string, age: number }): number {
  console.log(`hola ${name}, tiene ${age} años`);
  return age;
}

saludar({ name: "Kyo", age: 2 });
```

//:Function is the any of the funtions

//functions

```ts
function saludar(name: string) {
  console.log(`hola ${name}`);
}

saludar("Elliot");
saludar(2); // there a wrong
```

//by default functions have no inference, si no tienen contexto

//type functions

```ts
function saludar({ name, age }) {
  console.log(`hola ${name}, tiene ${age} años`);
}

saludar({ name: 2, age: "Kyo" });
```

//Whenever you can you have to avoid implicit any

//let’s apply notation type
// :x:
// function saludar({name: string, age: number}) {
// console.log(`hola ${name}, tiene ${age} años`);
// }

// saludar({name: 2, age: "Kyo"});

// This is wrong because it is entering in collision with the javascript syntax, because the javascript syntax allows you to rename the property of an object, what it is doing is that name is transforming it to name string and age to name number.

// correct type
// 1. first

```ts
function saludar({ name, age }: { name: string; age: number }) {
  console.log(`hola ${name}, tiene ${age} años`);
}

saludar({ name: "Kyo", age: 2 });
```

// 2. second one

```ts
function saludar(person: { name: string; age: number }) {
  const { name, age } = person;
  console.log(`hola ${name}, tiene ${age} años`);
}

saludar({ name: "Kyo", age: 2 });
```

//return the type of data

```ts
function saludar({ name, age }: { name: string; age: number }): number {
  console.log(`hola ${name}, tiene ${age} años`);
  return age;
}

saludar({ name: "Kyo", age: 2 });
```

//function like a parameter

```ts
const sayHiFromFunction = (fn) => {
  return fn("Kyo");
};

sayHiFromFunction((name) => {
  console.log(`Hola ${name}`);
});
```

//function in JS it call first class citizen

void is when a function does not return anything, doesn't have any return
void is a data type that if it returns something, you don't care about it either.

```ts
const sayHiFromFunction = (fn: (name: string) => void) => {
  fn("Kyo");
};

const sayHi = (name: string) => {
  console.log(`hola ${name}`);
  //return 3 //ignore that return
};

sayHiFromFunction(sayHi);
```

//type arrow function 2 ways

mor readable

```ts
const sumar = (a: number, b: number): number => {
  return a + b;
};

const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};
```

# resource

[https://quicktype.io/](quicktype)

# interface

Instead we can use interface, to be very similar to type

```tsx
interface Heroe {
  id: string;
  name: string;
  age: number;
  saludar: () => void;
}

const hero: Heroe = {
  id: "1",
  name: "thor",
  age: 1500,
  saludar: () => {
    console.log("hola");
  },
};
```

the inteface also can it to be nesting

```tsx
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}

interface Shoes extends Producto {
  // id: number
  // nombre: string
  // precio: number
  // quantity: number
  size: number;
}

interface CarritoDeCompras {
  totalPrice: number;
  productos: (Producto | Shoes)[];
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
      quantity: 1,
      size: 5,
    },
  ],
};
```

We have tow ways to indicate the interface

```tsx
// two ways to create a interface with function
interface CarritoOps {
  add: (product: Producto) => void,
  remove: (id: number) => void,

}

interface CarritoOps {
  clear: () => void
}

//we can see that is the two things, is not good
const ops: CarritoOps = {
  add: (product: Producto) => {},
  remove: (id: number) => {},
  clear: () => {}
}


interface CarritoDeCompras {
  totalPrice: number,
  productos: (Producto | Shoes)[]
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
      quantity: 1,
      size: 5
    }
  ]
}

// You don´t doing this with the type
type CarritoOps {
  add: (product: Producto) => void,
  remove: (id: number) => void,

}

type interface CarritoOps {
  clear: () => void
}
```

all interfaces are deleted when compiled to JavaScript

the iterfaces don´t declare a primitive type
you don´t create this with a inteface

```js
const RGB = [0, 0, 0];
```

an interface always be talk about an object, and a form

```jsx
type HeroId = `${number}-${string}`

interface Hero {
  id: HeroId
  name: string
  age: number
}
```

Always trying use type, you don´t duplicate.

## use

For class and object use interface, need to define the form an object,
mothod of an ppbject or the form of the class

type for the alias of the primitive type, define tuplas, define unions and
overload functions

We have an issue

```tsx
interface Mario {
  company: string;
  nombre: string;
  saltar: () => void;
}

interface Sonic {
  company: string;
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

function jugar(personaje: Personaje) {
  console.log(personaje.nombre);

  // if (typeof personaje.correr === "function") {
  //   personaje.correr()
  // } does not work
}
```

## type guard

```tsx
//type guard
//le met think if personaje is Sonic
//this function determine if it is sonic or not
function checkedIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

//type guard avoid it
function jugar(personaje: Personaje) {
  if (checkedIsSonic(personaje)) {
    personaje.correr();
  }

  personaje.saltar();
}
```

## class

private tiene cosas malas y buenas

- lo bueno te puedes referir a ello sin necesidad de utlizar el hash, que también la propiedad
  va ser totalmente privada
- lo malo que este private powerScore: number no lo va transpilar, solo esta haciendo la comprobación
  de forma estatica

```tsx
class Avenger {
  readonly name: string;
  private powerScore: number;
  private readonly wonBattles: number = 0;
  public age: number = 0; //by default
  protected age: number = 0; //can you acces to class that heredity of this class
  //you to don´t acces in instance but if in class
  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
  }

  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`;
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower;
    } else {
      throw new Error("Power score cannot be more than 100");
    }
  }
}

const avengers = new Avenger("Spidey", 80);
// avengers.name = "Hulk"
```
