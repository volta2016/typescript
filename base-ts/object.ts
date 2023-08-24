

type Hero = {
  name: string,
  age: number
}

let hero = {
  name: "Thor",
  age: 1500
}

function createHero(hero: Hero): Hero {
  const {name, age} = hero
  return {name, age}
}

// The : Hero annotations after function parameters and the colon : before the function's return type are TypeScript syntax to indicate the expected types. The annotations help TypeScript catch type-related errors during development, ensuring that you're using the correct types in your code.

// In summary, the provided code is using TypeScript type annotations to define a type for a hero object, create an object of that type, and define a function that takes and returns objects of that specific type.

//Optional properties
type HeroID = `${string}-${string}-${string}-${string}-${string}-`


// commas are optionals (,)
type NewHero = {
  readonly id?: HeroID
  name: string
  age: number
  isActive?: boolean
}

function createNewHero(hero: NewHero): NewHero {
  const {name, age} = hero
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  }
}

// Type indexing - Reuse some parts of a type
type HeroProperties = {
  isActive: boolean
  address: {
      planet: string
      city: string
  }
}

const addressHero: HeroProperties["address"] = {
  planet: "Earth",
  city: "Madrid"
}

// Type from function return
function createAddress() {
  return {
    planet: 'Earth',
    city: 'Madrid'
  }
}

type Address = ReturnType<typeof createAddress>
