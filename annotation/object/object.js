//inferencia
var casa = {
    calle: "Broadway ",
    numero: 2222,
    guardia: false,
    familia: {
        padre: "Charly",
        integrantes: 7
    },
    presentacion: ["hi", "from", "object casa"]
};
var calle = casa.calle, numero = casa.numero, guardia = casa.guardia, _a = casa.familia, padre = _a.padre, integrantes = _a.integrantes, presentacion = casa.presentacion;
console.log(calle, numero, guardia, padre, integrantes, presentacion);
//con type ts
//declarar - explicitly(in theory this is to declare in js)
var home2 = {
    street: "New York",
    num: 22,
    guard: true,
    family: {
        father: "Keichi",
        members: 7
    }
};
//initialize
// home2.street = "new york update";
console.log(home2);
var home3 = {
    street: "Bersalles",
    num: 2222,
    guard: true,
    animals: {
        cat: "Felix",
        numAnimals: 4
    }
};
console.log(home3);
