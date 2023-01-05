/*Una clase es una estructura pre definida que sirve como molde para poder crear objetos. En este molde: podemos delcarar atributos que son las propiedades: string
boolean
number
otros objetos
Def: Una class es un conjunto de variables y metodos para poder operar con los datos
constructor es un método para poder iniciliazar estas variables: 
name:string;
edad:number;
esp:especie

Resumen una Clase es un modelo que define un conjunto de variables para poder
operar con estos datos

Constructor va a ser un método al que se le pase ciertos valores y nos van a servir para inicializar estas variables:

name:string;
edad:number;
esp:especie

Acá tenemos definido una clase del tipo gato con 3 valores y va a recibir 3 parámetros para poder inicializar estos valores y ahora podemos construir un objeto del tipo gato

*/

enum especie{común, angora, siames, persa}
//recordemos que es un enum que tiene asociado un número

class Cat {
  name:string;
  edad:number;
  esp:especie

  constructor(n:string,e: number, esp:especie ) {
    this.name = n;
    this.edad = e;
    this.esp= esp;
  }
  dataCat():void {
    console.log(`Mi gato se llama ${this.name} tiene ${this.edad} años y la especie es ${especie[this.esp]}`);
  }
} 

//ahora podemos construir un objero del tipo gato -> una instancia
let myCat = new Cat("Garfield", 4, especie.angora);
myCat.dataCat()

