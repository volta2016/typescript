//Any is a variable of type any that can contain data of any type, at any time.
//Any is used to basically skip typing.
//Any es una variable de tipo any que puede contener datos de cualquier tipo, en cualquier momento
//Se utiliza para saltarnos el tipado básicamente
//rompe el tipado estático

let severalThing: any[] = ["Cat", 3, -4.56, true, null, undefined];
console.log(severalThing);

//enumerado
//enum para sacar diferentes tipos de datos
//animal: animal.mamifero, -> accede a la posición 4
enum monedas {
	yen,
	euro,
	dolar,
}
enum animal {
	anfibio,
	ave,
	pez,
	reptil,
	mamifero,
}

let gato = {
	especie: "Comun",
	edad: 7,
	animal: animal.mamifero,
};

console.log(gato);
