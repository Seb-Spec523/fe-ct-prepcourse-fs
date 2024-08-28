function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  if (a > b) {
    return 0;
  }

  for (let i = a; i <= b; i++) {
    producto *= i;
  }

  if (producto === 0) {
    return 0;
  }
  return producto;
}

module.exports = productoEntreNúmeros;