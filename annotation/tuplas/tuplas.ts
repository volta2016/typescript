//type of data
type dataChair = [string, string, number, boolean];

//inferencia
let chair = ["Office", "black", 4];
//explicit
let chair2: dataChair = ["school", "blue", 4, true];
let chair3: dataChair = ["beach", "blue", 3, false];
let chair4: dataChair = ["house", "green", 6, true];

//we can simplify this
// let chair2: [string, string, number] = ["school", "blue", 4];
// let chair3: [string, string, number] = ["beach", "blue", 3];
// let chair4: [string, string, number] = ["house", "green", 6];

chair2[2] = 6;

console.log(chair2, chair3, chair4);
