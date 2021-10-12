/*Devolver los primeros números pares 
1- Esto que nos va a decir cuando el resto es 0 el numero es par:
if (j % 2 == 0) {}
Cuando hay solo un sentencia lo puedo hacer sin llaves
*/

for (let j = 0; j < 100; j++) if (j % 2 == 0) console.log(j);

//Los mismo pero menos código para buscar el par
for (let j = 0; j < 100; j += 2) console.log(j);
