class Father {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  printName() {
    console.log("Mi nombre es " + this.name);
  }
}

class Child extends Father {
  edad: number;
  
  
  constructor(n: string, e: number) {
    super(n);
    this.edad = e;
  }

  printEdad() {
    console.log("Mi edad es " + this.edad);
  }
}

class Grandson extends Child {

}

let p = new Father("Drako");
p.printName();
let h = new Child("Kyo", 17);
h.printEdad();
h.printName();
let granchild = new Grandson("Emi", 20); 
granchild.printName();



