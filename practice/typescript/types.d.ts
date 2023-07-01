export interface IAvenger {
  readonly name: string
  powerScore: number
  wonBattles: number
  age: number
  battle: (enemy: IAvenger, win: boolean) => void
}

export type HeroID = `${number}-${string}`

//d of definition
