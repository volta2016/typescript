//los que vienen de c# ya saben que readonly es para que una propiedad
//sea solo sea de lectura
var myObject, _a = void 0, public = _a.public, string = _a.texto;
texto2: string; //solo de lectura, no se le puede saignar un valor
constructor(s, string);
{
    this.texto = s;
    this.texto2 = "valor"; //se puede incializar el valor en constructor de la clase
}
datos();
{
    console.log(this.texto);
}
var aux = new myObject("Texto clase");
aux.datos();
aux.texto2 = "dasdd"; //no va dejar asignar un valor es readonly
