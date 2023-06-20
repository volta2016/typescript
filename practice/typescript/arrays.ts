
//arrays
//const lenguages = [];//by default of type 'never'
//const lenguages: string[] = [];// more clear
// const lenguages: Array<string> = [];

// const lenguages: (string | number)[] = [];// more clear

// lenguages.push("JavaScript")
// lenguages.push(2)


// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' // an union type


// type HeroBasicInfo = {
//   name: string,
//   age: number,
// }


// const herosWithBaicInfo: HeroBasicInfo[] = []

/*[
  ['X', 'O', 'X'],// <--string[]
  ['O', 'X', 'O'],//<-- string[]
  ['X', '', 'O'],//<-- string[]
]*/


type CellValue = 'X' | 'O' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]


const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', '', 'O']
]


//this is a tupla
// type State = [string, (newName: string) => void]
// const [hero, setHero]: State = useState('thor')


type RGB = [number, number, number]
const rgb: RGB = [2,5,6, 'f']