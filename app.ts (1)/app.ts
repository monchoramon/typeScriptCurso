// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[string, string] = [batman,superman];
let villano:[string, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum superHeroes {
  fuerzaFlash = 5,
  fuerzaSuperman = 100,
  fuerzaBatman = 1,
  fuerzaAcuaman = 0
}

let fuerzaFlash = superHeroes.fuerzaFlash;
let fuerzaSuperman = superHeroes.fuerzaSuperman;
let fuerzaBatman = superHeroes.fuerzaBatman;
let fuerzaAcuaman = superHeroes.fuerzaAcuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:any = "100";
let largoDelPoder:number = (<string>poder).length;
console.log( largoDelPoder );
