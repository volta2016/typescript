//for
//es para para acceder a elementos de una matriz o lista de tuplas
//for
for (var i = 0; i <= 6; i++) {
    console.log("el numero es " + i);
}
//for 2
var fullname = ["hola", "me", "llamo", "kyo"];
for (var _i = 0, fullname_1 = fullname; _i < fullname_1.length; _i++) {
    var element = fullname_1[_i];
    console.log(element);
}
var array = ["hola", "me", "llamo", "kyo"];
for (var indice in array) {
    console.log(indice, array[indice]);
}
