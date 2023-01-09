class Utilidades {
  //hasta que numero queremos que nos calcule los pares/impares
  numero: number;
  constructor(n:number) {

  }

  serieFibonacci(): number[] {
    let numeros=[0,1]
    
		let i = 2;

		while (i <= this.numero) {
			numeros[i] = numeros[i - 2] + numeros[i - 1];
			i++;
		}
    return numeros
  }

  numerosParesImpares(pares:boolean, hastaNumero: number):string {
    let resultado:string;
    resultado="";
    let aux=1;
    if(pares)
      aux=0

    for (let j = 0; j < 100; j++) if (j % 2 == aux) resultado += "" + j;
    
    return resultado;
  }
}

//nos queda instanciar nuestro objeto y crear nuestro switch
let u = new Utilidades(15);
let u2 = new Utilidades(100);
let optionBase = 2;
switch (optionBase) {
  case 1:
    console.log(u2.serieFibonacci());
    break;
  case 2:
    console.log(u2.numerosParesImpares(true,100));
    break;
  case 3:
    console.log(u2.numerosParesImpares(false,123));
    break;
  default:
    console.log("No comtemplado");
    break;
}