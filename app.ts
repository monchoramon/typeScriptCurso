let esSuperman:boolean = true
let esBatman;
let esAquaman:Boolean = true;

if (esSuperman) {
    console.log("Estamos salvados.");
} else {
    console.log("Ooops!!! ohh");
}

esSuperman = convertirClark();

if (esSuperman) {
    console.log("Estamos salvados.");
} else {
    console.log("Ooops!!! ohh");
}

function convertirClark() {
    return false;
}