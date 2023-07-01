import {type IAvenger } from  "./types"





class Avenger implements IAvenger {

  name: string
  powerScore: number
  wonBattles: number
  age: number
  
  constructor(name: string, powerScore: number) {
    this.name = name
    this.powerScore = powerScore
    this
  }

  // battle: (enemy, win) {
  //   if(win) {
  //     this.wonBattles++
  //     this.powerScore += 5
  //   } else {
  //     this.powerScore -= 5
  //   }
  // }

  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`
  }

  set power(newPower: number) {
    if(newPower <= 100) {
      this.powerScore = newPower
    } else {
      throw new Error("Power score cannot be more than 100")
    }
  }
}

const avengers = new Avenger("Spidey", 80)
// avengers.name = "Hulk"