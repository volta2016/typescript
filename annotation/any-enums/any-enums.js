//Any is a variable of type any that can contain data of any type, at any time.
//Any is used to basically skip typing.
//Any es una variable de tipo any que puede contener datos de cualquier tipo, en cualquier momento
//Se utiliza para saltarnos el tipado básicamente
var severalThing = ["Cat", 3, -4.56, true, null, undefined];
console.log(severalThing);
var monedas;
(function (monedas) {
    monedas[monedas["yen"] = 0] = "yen";
    monedas[monedas["euro"] = 1] = "euro";
    monedas[monedas["dolar"] = 2] = "dolar";
})(monedas || (monedas = {}));
var animal;
(function (animal) {
    animal[animal["anfibio"] = 0] = "anfibio";
    animal[animal["ave"] = 1] = "ave";
    animal[animal["pez"] = 2] = "pez";
    animal[animal["reptil"] = 3] = "reptil";
    animal[animal["mamifero"] = 4] = "mamifero";
})(animal || (animal = {}));
var gato = {
    especie: "Comun",
    edad: 7,
    animal: animal.mamifero
};
console.log(gato);
