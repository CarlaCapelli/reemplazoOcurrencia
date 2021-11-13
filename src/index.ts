let oc: number = 3;
let cant: number = 10;
function cargado(arreglo: number[], cant: number) {
  for (let i: number = 0; i < cant; i++) {
    arreglo[i] = Number(prompt("ingrese el valor en " + i));
  }
}

function reemplazo(arr: number[], cant: number) {
  for (let i: number = 0; i < cant; i++) {
    if (arr[i] === oc) {
      arr[i] = 0;
    }
  }
}

let arr1: number[] = new Array(cant);
cargado(arr1, cant);
reemplazo(arr1, cant);
console.log(arr1);
