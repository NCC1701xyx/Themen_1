/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

//Funktionsaufruf/ Call
// test();

// Funktionsrumpf/ Funktionsdeklaration/ callee

// function test()
// {
//     console.log ("Hallo, Benjamin! ");
// }
// /***** Funktionen 02a *****/
// // 2a. Parametrisierung + Datenübergabe von INNEN


// // call
// ausgabeNamen(),
// //Funktion
//   function ausgabeNamen()
// {
//     //interne variable
//     let firstName = Maria
//     console.log ("Hallo, " + firstName + "!");
    
// }
// //console.log(firstName);// fehler : scope!

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Funktionsaufruf
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // Interne Variable
    let firstName = "Maria"; // Strings müssen in Anführungszeichen stehen
    console.log("Hallo, " + firstName + "!");
    //console.log(firstName); // Das führt zu einem Fehler, da firstName außerhalb des Gültigkeitsbereichs (Scope) dieser Funktion ist
}

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN
const prompt = require('prompt-sync')({sigint: true});
// Funktionsaufruf
// ausgabeNamen2("maria");// Argumente sind Daten für Parameter






// Funktion
function ausgabeNamen2(firstName) 
{
   
    console.log("Hallo, " + firstName + "!");
   
}
