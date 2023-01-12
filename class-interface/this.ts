/*para entender la palabra clave this hay que entender bien
de donde se invoca, para saber a que objeto se asigna
*/


//caso 1
class MiObjeto {
  cadena: string;
  constructor(s:string) {
    this.cadena = s
  }
  datos() {
    console.log(this.cadena);
  
  }
  
}

let objectOne = new MiObjeto("Data this");//al crear el object ya serva el espacio en mem.
objectOne.datos(); 


//caso 

let printMessage = function(str1, str2) {
  return {
    name: str1,
    sendStr: function() {
      console.log(this.name); 
    },
    name2: {
      name: str2,
      sendStr: function() {
        console.log(this.name); 
      },
    }
  }
}

const message = printMessage("Hi","TS! ");
message.sendStr();
message.name2.sendStr();

//caso 3
const fn = {
  datos: objectOne.datos(), 
}

fn.datos();//undefined no encuentra el contexto, ts dice que es invocable