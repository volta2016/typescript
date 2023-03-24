Se utliza para que una propiedad o método solo pueda ser vista
dentro de las clases hijas. Solo puede ser heredado y utlizado dentro
de las clases hijas.

si colocamos podemos acceder desde nuetra clase hija son ningún problema

```js
class Father {
  protected name: string;
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
```

```js
class Father {
  private name: string;
  constructor(n: string) {
    this.name = n;
  }

  printName() {
    console.log("Mi nombre es " + this.name);
  }
}
```

private simplemnete esta en el ambito de clase, los mismo para los métodos
podemos dejarlos que no sean accesibles. Es si queremos que algo sea accesible
solo en la propiedad clase.

Si queremos que algo sea accesible por clases padres e hijas usamos protected.

Si queremos que algo sea accesible dentro del ambito de la aplicación utilizamos Public.
