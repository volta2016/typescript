// Objetos have inference of data

// const hero = {
//   name: "thor",
//   age: 1500
// }

//hero.name = 1000 -> error for the type

// function createHero(name: string, age: number) {
//   return {name, age}
// }

// const thor = createHero("thor", 1500)
//the type of the hero is the that we have here

//type alias

//let's define how is a heroe always in pascalCase

// type Hero = {
//   name: string,
//   age: number
// }

// const hero: Hero = {
//   name: "thor",
//   age: 1500
// }

// function createHero(hero: Hero): Hero {
//   const {name, age} = hero;
//   return {name, age}
// }

// //right now will expect one argument, not two argument
// const thor = createHero({name: "thor", age: 1500})

//Optional properties

// type Hero = {
//   readonly id?: number
//   name: string,
//   age: number
//   isActive?: boolean //is optional
// }

// let hero: Hero = {
//   name: "thor",
//   age: 1500
// }

// function createHero(hero: Hero): Hero {
//   const {name, age} = hero;
//   return {name, age, isActive: true}
// }

// //right now will expect one argument, not two argument
// const thor = Object.freeze(createHero({name: "thor", age: 1500}))

// //with the object freeze you can't mutate
// console.log(thor.isActive)// -> true

// thor.id?.toString() //is a way to ask before continuing

// //typescript not functioning in execution


// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//   readonly id?: HeroId //only you can read this property not modify
//   name: string,
//   age: number
//   isActive?: boolean //is optional
// }  

// let hero: Hero = {
//   name: "thor",
//   age: 1500
// }

// function createHero(hero: Hero): Hero {
//   const {name, age} = hero;
//   return {id: crypto.randomUUID(), name, age, isActive: true}
// }

// //right now will expect one argument, not two argument
// const thor = createHero({name: "thor", age: 1500})

//template union types

// type HexadecimalColor = `#${string}`

// const color: HexadecimalColor = "0033ff" //hexadecimales
// const color2: HexadecimalColor = "#0033ff" //hexadecimales


//Union Type

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' // an union type

// //you can use value directly

// // let ann: string | 2
// // ann = 3


// type Hero = {
//   readonly id?: HeroId, //only you can read this property not modify
//   name: string,
//   age: number,
//   isActive?: boolean, //is optional
//   powerScale?: HeroPowerScale
// }  

// let hero: Hero = {
//   name: "thor",
//   age: 1500
// }

// function createHero(hero: Hero): Hero {
//   const {name, age} = hero;
//   return {id: crypto.randomUUID(), name, age, isActive: true}
// }

// //right now will expect one argument, not two argument
// const thor = createHero({name: "thor", age: 1500})
// thor.powerScale = "planetary"

//Intersetion Types


// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' // an union type


// type HeroBasicInfo = {
//   name: string,
//   age: number,
// }

// type HeroProperties = {

//   readonly id?: HeroId, //only you can read this property not modify
//   isActive?: boolean, //is optional
//   powerScale?: HeroPowerScale
// }  

// type Hero = HeroBasicInfo & HeroProperties

// let hero: Hero = {
//   name: "thor",
//   age: 1500
// }

// function createHero(input: HeroBasicInfo): Hero {
//   const {name, age} = input;
//   return {id: crypto.randomUUID(), name, age, isActive: true}
// }

// //right now will expect one argument, not two argument
// const thor = createHero({name: "thor", age: 1500})
// thor.powerScale = "planetary"


//Type indexing

// type HeroProperties = {
//   isActive: boolean,
//   address: {
//     planet: string,
//     city: string
//   }
// }

// const addressHero: HeroProperties['address'] = {
//   planet: 'Earth',
//   city: 'Madrid'
// }


//Type from Value

// const address = {
//   planet: 'Earth',
//   city: 'Madrid'
// }

// type Address = typeof address

// const addressTwitch: Address = {
//   planet: 'Mars',
//   city: 'Twitch'
// }

//type from function return


function createAddress() {
  return {
    planet: 'Tierra',
    city: 'Barcelona'
  }
}


//we have a utility that is called return type, I can tell it I want you to ////retrieve the type of what returns the function that has this create Address 


//you can extract of any function
type Addres = ReturnType<typeof createAddress>