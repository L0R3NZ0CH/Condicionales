let userInput = prompt("Por favor, ingresa un número:");

// Convertir la entrada a un número
let numero = parseFloat(userInput);

// Verificar si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else if (numero === 0) {
    console.log("El número es cero");
} else {
    console.log("Ingresaste algo que no es un número");
}

let estaciones= prompt("¿Que estacion estas?");
switch (estaciones){
case "otoño":
console.log("Otoño es en Septiembre, Octubre, Noviembre, Diciembre");
break;
case "invierno":
    console.log("Invierno es en Diciembre, Enero, Febrero y Marzo");
    break;
case "primavera":
console.log("Primavera es Marzo, Abril, Mayo y Junio");
break;
case "verano":
    console.log("Verano es en Junio, Julio, Agosto y Septiembre");
    break;
      default:
        console.log("No reconocí la estación ingresada.");
}





