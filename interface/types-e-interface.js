var Perro2 = /** @class */ (function () {
    function Perro2() {
    }
    // static edad: number;
    Perro2.prototype.datos = function () {
        console.log("Mi perro se llama " + this.nombre + " tiene " + this.edad + " a\u00F1os");
    };
    return Perro2;
}());
var perroPrint2 = new Perro2();
perroPrint2.edad = 5;
perroPrint2.nombre = "Guffi";
perroPrint2.datos();
//al ser del tipo no hace falta un constructor para inicializarlo
var jirafa = {
    nombre: "Jirafita baby",
    edad: 2,
    datos: function () {
        console.log("Mi jirafa se llama " + this.nombre + " tiene " + this.edad + " a\u00F1os");
    }
};
jirafa.datos();
