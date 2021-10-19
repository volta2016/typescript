//funciones lambda - arrow function
var sumarAnonima = function (x, y) { return x + y; };
var fibonacciAnonima = function (vecesSuccesion) {
    var numeros = [0, 1];
    var i = 2;
    console.log("function fibonacci");
    while (i <= vecesSuccesion) {
        numeros[i] = sumarAnonima(numeros[i - 2], numeros[i - 1]);
        i++;
    }
    return numeros;
};
console.log(fibonacciAnonima(15));
//en este caso le estamos pasando fibonacciAnonima(15)
