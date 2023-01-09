// const operations = ["multiply", "add", "divide" ]


//En typescript tu puedes crear tus propios type, puedes exportarlo
//o importarlo donde lo necesites
type Operations = "multiply" |  "add" | "divide"  
type Result = number 
// type Result = number | string

const calculator = (a:number, b:number, op: Operations ): Result => {
  //en runtime estamos realizando un check
  // if(!Operations.includes(op)) {
  //   console.log("this operation is not define");
  // }

  if(op == "multiply") return a * b
  if(op === "add") return a + b
  
  if(op == "divide") {
    if (b === 0) throw new Error("can´t divide by 0") 
    return a / b
  }

  throw new Error("Operation is not valid")
}

//también podemos decir lo que devuelve la función


//ejemplo x donde la api devuelve un string, lo pasamos como 3 argumento
//a operation
// const operation = await fetch("https://rickandmortyapi.com/api/location").then(res => res.json()).then(res => {return "newLocation"})

console.log(calculator(7,2,"add"));//esto esta ocurriendo en tiempo
//de build time -> en tiempo de compilación
// console.log(calculator(7,2,"dasda"));


//cualquier check que hace typescript no corre mientra se ejecuta el código
//en el cliente
//OJO no hay ningún checkeo en forma de runtime, eso es un error super común
//esto funciona: const result = calculator(7,2,"add")
//por que aquí esta haciendo un check de forma estática

/*
tenemos el check en runtime que sería esto -> throw new Error("Operation is not valid")
 y tenemos el check estático que sería el type para evitar cualquier otro op que no exista
*/

//podemos ocupar try catch

// try {
// console.log(calculator(7,2,"add"));
// console.log(calculator(7,0,"divide"));
// } catch(e) {
//   throw new Error("Something went wrong", e)
// }