// type Hero = {
//   name: string,
//   age: number
// }


interface Heroe {
  id: string
  name: string
  age: number
  saludar: () => void
}

const hero: Heroe = {
  id: "1",
  name: "thor",
  age: 1500,
  saludar: () => {
    console.log("hola")
  }
}

// # nesting
interface Producto {
  id: number
  nombre: string
  precio: number
  quantity: number
}

interface Shoes extends Producto {
  size: number
}

// two ways to create a interface with function
interface CarritoOps {
  add: (product: Producto) => void,
  remove: (id: number) => void,
  
}

interface CarritoOps {
  clear: () => void
}

//we can see that is the two things, is not good
//interface extend 
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

// type CarritoOps {
//   add: (product: Producto) => void,
//   remove: (id: number) => void,

// }

// type interface CarritoOps {
//   clear: () => void
// }

//the iterfaces don´t declare a primitive type
//you don´t create this with a inteface

