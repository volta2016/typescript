//function callback es una función que se pasa a otra funcion definimos una funcion que a su vez recibe otro parametro como funcion, en la propiedad llamada se puede pasar lo que hace
type Operacion=(valor1:number, valor2:number)=>number

function operation(x:number,y:number,func:Operacion):number
{
        return func(x,y);
}

console.log(operation(10,4,(x:number,y:number):number=>{return x*y}));
console.log(operation(14,3,(x:number,y:number):number=>{return x+y}));
console.log(operation(11,2,(x:number,y:number):number=>{return x/y}));



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


