/*typescript da la posibilidad de trabajar con interfaces
- En proyecto grandes nos sirve para tener las cosas mas estructuradas
- basicamente una interfaz es un mecanismo que se utliza en la programación orientada a objetos para suplir la herencia multiple, como c++ y python.

- con la iterfaces simulamos la herencia multimple
- una clase puede extender varias clases a la vez 
- las interfaces son como un contrato en donde se especifican las cosas
que debe tener una clase, para que pueda implementar dicha interfaz
*/

enum especieGato {común, angora, siames, persa}

interface animal {
  nombre: string,
  edad: number,
  datos():void, 
}

//de forma obligatoria tiene que tener la interface animal

class CatOne implements animal {
  nombre: string;
  edad: number;
  esp: especieGato;
  //el constructor no obligatorio
  //This se utliza para hacer referencia a atributos de esta misma clase
  constructor(n:string, e:number, esp: especieGato) {
    this.nombre = n;
    this.edad = e;
    this.esp = esp
  }
  datos():void {
    console.log(`Mi gato se llama ${this.nombre} tiene ${this.edad} años y la especie es ${especieGato[this.esp]}`);
  }
}

class Perro implements animal {
  //public private
  // static nombre: string;
  edad: number;
  nombre: string;
  // static edad: number;
  datos():void {
    console.log(`Mi perro se llama ${this.nombre} tiene ${this.edad} años`);
  }
}



let catPrint = new CatOne("Mikun", 2, especieGato.persa);
catPrint.datos();
let perroPrint = new Perro();
perroPrint.edad = 5;
perroPrint.nombre = "Guffi";
perroPrint.datos();
