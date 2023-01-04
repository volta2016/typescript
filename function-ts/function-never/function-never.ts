//el type never se utilizan para representar, que nunca se supone que ocurre
//se puede asignar never como el tipo de devolución de una función que nunca regresa un valor en realidad > función que de devuelve aún errror > o una que se meta en bucle infinito nunca va a devolver un valor, bien sea por el code esta mal escrito o ocurre un error > Esto devuelve el type never

// let titpoNever = (cadena:string):never => {
//     while(true){}
// }//siempre nos va devolver el tipo never por que esta en while(true)
//la comentamos si no cuando ejecutemos se va ejecutar un bucle infinito



//throw para lanzar un error controlado por nosotros

let ejecutaError  = (texto:string) => {
    throw new Error(texto) 
}

ejecutaError("dasdas")


// function titpoNever (cadena:string):never  {
//     if(cadena=="")
//         while(true)
//     //estariamos devolviendo un tipo void no un error
//en caso de que sea cadena vacía, no va entrar al if no se va ejecutar el while, estamos devolviendo un tipo void no un error    
// }
//esto esta pensado para erroes no contralados

//never: va represtar valores que no van ocurrir nunca, que no existen,  null no es nada, es algo que ha cortado la ejecución