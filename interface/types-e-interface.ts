interface animal {
  nombre: string,
  edad: number,
  datos():void, 
}

class Perro2 implements animal {
  //public private
  static nombre: string;
  edad: number;
  nombre: string;
  // static edad: number;
  datos():void {
    console.log(`Mi perro se llama ${this.nombre} tiene ${this.edad} años`);
  }
}

let perroPrint2 = new Perro2();
perroPrint2.edad = 5;
perroPrint2.nombre = "Guffi";
perroPrint2.datos();

type animalTwo =  {
  nombre: string,
  edad: number,
  datos():void, 
}

//al ser del tipo no hace falta un constructor para inicializarlo
let jirafa:animalTwo = {
  nombre: "Jirafita baby",
  edad: 2,
  datos():void {
    console.log(`Mi jirafa se llama ${this.nombre} tiene ${this.edad} años`);
  }
  //con this podemos hacer referencia a propiedades de este mismo tipo en este caso
}

jirafa.datos();