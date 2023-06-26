//# Type Assertion

//null if you don't find it
//HTMLElement if it´s finds it
//HTMLCanvasElement more especific


//const canvas = document.getElementById("canvas") as HTMLCanvasElement;
//const canvas = document.getElementById("canvas"); can be null

//we must be careful when we have the assertions of type

//how know TS that it is really retrieving a canvas element <canvas/> ?


//is inference -> TS realizes that within the if only the canvas is going to be an html

// const canvas = document.getElementById("span");

// if(canvas !== null && canvas instanceof HTMLCanvasElement) {
//   const ctx = canvas.getContext("2d")
// }

//this have a wrong

// const canvas = document.getElementById("canvas") as HTMLCanvasElement

// const ctx = canvas.getContext("2d")

const canvas = document.getElementById("span");

if(canvas instanceof HTMLCanvasElement) {//TS inferring that canvas is a HTMLCanvasElement
  //JavaScript is executing the code of the condition
  const ctx = canvas.getContext("2d")
}

//typeof -> para tipos
//intanceof -> para intancia





