//los que vienen de c# ya saben que readonly es para que una propiedad
//sea solo sea de lectura


class myObject {
  public  texto: string;
  public readonly texto2: string;//solo de lectura, no se le puede saignar un valor
  constructor(s:string) {
    this.texto = s;
    this.texto2 = "valor";//se puede incializar el valor en constructor de la clase
  }

  public datos() {
    console.log(this.texto);
  }
}

let aux = new myObject("Texto clase");
aux.datos();
aux.texto2 = "dasdd"//no va dejar asignar un valor es readonly