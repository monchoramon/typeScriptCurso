//TIPOS BÁSICOS//
//Numbers
var avengers = 5;
var villanos = 0;
var otro = 0;
if (avengers > villanos) {
    console.log("Estamos salvados!!");
}
else {
    console.log("Estamos muertos!!");
}
otro = 1;
otro = 2;
otro = 1 * 1;
console.log(otro);
//
//Strings/Cadenas de caracteres
//
var batman = "Batman";
var linternaVerde = 'Linterna Verde';
var volcanNegro = "Volcan Negro";
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
var concatenar = "Los h\u00E9roes son: " + batman + ", " + linternaVerde + ", " + volcanNegro;
console.log(concatenar);
//
// Tipo Any
//
var vengador = 123;
var existe;
var derrotas;
vengador = "Dr. Strange";
console.log(vengador.charAt(0));
vengador = 155.55555;
console.log(vengador.toFixed(2));
vengador = true;
console.log(vengador);
console.log(existe);
console.log(derrotas);
//
// Array
//
var array = [0];
array.push(123);
console.log(array);
var arrayVillanos = ["Omega Rojo", "Dormammu", "Duende Verde"];
arrayVillanos.push('1');
console.log(arrayVillanos);
//
// Tuplas
//
var arrayHeroe = ["Hola", 100, true];
arrayHeroe[2] = true;
arrayHeroe[0] = '¿1?';
arrayHeroe[1] = 1;
//
// Emum / Enumeraciones
//
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 25] = "min";
    Volumen[Volumen["middle"] = 50] = "middle";
    Volumen[Volumen["max"] = 100] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.max;
console.log(audio);
console.log(Volumen);
//
// Void / Vacío
//
function llamarBatman() {
    console.log("Mostrar la batiseñal.");
    //return 1;
}
//
// Never / Nunca
//
function error(mensaje) {
    throw new Error(mensaje);
}
//error("Error crítico... linea 11 alcanzanda.");
//
// Aserciones de tipo
//
var cualquierValor = "Cualquier cosa";
var largoString = cualquierValor.length;
console.log(largoString);
//
// Null y Undefined
//
var ironman;
ironman = "Tony";
ironman = null;
var numero = undefined;
numero = 10;
