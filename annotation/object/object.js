//inferencia
var casa = {
    calle: "Broadway ",
    numero: 2222,
    guardia: false,
    familia: {
        padre: "Charly",
        integrantes: 7
    }
};
var calle = casa.calle, numero = casa.numero, guardia = casa.guardia, _a = casa.familia, padre = _a.padre, integrantes = _a.integrantes;
console.log(calle, numero, guardia, padre, integrantes);
console.log(casa);
//con type ts
//initialize
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
