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


type PersonajTwo = Mario | Sonic

//type guard
//le met think if personaje is Sonic
function checkedIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined
}


function jugar(personaje: Personaje) {
  if (checkedIsSonic(personaje)) {
    personaje.correr()
  }
}