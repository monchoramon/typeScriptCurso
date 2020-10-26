
//TIPOS BÁSICOS//

//Numbers
let avengers:number = 5;
let villanos:number = 0;
let otro = 0;

if ( avengers > villanos ) {
    console.log("Estamos salvados!!");
} else {
    console.log("Estamos muertos!!");
}

otro = 1;
otro = 2;
otro = 1 * 1;

console.log( otro );
//
//Strings/Cadenas de caracteres
//
let batman:string = "Batman";
let linternaVerde:string = 'Linterna Verde';
let volcanNegro:string = `Volcan Negro`;

console.log( batman );
console.log( linternaVerde );
console.log( volcanNegro );

let concatenar:string = `Los héroes son: ${batman}, ${linternaVerde}, ${volcanNegro}`;
console.log( concatenar );

//
// Tipo Any
//
let vengador:any = 123;
let existe;
let derrotas;

vengador = "Dr. Strange";
console.log( vengador.charAt(0) );

vengador = 155.55555;
console.log( vengador.toFixed(2) );

vengador = true;
console.log( vengador );

console.log( existe );
console.log( derrotas );

//
// Array
//

let array:number[] = [0];
array.push(123);

console.log( array );

let arrayVillanos:string[] = ["Omega Rojo", "Dormammu", "Duende Verde"];
arrayVillanos.push('1');
console.log( arrayVillanos );

//
// Tuplas
//

let arrayHeroe:[String, Number, Boolean] = ["Hola", 100, true];
arrayHeroe[2] = true;
arrayHeroe[0] = '¿1?';
arrayHeroe[1] = 1;

//
// Emum / Enumeraciones
//

enum Volumen {
    min = 25,
    middle = 50,
    max = 100
}

let audio:number = Volumen.max;
console.log( audio );
console.log( Volumen ); 

//
// Void / Vacío
//

function llamarBatman():void {
    console.log("Mostrar la batiseñal.");
    //return 1;
}

//
// Never / Nunca
//

function error(mensaje):never {
    throw new Error(mensaje);
}

//error("Error crítico... linea 11 alcanzanda.");

//
// Aserciones de tipo
//

let cualquierValor:any = "Cualquier cosa";
let largoString:number = (<string>cualquierValor).length;
console.log( largoString );

//
// Null y Undefined
//

let ironman:string;
ironman = "Tony";
ironman = null;

let numero:number = undefined;
numero = 10;