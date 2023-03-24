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

  printName() {
    console.log("hola xxxxxxx ");
  }

  printAge() {
    console.log("Mi edad es " + this.edad);
  }
}

class Grandson extends Child {
  printAge() {
    console.log("3.14...");
  }
}

let p = new Father("Drako");
p.printName();
let h = new Child("Kyo", 17);
h.printAge();
h.printName();
let granchild = new Grandson("Emi", 20); 
granchild.printName();
granchild.printAge();




