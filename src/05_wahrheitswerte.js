
// /* Berechnung Alter */

// // Deklaration
// let ageJohn, ageMark;
// const birthYearJohn = 2000;
// const birthYearMark = 1990;

// // Berechnung Alter
// let date = new Date(); // Systemfunktion Datum
// let year = date.getFullYear(); // Daten liefern lassen
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("Datum: " + date);
const prompt = require('prompt-sync')({sigint: true});
// Geburtsdatum abfragen und Alter anzeigen
function alterBerechnen(geburtsdatum) {
    let geburtsdatumObjekt = new Date(geburtsdatum);
    let aktuellesDatum = new Date();
    let differenzJahre = aktuellesDatum.getFullYear() - geburtsdatumObjekt.getFullYear();

    if (aktuellesDatum.getMonth() < geburtsdatumObjekt.getMonth() ||
        (aktuellesDatum.getMonth() === geburtsdatumObjekt.getMonth() &&
        aktuellesDatum.getDate() < geburtsdatumObjekt.getDate())) {
        differenzJahre--;
    }

    return differenzJahre;
}

// Beispielaufruf
let geburtsdatum = prompt("Geben Sie Ihr Geburtsdatum im Format YYYY-MM-DD ein:");
let alter = alterBerechnen(geburtsdatum);
console.log("Ihr Alter beträgt " + alter + " Jahre.");
