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
