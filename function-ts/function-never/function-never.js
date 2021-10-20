//el type never se utlizan para represantar que nunca se supone que ocurren
//se puede asignar never como el tipo de devolucion de una funcion que nunca regresa un valor en realidad > función que de devuelv aun errror > o una que se meta en bucle infinito nunca va devolver un valor, bien sea por el code esta mal escrito o ocurre un error > Esto devuelve el type never
// let titpoNever = (cadena:string):never => {
//     while(true){}
// }//la comentamos si no cuando ejecutemos se va ejecutar un bucle infinito
//throw para lanzar un error controlado por nosotros
var ejecutaError = function (texto) {
    throw new Error(texto);
};
ejecutaError("dasdas");
