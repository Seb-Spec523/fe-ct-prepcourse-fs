function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let minimo= 1;
  let maximo= n;
  let sumatoria= 0;
  for (let i= minimo; i <= maximo; i++) {
    sumatoria += i;
    if (sumatoria > 100) {
      break;         
    }
  } 
  return sumatoria;
}
module.exports = sumarHastaNConBreak;
