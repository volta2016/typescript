var Utilidades = /** @class */ (function () {
    function Utilidades(n) {
    }
    Utilidades.prototype.serieFibonacci = function () {
        var numeros = [0, 1];
        var i = 2;
        while (i <= this.numero) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
            i++;
        }
        return numeros;
    };
    Utilidades.prototype.numerosParesImpares = function (pares, hastaNumero) {
        var resultado;
        resultado = "";
        var aux = 1;
        if (pares)
            aux = 0;
        for (var j = 0; j < 100; j++)
            if (j % 2 == aux)
                resultado += "" + j;
        return resultado;
    };
    return Utilidades;
}());
//nos queda instanciar nuestro objeto y crear nuestro switch
var u = new Utilidades(15);
var u2 = new Utilidades(100);
var optionBase = 2;
switch (optionBase) {
    case 1:
        console.log(u2.serieFibonacci());
        break;
    case 2:
        console.log(u2.numerosParesImpares(true, 100));
        break;
    case 3:
        console.log(u2.numerosParesImpares(false, 123));
        break;
    default:
        console.log("No comtemplado");
        break;
}
