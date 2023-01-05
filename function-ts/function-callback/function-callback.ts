//function callback es una función que se pasa a otra función, definimos una función que a su vez recibe otro parámetro como función, en la propiedad llamada se puede pasar lo que hace

//tipado estatico callback
type Operacion=(valor1:number, valor2:number)=>number



//En vez de definir varias funciones a este nivel. función suma + - *
//definimos una función, que a la vez recibe otro parametro como funcion y 
//simplemente en la propiedad llamada se puede pasar lo que hace


function operation(x:number,y:number,func:Operacion):number
{
        return func(x,y);
}

console.log(operation(10,4,(x:number,y:number):number=>{return x*y}));
console.log(operation(14,3,(x:number,y:number):number=>{return x+y}));
console.log(operation(11,2,(x:number,y:number):number=>{return x/y}));

//Este ejemplo es un poco más complejo ya que debemos pasar la función
//como parámetro



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


