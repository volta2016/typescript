// # narrowing
function mostrarLogitud(objeto: number | string) {
  if(typeof objeto === "string") {
     return objeto.length
  }
  return objeto.toLocaleString().length
}

// narrowing is like making a funnel

// interface Mario {
//   company: "Nintendo",
//   nombre: string,
//   saltar: () => void
// }

// interface Sonic {
//   company: "Sega",
//   nombre: string,
//   correr: () =>  void
// }


// type Personaje = Mario | Sonic

// function jugar(personaje: Personaje) {
//   console.log(personaje.nombre);

//   if (personaje.company === "Nintendo") {
//     personaje.saltar()
//     return
//   }

//   personaje.correr()
// }

//we can doing this without the company

interface Mario {
  company: "Nintendo",
  nombre: string,
  saltar: () => void
}

interface Sonic {
  company: "Sega",
  nombre: string,
  correr: () =>  void
}


type Character = Mario | Sonic

//type guard
//le met think if personaje is Sonic
function checkedIsSonicTwo(personaje: Character): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined
}


function jugarTwo(personaje: Character) {
  if (checkedIsSonic(personaje)) {
    personaje.correr()
    return
  } else {
    personaje.saltar()
    return
  }
}


function fn(x: string | number) {
  if(typeof x === "string") {
    //x is string
    x.toUpperCase()
  } else if (typeof x === "number") {
    //do something
    x.toFixed(2)
  } else {
    x//never
  }
}