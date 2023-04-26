let convert =  document.getElementById("convert");
function convertir() {
  let numero = document.getElementById("num-input").value;
  let baseInicial = document.getElementById("mainBase").value;
  let baseFinal = document.getElementById("toBase").value;

  
  // Validación del número según la base inicial
  let regex = new RegExp("^[0-" + String.fromCharCode(baseInicial + 86) + "]+$");
  if (!regex.test(numero)) {
      alert("El número ingresado no es válido para la base inicial.");
      return;
  }
  
  // Conversión a base decimal
  let decimal = 0;
  for (let i = 0; i < numero.length; i++) {
      decimal += (numero.charCodeAt(i) - 48) * Math.pow(baseInicial, numero.length-i-1);
  }
  
  // Conversión a base final
  let nuevoNumero = "";
  while (decimal > 0) {
      let residuo = decimal % baseFinal;
      nuevoNumero = String.fromCharCode(residuo + 48 + (residuo > 9 ? 7 : 0)) + nuevoNumero;
      decimal = Math.floor(decimal / baseFinal);
  }
  
  // Mostrar resultado
  document.getElementById("output").innerHTML = "El número " + numero + " en base " + baseInicial + " es equivalente a " + nuevoNumero + " en base " + baseFinal + ".";
}
convert.addEventListener("click",()=>{
  convertir()
})