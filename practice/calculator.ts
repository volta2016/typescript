// const operations = ["multiply", "add", "divide" ]


//En typescript tu puedes crear tus propios type, puedes exportarlo
//o importarlo donde lo necesites
type Operations = "multiply" |  "add" | "divide"  


const calculator = (a:number, b:number, op: Operations ): number | string => {
  //en runtime estamos realizando un check
  // if(!Operations.includes(op)) {
  //   console.log("this operation is not define");
  // }

  if(op == "multiply") return a * b
  if(op == "add") return a + b
  if(op == "divide") {
    if (b == 0) return "can´t divide by 0"
    return a / b
  }
}

//también podemos decir lo que devuelve la función


//ejemplo x donde la api devuelve un string, lo pasamos como 3 argumento
//a operation
// const operation = await fetch("https://rickandmortyapi.com/api/location").then(res => res.json()).then(res => {return "newLocation"})

const result = calculator(7,2,"add")//esto esta ocurriendo en tiempo
//de build time -> en tiempo de compilación
console.log(result);

//cualquier check que hace typescript no corre mientra se ejecuta el código
//en el cliente
//OJO no hay ningún checkeo en forma de runtime, eso es un error super común
//esto funciona: const result = calculator(7,2,"add")
//por que aquí esta haciendo un check de forma estática
