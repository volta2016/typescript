//public y static tiene que ver con el ambito de la App donde
//una propiedad o un metodo es accesible -> en función si le asignamos public
//private

//como no hemos definido constructor podemos usar el constructor implicitamente
//vacío

// const myObject {
//   public texto: string;//con public es lo mismo
//   constructor(s:string) {
//     this.texto = s;
//   }

//   public datos() {
//     console.log(this.texto);
//   }
// }

// let aux = new myObject("Texto clase");
// aux.texto

//todo esto es equivalente a realizar esto:

// const myObject {
//    texto: string,//con public es lo mismo
//   constructor(s:string) {
//     this.texto = s;
//   }

//    datos() {
//     console.log(this.texto);
//   }
// }

// let aux2 = new myObject("Texto clase");
// aux2.texto

//Vamos a ver un ejemplo con private
//con el indetificador private le estamos diciendo que no sea
//accesible fuera del ambito nuestro objeto


// const myObject {
//   private texto: string;//con public es lo mismo
//esta forma de inicializar es mas clara
//   constructor(s:string) {
//     this.texto = s;
//   }

//   private datos() {
//     console.log(this.texto);
//   }
// }

// let aux = new myObject("Texto clase");
// aux.texto

//otra forma de inicializar


const myObject {
  //con public es lo mismo
  constructor(private texto: string;) {
    // this.texto = s; sin necesidad de hacer esta asignación
  }

  private datos() {
    console.log(this.texto);
  }
}

let aux = new myObject("Texto clase");
aux.texto