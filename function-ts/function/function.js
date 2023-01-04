//infernecia > por inferencia va saber de que tipos son
/*Como son los objetos de tipo any
y los va resolver en tiempo de ejecución lo que va hacer es concatenar estas 2 cadenas
Como no hemos recibido type son los type que recibimos como parametros en tiempo de ejcución, pues el decide que estos
son string.
Esto se puede definir de forma statica por si no le pasamos los valores que nostros queremos
*/
//Ejemplo 1: tipo de dato any
function suma(x, y) {
    return x + y;
}
console.log(suma("3", "5")); //35
//Ejemplo 2: podemos definir los type - le vamos a decir que no retorne valores //de tipo nomber
function sumaTwo(x, y) {
    console.log("function sumaTwo");
    return x + y;
}
console.log(sumaTwo(8, 6));
//Ejemplo  3: - Le vamos a deicir que retorne un array de números
function fibonacci2(vecesSuccesion) {
    var numeros = [0, 1];
    var i = 2;
    console.log("function fibonacci");
    while (i <= vecesSuccesion) {
        numeros[i] = sumaTwo(numeros[i - 2], numeros[i - 1]);
        i++;
    }
    return numeros;
}
fibonacci2(15);
//Ejemplo 4: si le pasamos parametro de entrada pasa el valor, si no con
//void no devuelve ningun valor
// function sinRetornoNiParams(x: string): void {
// 	console.log(x);
// }
// sinRetornoNiParams("");
