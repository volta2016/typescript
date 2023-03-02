# Herencia

En typescript la herencia se basa en un sistema jerárquico.
En lugar de basarse en una cadena de objetos anidados, la herencia
es un método de compartir atributos de forma jerárquica entre clases

```js
class Father {
  name: string;
  constructor(n: string) {
    this.name = n;
  }

  printName() {
    console.log("Mi nombre es " + this.name);
  }
}

let p = new Father("Drako");
p.printName();
```

Ahora vamos a crear una clase que herede de la clase padre que nosotros
hemos definido, la herencia es que podemos crear nuevas clases partiendo
de clases ya existentes, así evitamos escribir código duplicado.

De esta forma podemos acceder a todas las propiedades de clase padre
y la clase hijo

```js
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

let p = new Father("Drako");
p.printName();
let h = new Child("Kyo", 17);
h.printEdad();
h.printName();
```

**super** se utliza para llamar al constructor de la clase padre.

Si dejamos la clase vacía por defecto, en typescript se puede hacer uso
del constructor vacío, la herencia no tiene limites.

Al usar private solo corre en ámbito de la propia clase.

La herencia es una forma de compartir métodos y atributos de forma jerárquica
entre clases
