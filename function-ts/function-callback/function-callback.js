function operation(x, y, func) {
    return func(x, y);
}
console.log(operation(10, 4, function (x, y) { return x * y; }));
console.log(operation(14, 3, function (x, y) { return x + y; }));
console.log(operation(11, 2, function (x, y) { return x / y; }));
/*base example
function operation(
    x:number,
    y:number,
    func:(valor:number, valor2:number)=>number):number
{
     return func(x,y)
}



console.log(operation(10,4,(x:number, y:number):number=> {return x*y }));
console.log(operation(14,3,(x:number, y:number):number=> {return x+y }));

console.log(operation(11,2,(x:number, y:number):number=> {return x/y }));
*/
