
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

// Benutzer zur Eingabe der ersten Zahl auffordern
let zahl1 = prompt("Geben Sie die erste Zahl ein:");

// Benutzer zur Eingabe der zweiten Zahl auffordern
let zahl2 = prompt("Geben Sie die zweite Zahl ein:");

// Konvertiere die eingegebenen Werte von String zu Zahl
zahl1 = parseFloat(zahl1);
zahl2 = parseFloat(zahl2);

// Überprüfe, ob die Eingaben gültige Zahlen sind
if (isNaN(zahl1) || isNaN(zahl2)) {
  console.log("Ungültige Eingabe. Bitte geben Sie gültige Zahlen ein.");
} else {
  // Berechne die Summe der Zahlen
  let summe = zahl1 + zahl2;

  // Gebe die Summe in die Konsole aus
  console.log("Die Summe der Zahlen ist: " + summe);
}
