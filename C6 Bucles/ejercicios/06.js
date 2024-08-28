function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  const numero= num
  const cadenaNumero= numero.toString();
  const cantidadCifras= cadenaNumero.length;
  if (cantidadCifras === 3)
    return true;
  else
    return false;
}  
module.exports = tieneTresDigitos;
