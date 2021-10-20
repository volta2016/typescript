function multiplicar(x, y) {
    return x * y;
}
function otherFunction(x, y) {
    console.log(x * y);
}
var functionMultiplicar = multiplicar; //a esto le podmos asignar el type multiplicar de esta forma tenemos nuestra funcion en una variable
//nos hacer el mismo efecto como si llamaramos multiplicar 
//tipado estrictto
//solo nos permite asignarle 2 parametros de entrada que sean number y ademas que tengan un parametro de entrada que sea number
var functionMultiplicar2;
//si esta variable functionMultiplicar2 le asignamos un valor que no cumpla con esto si le asignamos la función multiplicar no hay problema por que comple con esto perfectamente pero vamos crear la function otherFunction no le ponemos que nos devuelva nada simplemente que haga la multiplicacion
functionMultiplicar2 = multiplicar;
//estamos metiendo la función en tipo función. Esto es util si queremos pasar un parametro a otras funciones
console.log(functionMultiplicar(3, 4)); //por inferencia 
console.log(functionMultiplicar2(5, 4));
function sumar(x, y) {
    return x + y;
}
function fibonacci(vecesSuccesion) {
    var numeros = [0, 1];
    var i = 2;
    console.log("function fibonacci");
    while (i <= vecesSuccesion) {
        numeros[i] = sumar(numeros[i - 2], numeros[i - 1]);
        i++;
    }
    return numeros;
}
var auxFibo = fibonacci(15);
//let auxFibo2:(x:number) => number[];// lo podemos hacer con tipado estático
console.log(auxFibo);
