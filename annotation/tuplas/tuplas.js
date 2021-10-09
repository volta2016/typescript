//inferencia
var chair = ["Office", "black", 4];
//explicit
var chair2 = ["school", "blue", 4, true];
var chair3 = ["beach", "blue", 3, false];
var chair4 = ["house", "green", 6, true];
//we can simplify this
// let chair2: [string, string, number] = ["school", "blue", 4];
// let chair3: [string, string, number] = ["beach", "blue", 3];
// let chair4: [string, string, number] = ["house", "green", 6];
chair2[2] = 6;
console.log(chair2, chair3, chair4);

let array = ["hola", "me", "llamo", "kyo"];

for (element of array) {
	console.log(element);
}
