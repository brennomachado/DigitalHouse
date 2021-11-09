function podeSubir(altura, acompanhado) {
  // altura > 1.40 < 2.00
  // < 1.40 = acompanhado
  // < 1.20 = não pode subir mesmo acompanhada
  if (altura > 1.40 && altura < 2.00) {
    return true;
  } else if (altura <= 1.40 && altura >= 1.20) {
    return true;
  } else {
    return false;
  }
}
console.log(podeSubir(1.20,true))
console.log(podeSubir(1.30,true))
console.log(podeSubir(2.10,true))
console.log(podeSubir(1.0,true))
//--------------------------------------------------------------
console.log("Parte 2")
function podeSubirTwo(altura, acompanhado) {
  // altura > 1.40 < 2.00
  // < 1.40 = acompanhado
  // < 1.20 = não pode subir mesmo acompanhada
  if (altura >= 1.40 && altura < 2.00) {
    console.log("Acesso autorizado!");
  } else if (altura < 1.40 && altura >= 1.20 && acompanhado) {
    console.log("Acesso autorizado somente com acompanhante");
  } else {
    console.log("Acesso negado!");
  }
}
podeSubirTwo(1.20,false)
podeSubirTwo(1.30,true)
podeSubirTwo(2.10,false)
podeSubirTwo(1.50,true)
podeSubirTwo(1.50,false)

console.log("Emanuel Nogueira - Brenno Machado - João Lassi - Géssy - Gulherme")
