/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/
// Addition
function addition(a, b) {
    return a + b;
}

// Subtraktion
function subtraktion(a, b) {
    return a - b;
}

// Multiplikation
function multiplikation(a, b) {
    return a * b;
}

// Division
function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Division durch Null ist nicht definiert";
    }
}

// Funktionen in einem Objekt speichern
const operationen = {
    'addition': addition,
    'subtraktion': subtraktion,
    'multiplikation': multiplikation,
    'division': division,
};

// Rechner-Funktion
function rechner(a, b, operation) {
    const ausgewaehlteFunktion = operationen[operation];

    return ausgewaehlteFunktion ? ausgewaehlteFunktion(a, b) : 'Ungültige Operation';
}

// Dateneingabe
const prompt = require('prompt-sync')({ sigint: true });

function dateneingabe() {
    const a = parseFloat(prompt('Bitte geben Sie die erste Zahl ein:'));
    const b = parseFloat(prompt('Bitte geben Sie die zweite Zahl ein:'));
    const operation = prompt('Bitte geben Sie die Operation ein (addition, subtraktion, multiplikation, division):').toLowerCase();

    if (isNaN(a) || isNaN(b) || !(operation in operationen)) {
        console.log('Ungültige Eingabe. Bitte stellen Sie sicher, dass Sie gültige Zahlen eingeben und eine der unterstützten Operationen auswählen.');
        return ;
    }

    return { a, b, operation };
}

// Beispielaufruf der Dateneingabe und -überprüfung
const eingabe = dateneingabe();

if (eingabe) {
    const { a, b, operation } = eingabe;
    const ergebnis = rechner(a, b, operation);
    console.log(`Das Ergebnis von ${a} ${operation} ${b} ist: ${ergebnis}`);
}

// Funktion zur Ausgabe
function output(outputData) {
    console.log(outputData);
}
