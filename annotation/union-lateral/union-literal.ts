//Union -> similar al tipo any pero mas acotado
let numeroOrBoolean: number | boolean;

// other example
// type mix = number | boolean;
// let numeroOrBoolean: mix;

numeroOrBoolean = true;
numeroOrBoolean = -333.287;
// numeroOrBoolean = "text"// esto daría error

console.log(numeroOrBoolean);

//literla;
//si definimos nuestra variable con : quiere decir que esta definiendo un tipo
//gato que solo puede ser utlizado con este valor, es simplemente inicializarlo
//una vez
let felino: "gato"; //> realmente es un tipo no una cadena de texto
//console.log(felino.toString()); //Esto va petar

//felino="pantera" //no pedemos asignar ya que le estamos diciendo que el tipo de gato es gato
//no se puede volver a inicializar
