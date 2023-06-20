type Hero = {
  readonly id?: `${string}-${string}-${string}-${string}-${string}`,
  name: string,
  age: number,
  isActive?: boolean 
}

// const hero: Hero = {
//   id: 1,
//   name: "Miles Morales",
//   age: 21,
//   isActive: true
// }


//hero.id = 22; //does not allow you to change it, but does not make it immutable, it gives you an error when you try it

function createHero(hero: Hero): Hero {
  const {name, age} = hero;
  return {id: crypto.randomUUID(), name, age, isActive: true}
}

//template union type

type Color = `#${string}`

const hexadecimalColor: Color = '#ff0000'

const blackHexadecimal: Color = 'ff0000'

//an array of array
//matriz of 3 x 3
// const board: string[][] = [
//   ['X','','', ''],
//   ['','X',''],
//   ['','','O']
// ]

//to not make this mistake we will use the tuples

type CellValueTwo = 'X' | 'O' | ''
type GameBoardTwo = [
  [CellValueTwo, CellValueTwo, CellValueTwo],
  [CellValueTwo, CellValueTwo, CellValueTwo],
  [CellValueTwo, CellValueTwo, CellValueTwo]
]


const gameBoardTwo: GameBoardTwo = [
  ['X', 'O', 'X', ''],//mark an issue
  ['O', 'X', 'O'],
  ['X', '', 'O']
]

type RGBTWO = readonly[number, number, number]

const black: RGBTWO = [0,0,0]
const white: RGBTWO = [255, 255, 255]

black.push(4)// we are breaking the contract

