/* Hacer un menu que nos devuelva o una opción u otra */

let option = 3;

switch (option) {
	case 1:
		let vecesSuccesion = 15;

		let numeros = [0, 1];
		let i = 2;

		while (i <= vecesSuccesion) {
			numeros[i] = numeros[i - 2] + numeros[i - 1];
			i++;
		}
		console.log(numeros);
		break;
	case 2:
		for (let j = 0; j < 100; j++) if (j % 2 == 0) console.log(j);
		break;
	case 3:
		for (let j = 0; j < 100; j++) if (j % 2 == 1) console.log(j);
		break;
	default:
		console.log("No se ha seleccionado una opción");
}
