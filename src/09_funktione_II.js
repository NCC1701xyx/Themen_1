

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
  
 //v2
//  function division(a, b) {
// 	return b !== 0 ? a / b : "Division durch Null ist nicht definiert";
//   }


// function rechner(a, b, operation) {
// 	switch (operation) {
// 	  case 'addition':
// 		return addition(a, b);
// 	  case 'subtraktion':
// 		return subtraktion(a, b);
// 	  case 'multiplikation':
// 		return multiplikation(a, b);
// 	  case 'division':
// 		return division(a, b);
// 	  default:
// 		return 'Ungültige Operation';
// 	}
//   }
  //V2
 
  function rechner(a, b, operation) {
	const operationen = {
	  'addition': addition,
	  'subtraktion': subtraktion,
	  'multiplikation': multiplikation,
	  'division': division,
	};
  
	const ausgewaehlteFunktion = operationen[operation];
  
	return ausgewaehlteFunktion ? ausgewaehlteFunktion(a, b) : 'Ungültige Operation';
  }
  // Dateneingabe
  const prompt = require('prompt-sync')({sigint: true});


  function dateneingabe() {
	const a = parseFloat(prompt('Bitte geben Sie die erste Zahl ein:'));
	const b = parseFloat(prompt('Bitte geben Sie die zweite Zahl ein:'));
	const operation = prompt('Bitte geben Sie die Operation ein (addition, subtraktion, multiplikation, division):').toLowerCase();
  
	if (isNaN(a) || isNaN(b) || !(operation in { 'addition': 1, 'subtraktion': 1, 'multiplikation': 1, 'division': 1 })) {
	  alert('Ungültige Eingabe. Bitte stellen Sie sicher, dass Sie gültige Zahlen eingeben und eine der unterstützten Operationen auswählen.');
	  return null;
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





// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  