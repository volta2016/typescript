# TypeScript desde 0

## Qué es TypeScript
En resumen, TypeScript se define como una especie de superset de JavaScript, cuyo resultado final es un código de JavaScript.

## TypeScript lo que hace es encapsular varios elementos:

 - Una serie de funcionalidades de JavaScript 5, que es considerada hoy en día como un estándar y es la que todos los navegadores comprenden, incluso Node.js a nivel de servidor lo comprende.
 - Como JavaScript ha seguido creciendo y apareció ECMAScript 6 (ES6), que añade nuevas funcionalidades, y que también está englobado dentro de TypeScript.
 - Añade el uso un tipado muy estricto, en lugar del tipado dinámico de JavaScript, para intentar solucionar una serie de problemas. Aunque estos tipados no son requeridos, es recomendable utilizarlos para tener un código mucho más limpio.
-  Añade la posibilidad de poder utilizar interfaces, para poder definir nuestros propios tipos o intentar aplicar programación orientada objetos luego.
- También añade la funcionalidad de genérica, que permite poder definir funciones que sean reutilizables, independientemente del tipo de datos que vayamos a tratar.



### Instalación de TypeScript a nivel local

Puedes ocupar npm o yarn
https://www.typescriptlang.org/download

Local install

[typescript](https://www.typescriptlang.org/download)

- yarn add typescript --dev

- Luego ya posicionado dentro de nuestra carpeta y creado nuestro archivo o programa con typescript ejecutamos:

- npx tsc namefile.ts

- nos va devolver el archivo compilado con la extensión de .js

- luego podemos ejecutar nuestro archivo ya compilaldo con node 

- node namefile.js




![TypeScript]()

### Links TypeScript

- Pagina oficial [TypeScript](https://www.typescriptlang.org/)
- Playground [TypeScript Playground](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)

### Resumen TypeScript

- Este resumen lo voy actualizando en la medida que puedo 
- Voy documentando lo que pasa tras Bambalinas con los tipos de datos
- Voy documentando el código cuando trabajo el type: 
**por inferencia y el que esta definido  su type explícitamente**
