//## Enums

//In JavaScript we could be doing some like a this

const ERROR_TYPES = {
  NOT_FOUND: "notFound",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "notFound",
}

function mostrarMensajes (tipoDeError) {
  if(tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra");
  } else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No tienes permisos para acceder");
  } else if(tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No tienes permisos para acceder");
  }
}

//En typescript, lo mejor sería que usemos Enums
//depending on how you make them they may compile to JavaScript code or not

//code for TS


//Finite data collection
// enum ERROR_TYPES_ENUM  {
//   NOT_FOUND,//0
//   UNAUTHORIZED,//1
//   FORBIDDEN,//2
// }

//generate less code
const enum ERROR_TYPES_ENUM  {
  NOT_FOUND = "notFound",//0
  UNAUTHORIZED = "unauthorized",//1
  FORBIDDEN = "notFound",//2
}


function mostrarMensajesDos (tipoDeError: ERROR_TYPES_ENUM) {
  if(tipoDeError === ERROR_TYPES_ENUM.NOT_FOUND) {
    console.log("No se encuentra");
  } else if(tipoDeError === ERROR_TYPES_ENUM.UNAUTHORIZED) {
    console.log("No tienes permisos para acceder");
  } else if(tipoDeError === ERROR_TYPES_ENUM.FORBIDDEN) {
    console.log("No tienes permisos para acceder");
  }
}