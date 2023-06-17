// Objetos have inference of data

const hero = {
  name: "thor",
  age: 1500
}

//hero.name = 1000 -> error for the type

function createHero(name: string, age: number) {
  return {name, age}
}

const thor = createHero("thor", 1500)
//the type of the hero is the that we have here

//type alias