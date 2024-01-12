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

// Funktionsaufruf
// ausgabeNamen2("maria");// Argumente sind Daten für Parameter






// Funktion
const prompt = require('prompt-sync')({sigint: true});

// function ausgabeNamen2(firstName) 
// {
   
//     console.log("Hallo, " + firstName + "!");
   
// }

// ausgabeNamenParams( prompt (" Vorname: "), prompt ("Nachname: "))



// function ausgabeNamenParams(firstName, familyName) 

// {
//     console.log("Hallo, " + firstName + " " + familyName + "!")

// }

/*v1*/

// Benutzerdefinierte Funktion für die Eingabe von Daten

function getUserInput(promptMessage) {
    return prompt(promptMessage);
}

// Eingabe von Vorname und Nachname

const firstName = getUserInput("Geben Sie den Vornamen ein:");
const familyName = getUserInput("Geben Sie den Nachnamen ein:");

// Funktionsaufruf

ausgabeNamenParams(firstName, familyName);

// Funktion

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo, " + firstName + " " + familyName + "!");
}

/* V2*/

function getUserInput(promptMessage) {
    return prompt(promptMessage);
}

function promptUserForNames() {
    const firstName = getUserInput("Geben Sie den Vornamen ein:");
    const familyName = getUserInput("Geben Sie den Nachnamen ein:");
    return { firstName, familyName };
}

function printGreeting(firstName, familyName) {
    console.log("Hallo, " + firstName + " " + familyName + "!");
}

// Benutzer nach Vorname und Nachname fragen
const { firstName, familyName } = promptUserForNames();

// Grüße ausgeben
printGreeting(firstName, familyName);






/***** Funktionen 03a *****/

// 03a. Vorbereitung -Trennen der Funktionalitäten

// Postulat: one function = one job (uncle Bob)

// SRP single responsibility principle