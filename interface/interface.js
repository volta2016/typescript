/*typescript da la posibilidad de trabajar con interfaces
- En proyecto grandes nos sirve para tener las cosas mas estructuradas
- basicamente una interfaz es un mecanismo que se utliza en la programación orientada a objetos para suplir la herencia multiple, como c++ y python.

- con la iterfaces simulamos la herencia multimple
- una clase puede extender varias clases a la vez
- las interfaces son como un contrato en donde se especifican las cosas
que debe tener una clase, para que pueda implementar dicha interfaz
*/
var especieGato;
(function (especieGato) {
    especieGato[especieGato["com\u00FAn"] = 0] = "com\u00FAn";
    especieGato[especieGato["angora"] = 1] = "angora";
    especieGato[especieGato["siames"] = 2] = "siames";
    especieGato[especieGato["persa"] = 3] = "persa";
})(especieGato || (especieGato = {}));
//de forma obligatoria tiene que tener la interface animal
var CatOne = /** @class */ (function () {
    //el constructor no obligatorio
    //This se utliza para hacer referencia a atributos de esta misma clase
    function CatOne(n, e, esp) {
        this.nombre = n;
        this.edad = e;
        this.esp = esp;
    }
    CatOne.prototype.datos = function () {
        console.log("Mi gato se llama " + this.nombre + " tiene " + this.edad + " a\u00F1os y la especie es " + especieGato[this.esp]);
    };
    return CatOne;
}());
var Perro = /** @class */ (function () {
    function Perro() {
    }
    // static edad: number;
    Perro.prototype.datos = function () {
        console.log("Mi perro se llama " + this.nombre + " tiene " + this.edad + " a\u00F1os");
    };
    return Perro;
}());
var catPrint = new CatOne("Mikun", 2, especieGato.persa);
catPrint.datos();
var perroPrint = new Perro();
perroPrint.edad = 5;
perroPrint.nombre = "Guffi";
perroPrint.datos();
