//first example
// const multiplicator = (a: number, b:number, printText:string) => {
//   console.log(printText, a*b);
  
// }


// multiplicator(2,4, "Multiplied a string and 4, the result is")

console.log(process.argv);//lo que nos va a permitir es basicamente poder recuperar los argumentos que le pasamos al comando. Esto es un proceso de node js. Al final siempre typescript tiene que controlar de donde salen las cosas que tipo tiene. Antes lo que tenias que hacer para que tome argv es hacer un 
//npm install --save dev type/node en este caso no es necesario

//second example

const multiplicator = (a: number, b:number, printText:string) => {
  console.log(printText, a*b);
  
}


console.log(process.argv);

const a: number = Number(process.argv[2])//tenemos que forzar la transformación a un número
const b: number = Number(process.argv[3])

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is: `)
