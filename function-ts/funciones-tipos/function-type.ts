function multiplicar(x:number,y:number):number {
    return x * y
}

function otherFunction(x:number,y:number) {
    console.log(x*y);
    
}


let functionMultiplicar = multiplicar;//a esto le podmos asignar el type multiplicar de esta forma tenemos nuestra funcion en una variable
//nos hacer el mismo efecto como si llamaramos multiplicar
//-> una tomando los datos por iferencia  

//tipado estrictto
//solo nos permite asignarle 2 parametros de entrada que sean number y ademas que tengan un parametro de entrada que sea number
let functionMultiplicar2:(x: number, y:number) => number;
//-> esta verifica que los valores tienen que ser de este tipo


//si esta variable functionMultiplicar2 le asignamos un valor que no cumpla con esto si le asignamos la función multiplicar no hay problema por que comple con esto perfectamente pero vamos crear la function otherFunction no le ponemos que nos devuelva nada simplemente que haga la multiplicacion

functionMultiplicar2 = multiplicar;


//estamos metiendo la función en tipo función. Esto es util si queremos pasar un parametro a otras funciones
console.log(functionMultiplicar(3,4));//por inferencia 
console.log(functionMultiplicar2(5,4));

function sumar(x, y) {
	return x + y;
}


function fibonacci(vecesSuccesion: number): number[] {
	let numeros = [0, 1];
	let i = 2;

	console.log("function fibonacci");
	while (i <= vecesSuccesion) {
		numeros[i] = sumar(numeros[i - 2], numeros[i - 1]);
		i++;
	}

	return numeros;
}




let auxFibo = fibonacci(15)
//let auxFibo2:(x:number) => number[];// lo podemos hacer con tipado estático
console.log(auxFibo);


