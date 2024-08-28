function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let minimo= 1
  let maximo= n
  let sumatoria= 0;

  for (let i = minimo; i <= maximo; i++) {
    sumatoria += i; 
  }
  return sumatoria;
}
module.exports = sumarHastaN;
