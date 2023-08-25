// Example 1

const displayLength = (object: string | string) => {
  // return object.length -> Error
  if(typeof object === "string") {

  }
}

displayLength('1')


// Example 2
interface Mario {
  company: string,
  name: string,
  jump: () => void
}

interface Sonic {
  company: string,
  name: string,
  run: () => void
}

type Character = Mario | Sonic

function play(character: Character) {
  // console.log(character.run()) -> Error because TS think it could be company or name (mix between both)
  // Idea 1: Change in Mario interface company: string by company 'Nintendo' and
  // ask if (character.company === 'Nintendo') { console.log(character.jump()) }
}