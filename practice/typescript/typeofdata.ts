const number = 1;
const n: number = 2;

let aa = "hola";//inferencia de datos
let bb = null;
let cc: undefined = undefined; 

let anyValue: any = "hola";
anyValue.aa //???
//any data type
//is to IGNORE the typescript typing
//the any is a way of escaping typescript's typecheking


let anyValueTwo: unknown = "hola";//by unknown what we mean is that we don't know what the type is

// let anyValueTwo.aa can´t use any property that don´t know exist

//inference
//a and b inference that are number
let a = 1
const b = 2
const c = a + b //always will be number

let chainOfText = "hola";
chainOfText.toLowerCase();

//❌ chainOfText = 2
//❌ chainOfText.nonExistentProperty = 2

//any
let obj: any = {x : 0}
obj();
obj.bar = 100;
obj = "hello";
const nData: number = obj;
